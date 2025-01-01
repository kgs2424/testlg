'use client';

import { useState } from 'react';

import SCSPCO001 from '@/components/SCSPCO/001';

import CsMainForm from '@/components/CsMainForm';
import MessageList from '@/components/MessageList';
import NewMessageForm from '@/components/NewMessageForm';
import UserChangeForm from '@/components/UserChangeForm';

export default function Home() {
  const [messages, setMessages] = useState<Array<string>>([]);
  function handleSend(newMessage: string) {
    setMessages([newMessage, ...messages]);
  }
  const [deviceType, setDeviceType] = useState('모바일');
  const [productNumber, setProductNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <>
      {/* <NewMessageForm onSend={handleSend} /> */}
      {/* <MessageList messages={messages} /> */}
      {/* <UserChangeForm /> */}
      {/* <CsMainForm /> */}
      <SCSPCO001
        deviceType={deviceType}
        setDeviceType={setDeviceType}
        productNumber={productNumber}
        setProductNumber={setProductNumber}
        birthDate={birthDate}
        setBirthDate={setBirthDate}
      />
    </>
  );
}
