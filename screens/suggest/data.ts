import { CerProps, QuestProps } from "@/models/suggestion/model";

//< - Import - >//

export const cerProps: CerProps = [
  {
    cerName: "TOEIC",
    aims: ["450 điểm", "650 điểm", "750 điểm", "900 điểm"],
  },
  {
    cerName: "IELTS",
    aims: ["4.5 - 5.0 điểm", "5.5 - 6.0 điểm", "6.5 - 7.0 điểm", "7.5+ điểm"],
  },
  {
    cerName: "VSTEP",
    aims: ["Bậc 3 (B1)", "Bậc 4 (B2)", "Bậc 5 (C1)", "Bậc 6 (C2)"],
  },
  {
    cerName: "CEFR",
    aims: ["Bậc A2", "Bậc B1", "Bậc B2", "Bậc C1 - C2"],
  },
];

//< - - - - - - - - - - - - - - - - - - - - >//

export const timeProps: string[] = [
  "30 phút/ngày",
  "60 phút/ngày",
  "120 phút/ngày",
  "180 phút/ngày",
];

//< - - - - - - - - - - - - - - - - - - - - >//

export const questTextProps: QuestProps = [
  {
    uri: null,
    question: "Where can I find the latest financial reports?",
    answer: [
      "On the company intranet.",
      "I like the red one.",
      "He's the CFO.",
      "She's my supervisor.",
    ],
    correctAnswer: "On the company intranet.",
  },
  {
    uri: null,
    question: "What is the deadline for submitting the project proposal?",
    answer: [
      "Next Friday.",
      "The project is complex.",
      "He's a consultant.",
      "I'm busy today.",
    ],
    correctAnswer: "Next Friday.",
  },
  {
    uri: null,
    question: "Why did the price of the stock decrease?",
    answer: [
      "Due to market conditions.",
      "It's a good investment.",
      "He's an analyst.",
      "I need a loan.",
    ],
    correctAnswer: "Due to market conditions.",
  },
  {
    uri: null,
    question: "Who is responsible for updating the company website?",
    answer: [
      "The marketing team.",
      "He's a designer.",
      "The website is live.",
      "She's a developer.",
    ],
    correctAnswer: "The marketing team.",
  },
  {
    uri: null,
    question: "What are the benefits of the new employee wellness program?",
    answer: [
      "Improved morale and productivity.",
      "He's a good manager.",
      "The program is effective.",
      "The office is busy.",
    ],
    correctAnswer: "Improved morale and productivity.",
  },
];

export const questPhotoProps: QuestProps = [
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    question: "What is the woman doing?",
    answer: [
      "He is reading a book.",
      "He is walking a dog.",
      "He is cooking.",
      "He is painting.",
    ],
    correctAnswer: "He is walking a dog.",
  },
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    question: "What is the man holding?",
    answer: ["A laptop.", "A guitar.", "A phone.", "A camera."],
    correctAnswer: "A laptop.",
  },
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    question: "What is on the desk?",
    answer: ["A computer.", "A book.", "A phone.", "A lamp."],
    correctAnswer: "A computer.",
  },
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    question: "What is the woman wearing?",
    answer: ["A suit.", "A t-shirt.", "A dress.", "A jacket."],
    correctAnswer: "A dress.",
  },
  {
    uri: "https://tienganhmoingay.com/media/images/uploads/2015/10/14/new-image.jpg",
    question: "What is on the table?",
    answer: [
      "A laptop and a coffee cup.",
      "A pair of shoes.",
      "A bunch of flowers.",
      "A set of keys.",
    ],
    correctAnswer: "A laptop and a coffee cup.",
  },
];

//< - - - - - - - - - - - - - - - - - - - - >//
