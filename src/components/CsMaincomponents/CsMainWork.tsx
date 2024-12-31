import React from 'react';

import { Badge, Card, Checkbox, CloseButton, Grid, Text, Title } from '@mantine/core';

interface CsMainWorkProps {
  selectedIds: string[];
  setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
}
const options = [
  { id: 'customer-info', title: '고객정보번경', description: '주소/연락처 변경\n개명 개칭' },
  {
    id: 'payment-info',
    title: '납부/청구 정보변경',
    description: '납부방법 변경\n청구금/청구서 변경\n청구서 유형 변경',
  },
  { id: 'product-change', title: '단말/상품 변경', description: '단말/SIM 변경\n요금제 변경\n부가서비스 변경' },
  { id: 'product-break', title: '단말 분실/파손', description: '분실/파손\n임시정지 신청/해제' },
  { id: 'name-change', title: '명의변경', description: '가입권한자 명의변경' },
  { id: 'discount-choice', title: '선택약정할인', description: '약정 할인 신청\n재약정 신청/해약\n해지/해지 취소' },
  { id: 'pause', title: '일시정지', description: '정지 신청\n정지 해제' },
  { id: 'account-change', title: '청구계정 변경', description: '청구계정 통합\n청구계정 분리' },
  {
    id: 'premium-discount',
    title: '프리미어/약정할인',
    description: '프리미어/약정할인 신청\n프리미어/약정할인 해지\n프리미어 계약권 신청/예약',
  },
];

const CsMainWork: React.FC<CsMainWorkProps> = ({ selectedIds, setSelectedIds }) => {
  const toggleSelection = (id: string) => {
    setSelectedIds((prev: string[]) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
  };

  return (
    <>
      <Title order={5} mt="xl" mb="lg" mr="lg" size="h5">
        <span style={{ minHeight: '46px' }}>
          선택 {selectedIds.length}건
          {selectedIds.map((id) => (
            <Badge
              h={26}
              key={id}
              size="md"
              color="black"
              variant="filled"
              radius="sm"
              ml="xs"
              mr="xs"
              mb="xs"
              mt="xs"
              rightSection={
                <CloseButton
                  size={'xs'}
                  variant="subtle"
                  color="white"
                  onClick={() => toggleSelection(id)}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #e0e0e0',
                    color: 'black',
                    borderRadius: '50%',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '12px',
                  }}
                />
              }
            >
              {options.find((option) => option.id === id)?.title}1
            </Badge>
          ))}
        </span>
      </Title>

      <Grid gutter="md">
        {options.map((option) => (
          <Grid.Col key={option.id} span={2.3}>
            <Card
              withBorder
              padding="md"
              radius="md"
              onClick={() => toggleSelection(option.id)}
              style={{
                height: '100%',
                cursor: 'pointer',
                backgroundColor: 'white',
                border: selectedIds.includes(option.id)
                  ? '2px solid red' // 빨강 테두리
                  : '1px solid #e0e0e0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Checkbox
                label={option.title}
                checked={selectedIds.includes(option.id)}
                onClick={() => toggleSelection(option.id)}
                onChange={() => toggleSelection(option.id)}
                size="sm"
              />
              <Text component="div" size="sm" color="gray" mt="sm">
                {option.description.split('\n').map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default CsMainWork;
