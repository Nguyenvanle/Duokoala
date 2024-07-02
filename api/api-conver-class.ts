import { ImageSourcePropType } from "react-native";

//Tất cả thông tin đều được qua kiểm thử
// Nếu bạn không thực hiện được:
//1. Xem lại bản thân mình đã làm đúng chưa
//2. Xem lại Database và Code
//3. Tự fix code lại
//Chúc may mắn

export class UserData {
  id: string;
  email: string;
  isNewUser: boolean;
  name: string;
  role: string;
  currentTime: number;
  targetTime: number;
  avatarUrl: string;
  phoneNumber?: string;
  dateOfBirth?: Date;
  gender?: "male" | "female" | "other";
  address?: string;
  registrationDate: Date;
  lastLoginDate: Date;
  coursesEnrolled: string[];
  progress: { [courseId: string]: number };
  completedCourses: string[];
  subscriptionType?: "free" | "premium";
  preferences?: { [key: string]: any };
  notificationsEnabled: boolean;

  constructor(data: any) {
    try {
      //   const data = JSON.parse(json);
      const fields = data.fields;
      this.id = fields.id?.stringValue || "";
      this.email = fields.email?.stringValue || "";
      this.isNewUser = fields.isNewUser?.booleanValue || false;
      this.name = fields.name?.stringValue || "";
      this.role = fields.role?.stringValue || "";
      this.currentTime = parseInt(fields.currentTime?.integerValue, 10) || 0;
      this.targetTime = parseInt(fields.targetTime?.integerValue, 10) || 0;
      this.avatarUrl = fields.avatarUrl?.stringValue || "";
      this.phoneNumber = fields.phoneNumber?.stringValue || "";
      this.gender =
        (fields.gender?.stringValue as "male" | "female" | "other") ||
        undefined;
      this.address = fields.address?.stringValue || "";
      this.registrationDate = new Date(fields.registrationDate?.timestampValue);
      this.lastLoginDate = new Date(fields.lastLoginDate?.timestampValue);
      this.coursesEnrolled = fields.coursesEnrolled?.arrayValue?.values
        ? fields.tags.arrayValue.values.map(
            (item: any) => item.stringValue || ""
          )
        : [];

      this.coursesEnrolled = Array.isArray(fields.coursesEnrolled?.arrayValue)
        ? fields.coursesEnrolled.arrayValue.map((item: any) => item.stringValue)
        : [];
      this.completedCourses = Array.isArray(fields.completedCourses?.arrayValue)
        ? fields.completedCourses.arrayValue.map(
            (item: any) => item.stringValue
          )
        : [];
      this.progress = fields.progress?.mapValue?.fields || {};
      this.subscriptionType =
        (fields.subscriptionType?.stringValue as "free" | "premium") ||
        undefined;
      this.preferences = fields.preferences?.mapValue?.fields || {};
      this.notificationsEnabled =
        fields.notificationsEnabled?.booleanValue || false;
    } catch (error) {
      console.error("Error parsing JSON:", error);
      console.log("Error parsing JSON:", error);
      throw new Error("Invalid JSON format");
    }
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getIsNewUser(): boolean {
    return this.isNewUser;
  }

  getName(): string {
    return this.name;
  }

  getRole(): string {
    return this.role;
  }

  getCurrentTime(): number {
    return this.currentTime;
  }

  getTargetTime(): number {
    return this.targetTime;
  }

  getAvatarUrl(): string {
    return this.avatarUrl;
  }

  getPhoneNumber(): string | undefined {
    return this.phoneNumber;
  }

  getDateOfBirth(): Date | undefined {
    return this.dateOfBirth;
  }

  getGender(): "male" | "female" | "other" | undefined {
    return this.gender;
  }

  getAddress(): string | undefined {
    return this.address;
  }

  getRegistrationDate(): Date {
    return this.registrationDate;
  }

  getLastLoginDate(): Date {
    return this.lastLoginDate;
  }

  getCoursesEnrolled(): string[] {
    return this.coursesEnrolled;
  }

  getProgress(): { [courseId: string]: number } {
    return this.progress;
  }

  getCompletedCourses(): string[] {
    return this.completedCourses;
  }

  getSubscriptionType(): "free" | "premium" | undefined {
    return this.subscriptionType;
  }

  getPreferences(): { [key: string]: any } | undefined {
    return this.preferences;
  }

  getNotificationsEnabled(): boolean {
    return this.notificationsEnabled;
  }
}

export class CourseData {
  id: string;
  title: string;
  imageUrl: ImageSourcePropType | string;
  instructor: string;
  level: string;
  tags: string[];
  description: string; // Mô tả chi tiết về khóa học
  duration: number; // Thời lượng khóa học (phút)
  price: number; // Giá khóa học
  rating: number; // Đánh giá trung bình của khóa học
  reviewsCount: number; // Số lượng đánh giá
  lessonsCount: number; // Số lượng bài học trong khóa học
  language: string; // Ngôn ngữ của khóa học
  createdAt: Date; // Ngày tạo khóa học
  updatedAt: Date; // Ngày cập nhật khóa học
  isFeatured: boolean; // Khóa học nổi bật
  isFree: boolean; // Khóa học miễn phí
  prerequisites: string[]; // Các yêu cầu trước khi tham gia khóa học
  category: string; // Danh mục khóa học
  videoUrl: string; // URL video giới thiệu khóa học
  enrolledUsers: string[];

  constructor(data: any) {
    try {
      const fields = data.fields;
      this.id = fields.id?.stringValue || "";
      this.title = fields.title?.stringValue || "";
      this.imageUrl = fields.imageUrl?.stringValue || "";
      this.instructor = fields.instructor?.stringValue || "";
      this.level = fields.level?.stringValue || "";
      this.tags = fields.tags?.arrayValue?.values
        ? fields.tags.arrayValue.values.map(
            (item: any) => item.stringValue || ""
          )
        : [];
      this.description = fields.description?.stringValue || "";
      this.duration = parseInt(fields.duration?.integerValue) || 0;
      this.price = parseInt(fields.price?.integerValue) || 0;
      this.rating = parseInt(fields.rating?.integerValue) || 0;
      this.reviewsCount = parseInt(fields.reviewsCount?.integerValue) || 0;
      this.lessonsCount = parseInt(fields.lessonsCount?.integerValue) || 0;
      this.language = fields.language?.stringValue || "";
      this.createdAt = new Date(fields.createdAt?.timestampValue);
      this.updatedAt = new Date(fields.updatedAt?.timestampValue);
      this.isFeatured = fields.isFeatured?.booleanValue || false;
      this.isFree = fields.isFree?.booleanValue;
      this.prerequisites = data.prerequisites || [];
      this.category = fields.category?.stringValue || "";
      this.videoUrl = fields.videoUrl?.stringValue || "";
      this.enrolledUsers = fields.enrolledUsers?.stringValue || "";
    } catch (error) {
      console.error("Error parsing JSON:", error);
      console.log("Error parsing JSON:", error);
      throw new Error("Invalid JSON format");
    }
  }
  getId() {
    return this.id;
  }

  // Phương thức lấy tiêu đề khóa học
  getTitle() {
    return this.title;
  }

  // Phương thức lấy URL hình ảnh
  getImageUrl() {
    return this.imageUrl;
  }

  // Phương thức lấy tên giảng viên
  getInstructor() {
    return this.instructor;
  }

  // Phương thức lấy cấp độ khóa học
  getLevel() {
    return this.level;
  }

  // Phương thức lấy tags của khóa học
  getTags() {
    return this.tags;
  }

  // Phương thức lấy mô tả chi tiết về khóa học
  getDescription() {
    return this.description;
  }

  // Phương thức lấy thời lượng khóa học
  getDuration() {
    return this.duration;
  }

  // Phương thức lấy giá khóa học
  getPrice() {
    return this.price;
  }

  // Phương thức lấy đánh giá trung bình của khóa học
  getRating() {
    return this.rating;
  }

  // Phương thức lấy số lượng đánh giá
  getReviewsCount() {
    return this.reviewsCount;
  }

  // Phương thức lấy số lượng bài học trong khóa học
  getLessonsCount() {
    return this.lessonsCount;
  }

  // Phương thức lấy ngôn ngữ của khóa học
  getLanguage() {
    return this.language;
  }

  // Phương thức lấy ngày tạo khóa học
  getCreatedAt() {
    return this.createdAt;
  }

  // Phương thức lấy ngày cập nhật khóa học
  getUpdatedAt() {
    return this.updatedAt;
  }

  // Phương thức kiểm tra khóa học có phải là nổi bật không
  getIsFeatured() {
    return this.isFeatured;
  }

  // Phương thức kiểm tra khóa học có miễn phí không
  getIsFree() {
    return this.isFree;
  }

  // Phương thức lấy các yêu cầu trước khi tham gia khóa học
  getPrerequisites() {
    return this.prerequisites;
  }

  // Phương thức lấy danh mục khóa học
  getCategory() {
    return this.category;
  }

  // Phương thức lấy URL video giới thiệu khóa học
  getVideoUrl() {
    return this.videoUrl;
  }

  // Phương thức lấy danh sách người dùng đã đăng ký khóa học
  getEnrolledUsers() {
    return this.enrolledUsers;
  }
}
