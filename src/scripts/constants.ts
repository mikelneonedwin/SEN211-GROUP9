export const testResults = [
  {
    score: 85,
    total: 100,
    duration: 60,
    course: "Mathematics",
  },
  {
    score: 78,
    total: 100,
    duration: 45,
    course: "Physics",
  },
  {
    score: 92,
    total: 100,
    duration: 55,
    course: "Chemistry",
  },
  {
    score: 65,
    total: 100,
    duration: 40,
    course: "Biology",
  },
  {
    score: 88,
    total: 100,
    duration: 70,
    course: "English Literature",
  },
  {
    score: 74,
    total: 100,
    duration: 50,
    course: "History",
  },
  {
    score: 91,
    total: 100,
    duration: 60,
    course: "Geography",
  },
  {
    score: 83,
    total: 100,
    duration: 75,
    course: "Computer Science",
  },
  {
    score: 80,
    total: 100,
    duration: 45,
    course: "Economics",
  },
  {
    score: 77,
    total: 100,
    duration: 50,
    course: "Philosophy",
  },
  {
    score: 89,
    total: 100,
    duration: 65,
    course: "Political Science",
  },
  {
    score: 93,
    total: 100,
    duration: 55,
    course: "Art History",
  },
  {
    score: 84,
    total: 100,
    duration: 70,
    course: "Music Theory",
  },
  {
    score: 79,
    total: 100,
    duration: 60,
    course: "Environmental Science",
  },
  {
    score: 68,
    total: 100,
    duration: 40,
    course: "Sociology",
  },
  {
    score: 86,
    total: 100,
    duration: 50,
    course: "Psychology",
  },
  {
    score: 90,
    total: 100,
    duration: 80,
    course: "Statistics",
  },
  {
    score: 82,
    total: 100,
    duration: 60,
    course: "Anthropology",
  },
  {
    score: 73,
    total: 100,
    duration: 55,
    course: "Law",
  },
  {
    score: 94,
    total: 100,
    duration: 45,
    course: "Medicine",
  },
];

export function calcDuration(duration: number) {
  return `${Math.floor(duration / 60)
    .toString()
    .padStart(2, "0")}:${(duration % 60).toString().padStart(2, "0")}`;
}

export const experiences = [
  {
    name: "Isreal Blessing",
    experience:
      "I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?",
    date: "17/10/14",
    email: "IB",
  },
  {
    name: "Confidence",
    experience:
      "As I reflect on my academic journey, I am reminded of the numerous challenges I faced along the way. From struggling to balance coursework and extracurricular activities to success is not solely defined by grades, but by the skills, knowledge, and experince",
    date: "17/10/14",
    email: "C",
  },
  {
    name: "Itoro Benard",
    experience:
      "I was advised to install a MetaMask extention to my Android browser but I was not able to. Instead I have installed the MetaMask-app and configured the Polygon network there. Is this as safe as the browser extension?",
    date: "17/10/14",
    email: "IB",
  },
  {
    name: "Daniel Cletus",
    experience:
      "As I reflect on my academic journey, I am reminded of the numerous challenges I faced along the way. From struggling to balance coursework and extracurricular activities to success is not solely defined by grades, but by the skills, knowledge, and experince",
    date: "17/10/14",
    email: "Dc",
  },
];
