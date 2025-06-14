import hamishImg from "~/app/assets/employer/chat/Hamish.png";
import AishaImg from "~/app/assets/employer/chat/Aisha.png";
import AliImg from "~/app/assets/employer/chat/Ali.png";
import CarterImg from "~/app/assets/employer/chat/Carter.png";
import EmmaImg from "~/app/assets/employer/chat/Emma.png";
import NoorImg from "~/app/assets/employer/chat/Noor.png";
import SiddiqImg from "~/app/assets/employer/chat/Siddiq.png";

export const dummyUsers = [
  {
    id: 1,
    name: "Hamish Marsh",
    role: "HR Manager",
    company: "Grameenphone",
    lastMessage: "Thank you very much for your...",
    avatar: hamishImg,
    online: true,
    unread: true,
  },
  {
    id: 2,
    name: "Aisha Khan",
    role: "Talent Acquisition",
    company: "Unilever",
    lastMessage: "Let’s catch up tomorrow!",
    avatar: AishaImg,
    online: false,
    unread: false,
  },
  {
    id: 3,
    name: "John Carter",
    role: "Technical Recruiter",
    company: "Google",
    lastMessage: "Please send the updated resume.",
    avatar: CarterImg,
    online: true,
    unread: false,
  },
  {
    id: 4,
    name: "Sara Ali",
    role: "HR Executive",
    company: "Nestle",
    lastMessage: "Looking forward to your reply.",
    avatar: AliImg,
    online: false,
    unread: false,
  },
  {
    id: 5,
    name: "Omar Siddiq",
    role: "Recruiter",
    company: "Amazon",
    lastMessage: "Can we reschedule?",
    avatar: SiddiqImg,
    online: true,
    unread: true,
  },
  {
    id: 6,
    name: "Emma Watson",
    role: "HR Associate",
    company: "Netflix",
    lastMessage: "Sure, I’ll get back to you.",
    avatar: EmmaImg,
    online: true,
    unread: false,
  },
  {
    id: 7,
    name: "Liam Noor",
    role: "People Ops",
    company: "Meta",
    lastMessage: "See you at the call!",
    avatar: NoorImg,
    online: false,
    unread: false,
  },
];
