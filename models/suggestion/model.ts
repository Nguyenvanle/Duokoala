// interface SuggestionProps {
//   cerf: CerfProps; //page 1
//   score: number; //page 2
//   examScore: number; //page 4
// }

// interface CerfProps {
//   id: number;
//   name: string; //toeic
//   maxScore: number; //100
// }

// Tạo class model cho SuggestionProps
export class SuggestionModel {
  cerf: string;
  score: number;
  examScore: number;

  constructor(cerf: string, score: number, examScore: number) {
    this.cerf = cerf;
    this.score = score;
    this.examScore = examScore;
  }
  public setCerf(cerf: string) {
    this.cerf = cerf;
  }
  public getCerf() {
    return this.cerf;
  }
  public setScore(cerf: string) {
    this.cerf = cerf;
  }
  public getScore() {
    return this.cerf;
  }
  public setExamScore(cerf: string) {
    this.cerf = cerf;
  }
  public getExamScore() {
    return this.cerf;
  }
}

export class RadioBG {
  Options: string[];
  ItemSelected: string | number;

  constructor(Options: string[]) {
    this.Options = Options;
    this.ItemSelected = -1;
  }

  public setItemSelected(Item: string) {
    this.ItemSelected = Item;
  }

  public getItemSelected() {
    return this.ItemSelected;
  }
}
// // Tạo class model cho CerfProps
// class CerfModel implements CerfProps {
//   name: string;
//   maxScore: number;

//   constructor(name: string, maxScore: number) {
//     this.name = name;
//     this.maxScore = maxScore;
//   }
// }

export const suggestion = new SuggestionModel("-1", -1, -1);
