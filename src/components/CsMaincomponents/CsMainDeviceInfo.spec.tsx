import { userEvent } from '@testing-library/user-event';

import CsMainDeviceInfo from '@/components/CsMaincomponents/CsMainDeviceInfo';

import { getByLabelText, cRender as render, screen } from '../../utils/testing-utils';

describe('CsMainDeviceInfo', () => {
  describe('드로어 체크', () => {
    let setDeviceType: (deviceType: string) => void;

    async function openDrawer() {
      const user = userEvent.setup();
      setDeviceType = jest.fn().mockName('setDeviceType');

      render(<CsMainDeviceInfo deviceType="" setDeviceType={setDeviceType} />);
      const input = screen.getByLabelText('기기정보테스트');
      await user.click(input);
    }
    it('인풋 누르면 드로어 확인', async () => {
      await openDrawer();
      expect(screen.getByText('모바일')).toBeInTheDocument();
    });
  });
});
