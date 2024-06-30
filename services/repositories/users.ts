import UserProps from "@/models/user/model";
import { FirestoreRepository } from "./firestore";

export class UserRepository extends FirestoreRepository<UserProps> {
  constructor() {
    super("users");
  }
}
