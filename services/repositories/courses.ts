import { CourseProps } from "@/models/course/model";
import { FirestoreRepository } from "./firestore";

export class CourseRepository extends FirestoreRepository<CourseProps> {
  constructor() {
    super("courses");
  }
}
