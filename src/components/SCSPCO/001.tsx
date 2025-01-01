import React from 'react';

import { ActionIcon, Box, Button, Grid, Modal, Switch, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import CsMainDeviceInfo from '../CsMaincomponents/CsMainDeviceInfo';
import CsMainNumberInput from '../CsMaincomponents/CsMainNumberInput';

interface CSMainDeviceTypeProps {
  deviceType: string;
  setDeviceType: (deviceType: string) => void;
  productNumber: string;
  setProductNumber: (productNumber: string) => void;
  birthDate: string;
  setBirthDate: (birthDate: string) => void;
}

const SCSPCO001: React.FC<CSMainDeviceTypeProps> = ({
  deviceType,
  setDeviceType,
  productNumber,
  setProductNumber,
  birthDate,
  setBirthDate,
}) => {
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const handleSearch = () => {
    if (deviceType || !productNumber || birthDate) {
      openModal();
    }
  };
  return (
    <>
      <div className="bg-blue-500 p-14 text-white">
        <Title order={3} mb="lg">
          고객 조회
        </Title>
        <Grid gutter="md">
          {/* 기기정보 */}
          <Grid.Col span={3.6}>
            <CsMainDeviceInfo deviceType={deviceType} setDeviceType={setDeviceType} />
          </Grid.Col>
          {/* 상품번호 */}
          <Grid.Col span={3.6}>
            <CsMainNumberInput
              label="상품번호"
              placeholder="'-'없이 숫자만 입력하세요."
              value={productNumber}
              onChange={setProductNumber}
              // type="tel"
            />
          </Grid.Col>
          {/* 생년월일 */}
          <Grid.Col span={3.6}>
            <CsMainNumberInput
              label="생년월일"
              placeholder="6자리 숫자를 입력하세요"
              value={birthDate}
              onChange={setBirthDate}
              // type="text"
              length={6}
            />
          </Grid.Col>

          {/* 조회버튼 */}
          <Grid.Col span={1} mt={25} offset={0}>
            <Button onClick={handleSearch} fullWidth variant="filled" color="black">
              조회
            </Button>
            <Modal opened={modalOpened} onClose={closeModal} centered withCloseButton={false} size={'sm'}>
              <Box ta="center" m="md">
                <ActionIcon
                  radius="xl"
                  size={30}
                  style={{
                    backgroundColor: 'black',
                    color: 'white',
                    fontSize: '30px',
                    fontWeight: 'bold',
                  }}
                >
                  i
                </ActionIcon>
              </Box>
              <Box ta={'center'} mb={'xs'}>
                입력하신 고객님의 정보가 존재하지 않습니다.
              </Box>
              <Box ta={'center'}>입력 정보 확인 후 다시 입력해 주세요.</Box>
              <Button variant="filled" color="black" fullWidth mt={'lg'} onClick={closeModal}>
                확인
              </Button>
            </Modal>
          </Grid.Col>

          {/* 대면체크 */}
          <Grid.Col span={2} offset={10.6}>
            <Switch labelPosition="left" label="비대면" />
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
};

export default SCSPCO001;
