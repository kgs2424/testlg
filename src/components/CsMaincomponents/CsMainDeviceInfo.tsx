import React, { useState } from 'react';

import { Button, Drawer, Grid, Input, rem } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronDown } from '@tabler/icons-react';

interface CsMainDeviceInfoProps {
  deviceType: string;
  setDeviceType: (deviceType: string) => void;
}

const CsMainDeviceInfo: React.FC<CsMainDeviceInfoProps> = ({ deviceType, setDeviceType }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;

  return (
    <>
      <Input.Wrapper label="기기정보">
        <Input
          readOnly
          value={deviceType}
          placeholder="선택하세요"
          onClick={open}
          rightSection={chevron}
          aria-label="기기정보테스트"
        />
      </Input.Wrapper>
      <Drawer opened={opened} onClose={close} title="기기정보" position="bottom" withCloseButton={false}>
        <Button
          variant="white"
          color="black"
          fullWidth
          ml={-15}
          justify="flex-start"
          style={{ marginBottom: '0px' }}
          onClick={() => {
            setDeviceType('모바일');
            close();
          }}
        >
          모바일
        </Button>
        <Button
          variant="white"
          color="black"
          fullWidth
          ml={-15}
          justify="flex-start"
          style={{ marginBottom: '0px' }}
          onClick={() => {
            setDeviceType('홈');
            close();
          }}
        >
          홈
        </Button>
      </Drawer>
    </>
  );
};

export default CsMainDeviceInfo;
