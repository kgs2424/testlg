import { useState } from 'react';

import { TextInput, Button, useMantineTheme } from '@mantine/core';

type NewMessageFormProps = {
  onSend: (newMessage: string) => void;
};

export default function NewMessageForm({ onSend }: NewMessageFormProps) {
  const [messageText, setMessageText] = useState<string>('');
  const theme = useMantineTheme();

  function handleTextChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setMessageText(event.target.value);
  }

  function handleSend(): void {
    onSend(messageText);
    setMessageText('');
  }

  return (
    <>
      <TextInput type="text" data-testid="messageText" value={messageText} onChange={handleTextChange} />
      <Button data-testid="sendButton" onClick={handleSend}>
        Send
      </Button>
    </>
  );
}
