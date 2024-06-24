import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
} from "firebase/firestore";
import { Identifiable, Repository } from "./repository";
import { db } from "@/services/firebase";
import { handleFirestoreError } from "@/utils";

/**
 * Lớp FirestoreRepository
 *
 * Triển khai các phương thức CRUD (Create, Read, Update, Delete) cho Firestore.
 * Lớp này sử dụng Firestore của Firebase để lưu trữ và quản lý dữ liệu.
 *
 * @template T - Kiểu dữ liệu của đối tượng mà repository sẽ quản lý. T phải mở rộng từ interface Identifiable.
 */
export class FirestoreRepository<T extends Identifiable>
  implements Repository<T>
{
  private collectionName: string;

  /**
   * Khởi tạo FirestoreRepository với tên của collection.
   *
   * @param collectionName - Tên của collection trong Firestore.
   */
  constructor(collectionName: string) {
    this.collectionName = collectionName;
  }

  /**
   * Tạo một đối tượng mới trong Firestore.
   *
   * @param item - Đối tượng cần tạo, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  async create(item: Omit<T, "id">): Promise<void> {
    // Thêm tài liệu mới vào collection
    return await addDoc(collection(db, this.collectionName), item)
      .then((docRef) => {
        // In ra ID của tài liệu mới
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(handleFirestoreError); // Xử lý lỗi nếu có
  }

  /**
   * Đọc một đối tượng từ Firestore bằng ID.
   *
   * @param id - ID của đối tượng cần đọc.
   * @returns Một Promise trả về đối tượng nếu tìm thấy, hoặc null nếu không tìm thấy.
   */
  async read(id: string): Promise<T | null> {
    // Tạo tham chiếu đến tài liệu
    const docRef = doc(db, this.collectionName, id);

    // Lấy tài liệu từ Firestore
    return await getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          // Chuyển đổi dữ liệu tài liệu thành đối tượng T
          const item = docSnap.data() as T;

          // Trả về đối tượng với ID
          return { ...item, id: docSnap.id };
        } else {
          // Trả về null nếu tài liệu không tồn tại
          return null;
        }
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        handleFirestoreError(error);

        // Trả về null nếu có lỗi
        return null;
      });
  }

  /**
   * Cập nhật một đối tượng trong Firestore bằng ID.
   *
   * @param id - ID của đối tượng cần cập nhật.
   * @param item - Đối tượng chứa các thuộc tính cần cập nhật, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  async update(id: string, item: Partial<Omit<T, "id">>): Promise<void> {
    // Tạo tham chiếu đến tài liệu
    const docRef = doc(db, this.collectionName, id);

    // Cập nhật tài liệu trong Firestore
    return await updateDoc(docRef, { ...item })
      .then(() => {
        // In ra ID của tài liệu đã cập nhật
        console.log("Document updated with ID: ", id);
      })
      .catch(handleFirestoreError); // Xử lý lỗi nếu có
  }

  /**
   * Xóa một đối tượng từ Firestore bằng ID.
   *
   * @param id - ID của đối tượng cần xóa.
   * @returns Một Promise không trả về giá trị.
   */
  async delete(id: string): Promise<void> {
    // Tạo tham chiếu đến tài liệu
    const docRef = doc(db, this.collectionName, id);

    // Lấy tài liệu từ Firestore
    return await getDoc(docRef)
      .then((docSnap) => {
        if (!docSnap.exists()) {
          // Ném lỗi nếu tài liệu không tồn tại
          throw new Error(`Document with ID ${id} does not exist.`);
        }

        // Xóa tài liệu
        return deleteDoc(docRef);
      })
      .then(() => {
        // In ra ID của tài liệu đã xóa
        console.log("Document deleted with ID: ", id);
      })
      .catch(handleFirestoreError); // Xử lý lỗi nếu có
  }

  /**
   * Lấy tất cả các đối tượng từ Firestore.
   *
   * @returns Một Promise trả về một mảng các đối tượng.
   */
  async getAll(): Promise<T[]> {
    // Tạo truy vấn cho collection
    const q = query(collection(db, this.collectionName));

    // Lấy tất cả tài liệu từ Firestore
    return await getDocs(q)
      .then((querySnapshot) => {
        const items: T[] = [];

        querySnapshot.forEach((doc) => {
          // Chuyển đổi dữ liệu tài liệu thành đối tượng T
          const item = doc.data() as T;

          // Thêm đối tượng vào mảng với ID
          items.push({ ...item, id: doc.id });
        });

        // Trả về mảng các đối tượng
        return items;
      })
      .catch((error) => {
        // Xử lý lỗi nếu có
        handleFirestoreError(error);

        // Trả về mảng rỗng nếu có lỗi
        return [];
      });
  }
}
