import { mailType } from "../../types";

export const mails: mailType[] = [
  {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    to: "Bob Johnson",
    email: "williamsmith@example.com",
    text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nBest regards, William",
    date: "2023-10-22T09:00:00",
  },
  {
    id: "110e8400-e29b-11d4-a716-446655440000",
    name: "Alice Smith",
    to: "Bob Johnson",
    email: "alicesmith@example.com",
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nBest regards, Alice",
    date: "2023-10-22T10:30:00",
  },
  {
    id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
    name: "Bob Johnson",
    to: "Alice Smith",
    email: "bobjohnson@example.com",
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nBest, Bob",
    date: "2023-04-10T11:45:00",
  },
];
