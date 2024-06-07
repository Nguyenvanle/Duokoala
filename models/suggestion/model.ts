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

  public setScore(score: number) {
    this.score = score;
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

const suggestion = new SuggestionModel("", -1, -1);

suggestion.setCerf("toeic");
