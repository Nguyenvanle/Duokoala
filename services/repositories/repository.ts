export interface Repository<T> {
  create(item: T): Promise<void>;
  read(id: string): Promise<T | null>;
  update(id: string, item: T): Promise<void>;
  delete(id: string): Promise<void>;
  getAll(): Promise<T[]>;
}

// Hàm tiện ích để xử lý lỗi Firestore
export const handleFirestoreError = (error: any): void => {
  console.error("Firestore Error: ", error);
  // Bạn có thể thêm logic xử lý lỗi cụ thể ở đây
  // Ví dụ: Hiển thị thông báo lỗi cho người dùng
};
