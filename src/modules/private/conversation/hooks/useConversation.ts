import {useState} from 'react';
import {Message} from '@/modules/private/conversation/components/message';

const DEFAULT_MESSAGES = [
  {
    id: '1',
    message: 'Is the restaurant crowded',
    date: '16:08 PM',
    userSent: '1',
  },
  {
    id: '2',
    message: 'I am very hungry',
    date: '16:09 PM',
    userSent: '1',
  },
  {
    id: '3',
    message: 'Quite crowded but I have got your order.',
    date: '16:08 PM',
    userSent: '2',
  },
  {
    id: '4',
    message: "It won't take long ✨",
    date: '16:09 PM',
    userSent: '2',
  },
  {
    id: '5',
    message:
      'I appreciate it, I really love the food in your restaurant, I am a regular customer, only this time I could not go to the restaurant and luckily you have this great app. 🙌🏻',
    date: '16:12 PM',
    userSent: '1',
  },

  {
    id: '6',
    message:
      'Oh thank you very much, we bought this template from soadtech.io and it is very cool.',
    date: '16:08 PM',
    userSent: '2',
  },
  {
    id: '7',
    message: 'We are glad you love it  💜',
    date: '16:09 PM',
    userSent: '2',
  },
  {
    id: '8',
    message: 'Is it expensive?',
    date: '16:08 PM',
    userSent: '1',
  },
  {
    id: '9',
    message: 'No, it has an excellent price',
    date: '16:09 PM',
    userSent: '2',
  },
  {
    id: '10',
    message: 'Perfect',
    date: '16:12 PM',
    userSent: '1',
  },
];
export default function useConversation() {
  const [conversations] = useState<Message[]>(DEFAULT_MESSAGES);
  return {
    conversations,
  };
}
