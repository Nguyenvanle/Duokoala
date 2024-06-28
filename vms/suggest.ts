import { CourseProps } from "@/models/course/model";
import { ViewModel } from "./viewmodel";
import { SuggestProp, useSuggestStore } from "@/models/suggestion/model";
import { SuggestRepository } from "@/services/repositories/suggest";
import { useEffect, useState } from "react";
import {
  QueryConstraint,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "@/services/firebase";
import { useSynSuggest } from "@/models/suggestion/v-model";
import { CourseViewModel } from "./course";
import { data } from "./../screens/home/segment-button/data";
export class SuggestViewModel extends ViewModel<SuggestProp> {
  constructor() {
    super(new SuggestRepository());
  }
}
const uid = /*auth.currentUser?.uid;*/ "1Y6E3b1HK2Pqy7xppmErRIMSgpg2";

export function useSuggestViewModel() {
  const synSuggest = useSynSuggest();
  // const CourseDB = new CourseViewModel();
  const suggestVM = new SuggestViewModel();
  const [currentSuggest, setSuggest] = useState<SuggestProp>();
  const [currentCourses, setCourses] = useState<CourseProps[]>([]);
  const [isSuggestLoading, setSuggestLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchCourses = async () => {
      if (uid) {
        const suggest = await findSuggest(uid);
        setSuggest(suggest);
      }
    };
    fetchCourses();
  }, [isSuggestLoading]);

  useEffect(() => {
    const fetchCourses = async () => {
      if (currentSuggest) {
        const courses = await findCourses();
        setCourses(courses);
      }
    };
    fetchCourses();
  }, [currentSuggest]);

  const createSuggest = async (suggest: SuggestProp) => {
    setSuggestLoading(true);
    await suggestVM
      .addItem(suggest)
      .then(() => {
        console.log("Create New Suggest Success");
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setSuggestLoading(false);
        synSuggest.setNull();
      });
  };

  const deleteSuggest = async (id: string) => {
    await suggestVM
      .deleteItem(id)
      .then(() => {
        console.log("Delete Suggest Id: " + id + "Success!");
      })
      .catch((error) => console.error(error));
  };

  const findCourses = async () => {
    try {
      const conditions: QueryConstraint[] = [];
      if (currentSuggest?.cer)
        conditions.push(where("tags", "array-contains", currentSuggest?.cer)); //tag

      if (currentSuggest?.score) {
        //score
        let level: string;
        const score = currentSuggest.score as number;
        if (score <= 2.5) level = "Easy";
        else if (score <= 5) level = "Medium";
        else if (score <= 7.5) level = "Hard";
        else level = "Advanced";
        conditions.push(where("level", "==", level));
        console.log("cer: " + currentSuggest.cer);
      }
      // if (aim) {
      //   conditions.push(where('aim', '==', aim));
      // }
      const q = query(collection(db, "courses"), ...conditions);
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs;
        const documents = querySnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() } as CourseProps)
        );
        return documents;
      } else {
        console.log("Not Found Course!");
        return [];
      }
    } catch (error) {
      console.error(error);
      return [];
    }
  };

  const findSuggest = async (uid: string) => {
    try {
      const q = query(collection(db, "suggests"), where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { id: doc.id, ...doc.data() } as SuggestProp;
      } else {
        console.log("Not Found Uid!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const updateSuggest = async () => {
    const id = currentSuggest?.id ?? "";
    const suggest = synSuggest.suggest;
    await suggestVM
      .updateItem(id, suggest)
      .then(() => {
        setSuggest(synSuggest.suggest);
        console.log("Update Suggest ID: " + id + " Success");
      })
      .catch((error) => console.error(error));
  };
  return {
    isSuggestLoading,
    setSuggestLoading,
    findSuggest,
    currentCourses,
    // updateSuggest,
  };
}
