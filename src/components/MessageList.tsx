import { Fragment } from 'react';

import { List, ThemeIcon, rem } from '@mantine/core';
import { IconCircleCheck } from '@tabler/icons-react';

interface MessageListProps {
  messages: Array<string>;
}

export default function MessageList({ messages }: MessageListProps) {
  return (
    <List
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
        </ThemeIcon>
      }
    >
      {messages.reverse().map((message, index) => (
        <Fragment key={message + index}>
          <List.Item>
            {`${messages.length - index} 번째 메시지: `} + {message}
          </List.Item>
        </Fragment>
      ))}
    </List>
  );
}
