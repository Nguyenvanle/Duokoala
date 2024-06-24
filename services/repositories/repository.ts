/**
 * Interface Identifiable
 *
 * Định nghĩa một interface cơ bản cho các đối tượng có thuộc tính `id`.
 * Interface này đảm bảo rằng bất kỳ đối tượng nào triển khai nó đều phải có thuộc tính `id` kiểu string.
 */
export interface Identifiable {
  id: string;
}

/**
 * Interface Repository
 *
 * Định nghĩa các phương thức cơ bản cho một repository.
 * Repository là một lớp trung gian giữa ứng dụng và cơ sở dữ liệu, cung cấp các phương thức CRUD (Create, Read, Update, Delete).
 *
 * @template T - Kiểu dữ liệu của đối tượng mà repository sẽ quản lý. T phải mở rộng từ interface Identifiable.
 */
export interface Repository<T extends Identifiable> {
  /**
   * Tạo một đối tượng mới trong cơ sở dữ liệu.
   *
   * @param item - Đối tượng cần tạo, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  create(item: Omit<T, "id">): Promise<void>;

  /**
   * Đọc một đối tượng từ cơ sở dữ liệu bằng ID.
   *
   * @param id - ID của đối tượng cần đọc.
   * @returns Một Promise trả về đối tượng nếu tìm thấy, hoặc null nếu không tìm thấy.
   */
  read(id: string): Promise<T | null>;

  /**
   * Cập nhật một đối tượng trong cơ sở dữ liệu bằng ID.
   *
   * @param id - ID của đối tượng cần cập nhật.
   * @param item - Đối tượng chứa các thuộc tính cần cập nhật, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  update(id: string, item: Partial<Omit<T, "id">>): Promise<void>;

  /**
   * Xóa một đối tượng từ cơ sở dữ liệu bằng ID.
   *
   * @param id - ID của đối tượng cần xóa.
   * @returns Một Promise không trả về giá trị.
   */
  delete(id: string): Promise<void>;

  /**
   * Lấy tất cả các đối tượng từ cơ sở dữ liệu.
   *
   * @returns Một Promise trả về một mảng các đối tượng.
   */
  getAll(): Promise<T[]>;
}
