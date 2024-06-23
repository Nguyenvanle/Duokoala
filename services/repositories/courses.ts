import { CourseProps } from "@/models/course/model";
import { Repository, handleFirestoreError } from "./repository";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  updateDoc,
  deleteDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../firebase/config";

export class CourseRepository implements Repository<CourseProps> {
  private courses: CourseProps[] = [];

  async create(course: Omit<CourseProps, "id">): Promise<void> {
    // Quy định đầu vào là một khóa học được loại bỏ id
    // Id sẽ được tự động tạo bằng firestore
    // Ta sẽ đồng bộ id vào mảng local sau này

    // Thêm khóa học vào Firestore với
    return await addDoc(collection(db, "courses"), course)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);

        // Tạo đối tượng mới với id từ Firestore
        const newCourse = { ...course, id: docRef.id };

        // Đẩy đối tượng mới ngược lại vào mảng sau khi đồng bộ id
        this.courses.push(newCourse);
      })
      .catch(handleFirestoreError);
  }

  async read(id: string): Promise<CourseProps | null> {
    // Đọc khóa học từ Firestore dựa theo id
    const docRef = doc(db, "courses", id);
    return await getDoc(docRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          const course = docSnap.data() as CourseProps;

          // Trả về đối tượng với id từ Firestore
          return { ...course, id: docSnap.id };
        } else {
          return null;
        }
      })
      .catch((error) => {
        handleFirestoreError(error);
        return null;
      });
  }

  async update(id: string, course: Omit<CourseProps, "id">): Promise<void> {
    // Cập nhật khóa học tương ứng với id của khóa học đầu vào
    const docRef = doc(db, "courses", id);

    //override thuộc tính của khóa học lên firestore
    return await updateDoc(docRef, { ...course })
      .then(() => {
        // Tìm khóa học tương ứng với id của khóa học đầu vào trong mảng Local
        const index = this.courses.findIndex((c) => c.id === id);

        // Nếu khóa học tồn tại : khóa học đầu -> mảng Local
        if (index !== -1) {
          // Cập nhật đối tượng với id từ Firestore
          this.courses[index] = { ...course, id };
        }
      })
      .catch(handleFirestoreError);
  }

  async delete(id: string): Promise<void> {
    // Tìm và xóa khóa học dựa theo id đầu vào
    const docRef = doc(db, "courses", id);
    return await getDoc(docRef)
      .then((docSnap) => {
        if (!docSnap.exists()) {
          throw new Error(`Document with ID ${id} does not exist.`);
        }
        return deleteDoc(docRef);
      })
      .then(() => {
        // Thay thế mảng khóa học cũ bằng mảng khóa học mới
        // Mảng mới chỉ chứa những khóa học khác với id được truyền vào
        // Bên trong filter() sử dụng hàm call back
        // Hàm này sẽ được gọi cho từng phần tử trong mảng this.courses
        // Đây là cấu trúc chuẩn của JSON, chúng ta không nên sử dụng phương pháp khác
        this.courses = this.courses.filter((course) => course.id !== id);
      })
      .catch(handleFirestoreError);
  }

  async getAll(): Promise<CourseProps[]> {
    // Lấy tất cả khóa học trên Firestore
    const q = query(collection(db, "courses"));
    return await getDocs(q)
      .then((querySnapshot) => {
        const courses: CourseProps[] = [];
        querySnapshot.forEach((doc) => {
          const course = doc.data() as CourseProps;

          // Sử dụng id từ Firestore làm id duy nhất
          course.id = doc.id;

          // Thêm đối tượng với id từ Firestore vào mảng Local
          courses.push({ ...course, id: doc.id });
        });

        // Trả về mảng khóa học nếu ở đầu ra của hàm getAll()
        return courses;
      })
      .catch((error) => {
        handleFirestoreError(error);
        return [];
      });
  }
}
