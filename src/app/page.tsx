'use client';

import { useState } from 'react';

import MessageList from '@/components/MessageList';
import NewMessageForm from '@/components/NewMessageForm';
import UserChangeForm from '@/components/UserChangeForm';
import CsMainForm from '@/components/CsMainForm';

export default function Home() {
  const [messages, setMessages] = useState<Array<string>>([]);

  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      {/* <NewMessageForm onSend={handleSend} /> */}
      {/* <MessageList messages={messages} /> */}
      {/* <UserChangeForm /> */}
      <CsMainForm />
    </>
  );
}
