/**
 * @jest-environment jsdom
 */

import { userEvent } from '@testing-library/user-event';

import { cRender as render, screen } from '@/testing-utils';

import NewMessageForm from '@/components/NewMessageForm';

describe('<NewMessageForm />', () => {
  describe('clicking the send button', () => {
    let sendHandler: (message: string) => void;

    async function sendMessage() {
      const user = userEvent.setup();
      sendHandler = jest.fn().mockName('sendHandler');

      render(<NewMessageForm onSend={sendHandler} />);
      // render(<NewMessageForm />);

      await user.type(screen.getByTestId('messageText'), 'New message');
      await user.click(screen.getByTestId('sendButton'));
    }

    it('clears the text field', async () => {
      await sendMessage();
      const messageText = screen.getByTestId('messageText') as HTMLInputElement;
      expect(messageText.value).toEqual('');
    });

    it('calls the send handler', async () => {
      await sendMessage();
      expect(sendHandler).toHaveBeenCalledWith('New message');
    });
  });
});
