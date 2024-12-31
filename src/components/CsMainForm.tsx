import React, { useState } from 'react';

import {
  Button,
  TextInput,
  Grid,
  Title,
  Container,
  Switch,
  ActionIcon,
  useMantineTheme,
  Modal,
  Box,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch } from '@tabler/icons-react';

import CsMainDeviceInfo from './CsMaincomponents/CsMainDeviceInfo';
import CsMainNumberInput from './CsMaincomponents/CsMainNumberInput';
import CsMainWork from './CsMaincomponents/CsMainWork';

const CsMainForm: React.FC = () => {
  const [deviceType, setDeviceType] = useState('모바일');
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const [productNumber, setProductNumber] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useMantineTheme();
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const handleSearch = () => {
    // console.log( { deviceType, productNumber, birthDate });
    if (!deviceType || !productNumber || !birthDate) {
      openModal();
    }
  };

  return (
    // <Container size="lg" style={{ padding: '20px' }} bg={'blue'}>
    <>
      {/* 고객 조회 */}
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
              // hideControls={false}
              value={productNumber}
              onChange={setProductNumber}
              type="tel"
            />
          </Grid.Col>
          {/* 생년월일 */}
          <Grid.Col span={3.6}>
            <CsMainNumberInput
              label="생년월일"
              placeholder="6자리 숫자를 입력하세요"
              value={birthDate}
              onChange={setBirthDate}
              type="text"
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

          <Grid.Col span={2} offset={10.6}>
            {/* 대면체크 */}
            <Switch labelPosition="left" label="비대면" />
          </Grid.Col>
        </Grid>
      </div>
      <div className="bg-red-500 p-2 text-white">
        {/* 업무명 검색 */}
        <Title order={4} mt="xl" mb="lg">
          CS 업무명 검색
        </Title>
        <TextInput
          placeholder="CS업무명을 검색하세요"
          value={searchTerm}
          mb="md"
          rightSection={
            <ActionIcon
              color={theme.primaryColor}
              style={{ backgroundColor: 'white' }}
              //  variant="filled"
            >
              <IconSearch size={20} stroke={1.5} color={'black'} />
            </ActionIcon>
          }
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
        />

        {/* 업무선택 */}
        <CsMainWork selectedIds={selectedIds} setSelectedIds={setSelectedIds} />

        <Grid gutter="md">
          <Grid.Col span={2} offset={11}>
            <Button
              onClick={() => {}}
              variant="filled"
              color="black"
              disabled={selectedIds.length === 0}
              mt={'sm'}
              // justify="flex-end"
            >
              다음 {'>'}
            </Button>
          </Grid.Col>
        </Grid>
        {/* </Container> */}
      </div>
    </>
  );
};

export default CsMainForm;
