import { Suggest } from "@/models/suggestion/model";
import { FirestoreRepository } from "./firestore";

export class SuggestRepository extends FirestoreRepository<Suggest> {
  constructor() {
    super("suggest");
  }
}
