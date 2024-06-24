import { Identifiable, Repository } from "@/services/repositories";

/**
 * Lớp ViewModel
 *
 * Quản lý trạng thái và logic cho các thao tác CRUD (Create, Read, Update, Delete).
 * Sử dụng Repository để tương tác với nguồn dữ liệu.
 *
 * @template T - Kiểu dữ liệu của đối tượng mà ViewModel sẽ quản lý. T phải mở rộng từ interface Identifiable.
 */
export class ViewModel<T extends Identifiable> {
  private repository: Repository<T>;

  /**
   * Khởi tạo ViewModel với repository.
   *
   * @param repository - Repository để tương tác với nguồn dữ liệu.
   */
  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  /**
   * Xử lý lỗi.
   *
   * @param error - Lỗi cần xử lý.
   */
  private handleError(error: any): void {
    console.error("Error: ", error);
    // Bạn có thể thêm logic xử lý lỗi cụ thể ở đây
    // Ví dụ: Hiển thị thông báo lỗi cho người dùng
  }

  /**
   * Thêm một đối tượng mới.
   *
   * @param item - Đối tượng cần thêm, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  async addItem(item: Omit<T, "id">): Promise<void> {
    try {
      // Gọi phương thức create của repository để thêm đối tượng mới
      await this.repository.create(item);
    } catch (error) {
      // Xử lý lỗi nếu có
      this.handleError(error);
    }
  }

  /**
   * Cập nhật một đối tượng bằng ID.
   *
   * @param id - ID của đối tượng cần cập nhật.
   * @param item - Đối tượng chứa các thuộc tính cần cập nhật, không bao gồm thuộc tính `id`.
   * @returns Một Promise không trả về giá trị.
   */
  async updateItem(id: string, item: Partial<Omit<T, "id">>): Promise<void> {
    try {
      // Gọi phương thức update của repository để cập nhật đối tượng
      await this.repository.update(id, item);
    } catch (error) {
      // Xử lý lỗi nếu có
      this.handleError(error);
    }
  }

  /**
   * Xóa một đối tượng bằng ID.
   *
   * @param id - ID của đối tượng cần xóa.
   * @returns Một Promise không trả về giá trị.
   */
  async deleteItem(id: string): Promise<void> {
    try {
      // Gọi phương thức delete của repository để xóa đối tượng
      await this.repository.delete(id);
    } catch (error) {
      // Xử lý lỗi nếu có
      this.handleError(error);
    }
  }

  /**
   * Lấy tất cả các đối tượng.
   *
   * @returns Một Promise trả về một mảng các đối tượng.
   */
  async getAllItems(): Promise<T[]> {
    try {
      // Gọi phương thức getAll của repository để lấy tất cả đối tượng
      return await this.repository.getAll();
    } catch (error) {
      // Xử lý lỗi nếu có
      this.handleError(error);
      // Trả về mảng rỗng nếu có lỗi
      return [];
    }
  }

  /**
   * Lấy một đối tượng bằng ID.
   *
   * @param id - ID của đối tượng cần lấy.
   * @returns Một Promise trả về đối tượng nếu tìm thấy, hoặc null nếu không tìm thấy.
   */
  async getItemById(id: string): Promise<T | null> {
    try {
      // Gọi phương thức read của repository để lấy đối tượng theo ID
      return await this.repository.read(id);
    } catch (error) {
      // Xử lý lỗi nếu có
      this.handleError(error);
      // Trả về null nếu có lỗi
      return null;
    }
  }
}
