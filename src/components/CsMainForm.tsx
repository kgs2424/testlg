import React, { useState } from "react";
import {
  Button,
  TextInput,
  Checkbox,
  Grid,
  Card,
  Text,
  Title,
  Container,
  NumberInput,
  Switch,
  Input,
  rem,
  Drawer,
  ActionIcon,
  useMantineTheme,
  Badge,
  CloseButton,
  Modal,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown, IconSearch } from "@tabler/icons-react";

const options = [
  { id: "customer-info", title: "고객정보번경", description: "주소/연락처 변경\n개명 개칭" },
  { id: "payment-info", title: "납부/청구 정보변경", description: "납부방법 변경\n청구금/청구서 변경\n청구서 유형 변경" },
  { id: "product-change", title: "단말/상품 변경", description: "단말/SIM 변경\n요금제 변경\n부가서비스 변경" },
  { id: "product-break", title: "단말 분실/파손", description: "분실/파손\n임시정지 신청/해제" },
  { id: "name-change", title: "명의변경", description: "가입권한자 명의변경" },
  { id: "discount-choice", title: "선택약정할인", description: "약정 할인 신청\n재약정 신청/해약\n해지/해지 취소" },
  { id: "pause", title: "일시정지", description: "정지 신청\n정지 해제" },
  { id: "account-change", title: "청구계정 변경", description: "청구계정 통합\n청구계정 분리" },
  { id: "premium-discount", title: "프리미어/약정할인", description: "프리미어/약정할인 신청\n프리미어/약정할인 해지\n프리미어 계약권 신청/예약" },
];

const CsMainForm: React.FC = () => {
  const [deviceType, setDeviceType] = useState("모바일");
  const [opened, { open, close }] = useDisclosure(false);
  const [modalOpened, { open: openModal, close: closeModal }] = useDisclosure(false);
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;

  const [productNumber, setProductNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useMantineTheme();

  
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const toggleSelection = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSearch = () => {
    // console.log( { deviceType, productNumber, birthDate });
    if(!deviceType || !productNumber || !birthDate){
      openModal();
    }
  };

  return (
    <Container size="lg" style={{ padding: "20px" }}>
      {/* 고객 조회 */}
      <Title order={3} mb="lg">
        고객 조회
      </Title>
      <Grid gutter="md">
        <Grid.Col span={3.6}>
          <Input.Wrapper label="기기정보">
            <Input
              readOnly
              value={deviceType}
              placeholder="선택하세요"
              // onClick={()=>{setDrawerOpen(true)}}
              onClick={open}
              rightSection={chevron} 
            />
          </Input.Wrapper>
        </Grid.Col>
        {/* 기기정보 선택 드로어 */}
        <Drawer opened={opened} onClose={close} title="기기정보" position="bottom" withCloseButton={false}>
          <Button
            variant="white"
            color="black"
            fullWidth
            ml={-15}
            justify="flex-start"
            style={{ marginBottom: "0px" }}
            onClick={() => {
              setDeviceType("모바일");
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
            style={{ marginBottom: "0px" }}
            onClick={() => {
              setDeviceType("홈");
              close();
            }}
          >
            홈
          </Button>
          
        </Drawer>
        <Grid.Col span={3.6}>
          <NumberInput
            label="상품번호"
            placeholder="'-'없이 숫자만 입력하세요"
            hideControls
            value={productNumber}
            onChange={(value) => setProductNumber(value?.toString())}
          />
        </Grid.Col>
        <Grid.Col span={3.6}>
          <NumberInput
            label="생년월일"
            placeholder="6자리 숫자를 입력하세요"
            hideControls
            value={birthDate}
            onChange={(value) => setBirthDate(value?.toString())}
          />
        </Grid.Col>
        <Grid.Col span={1} mt={25} offset={0}>
          <Button onClick={handleSearch} fullWidth variant="filled" color="black">
            조회
          </Button>
          <Modal
            opened={modalOpened}
            onClose={closeModal}
            centered
            withCloseButton={false}
            size={"sm"}
          >
            <Box ta="center" m="md">
              <ActionIcon
                radius="xl"
                size={30}
                style={{
                  backgroundColor: "black",
                  color: "white",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
                i
              </ActionIcon>
            </Box>
            <Box ta={"center"} mb={"xs"}>
              입력하신 고객님의 정보가 존재하지 않습니다.
            </Box>
            <Box ta={"center"}>
              입력 정보 확인 후 다시 입력해 주세요.
            </Box>
            <Button variant="filled" color="black" fullWidth mt={"lg"} onClick={closeModal}>
              확인
            </Button>
          </Modal>
        </Grid.Col>
        <Grid.Col span={2} offset={10.6} >
        {/* 대면체크 */}
          <Switch labelPosition="left" label="비대면"/>
        </Grid.Col>
      </Grid>


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
             style={{backgroundColor:"white"}}
            //  variant="filled"
          >
            <IconSearch size={20} stroke={1.5} color={"black"} />
          </ActionIcon>
        }
        onChange={(e) => setSearchTerm(e.currentTarget.value)}
      />
    
      <Title order={5} mt="xl" mb="lg" mr="lg" size="h4">
        선택 {selectedIds.length}건
        {selectedIds.map((id) => (
            <Badge
              key={id}
              size="xl"
              color="black"
              variant="filled"
              radius="sm"
              ml="xs"
              mr="xs"
              mb="xs"
              mt="xs"
              rightSection={
                <CloseButton
                  size="xs"
                  variant="subtle"
                  color="white"
                  onClick={() => toggleSelection(id)}
                  // icon={<IconXboxX size={18} stroke={1.5} />}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #e0e0e0",
                    color: "black",
                    borderRadius: "50%",
                    width: "20px",
                    height: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: "12px",
                  }}
                />
              }
            >
              {options.find((option) => option.id === id)?.title}
            </Badge>
          ))}
      </Title>


      <Grid gutter="md">
        {options.map((option) => (
          <Grid.Col key={option.id} span={3}>
            <Card
              withBorder
              padding="md"
              radius="md"
              onClick={() => toggleSelection(option.id)}
              style={{
                // width:"80%",
                height: "100%",
                cursor: "pointer",
                backgroundColor : "white",
                border: selectedIds.includes(option.id)
                  ? "2px solid red" // 빨강 테두리
                  : "1px solid #e0e0e0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Checkbox
                label={option.title}
                checked={selectedIds.includes(option.id)}
                onChange={() => toggleSelection(option.id)}
                size="sm"
              />
              <Text size="sm" color="gray" mt="sm">
                {option.description.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </Text>
            </Card>
          </Grid.Col>
        ))}
      </Grid>
      <Grid gutter="md">
        <Grid.Col span={2} offset={11}>
          <Button 
            onClick={()=>{}} 
            variant="filled" 
            color="black"
            disabled={selectedIds.length === 0}
            mt={"sm"}
            // justify="flex-end"
          >
            다음 {'>'}
          </Button>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default CsMainForm;
