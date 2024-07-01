import { FirestoreRepository } from "./firestore";
import { SuggestProp } from "@/models/suggestion/model";

export class SuggestRepository extends FirestoreRepository<SuggestProp> {
  constructor() {
    super("suggests");
  }
}
