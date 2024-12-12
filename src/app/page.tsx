'use client';

import { useState } from 'react';

import MessageList from '@/components/MessageList';
import NewMessageForm from '@/components/NewMessageForm';

export default function Home() {
  const [messages, setMessages] = useState<Array<string>>([]);

  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }

  return (
    <>
      <NewMessageForm onSend={handleSend} />
      <MessageList messages={messages} />
    </>
  );
}
