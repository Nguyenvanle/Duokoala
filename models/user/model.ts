export interface User {
  name: string;
  role: boolean; //teacher = true
  currentTime: number;
  targetTime: number;
}

export const user: User = {
  name: "Tiến Đạt",
  role: true,
  currentTime: 45,
  targetTime: 180,
};
