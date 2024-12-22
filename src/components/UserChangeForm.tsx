import { Container, Grid, Skeleton, TextInput, Button, Select, NumberInput, Modal } from '@mantine/core';

import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';

export default function UserChangeForm() {

    const  [ testVal, setTestVal ] = useState(0);
    const  [ nameVal, setNameVal ] = useState('');

    const [opened, { open, close }] = useDisclosure(false);

    const child = (
        <div style={{ position: 'relative' }}>
          {/* 고객명 라인 */}
          <Skeleton height={540} radius="md" animate={false} />
          <span style={{ position: 'absolute', bottom: 500, left: '3%', zIndex: 1}} >
              고객명
          </span>
          <TextInput
              style={{ position: 'absolute', bottom: 495, left: '9%', zIndex: 1, width:'80%'}}
              placeholder="이름을 입력하세요." value={nameVal}
          />
          <Button 
              style={{ position: 'absolute', bottom: 495, left: '90%', zIndex: 1, color:'white', backgroundColor: 'black'}} 
              onClick = {open}
          >
              실명확인
          </Button>
          
          {/* 주소라인 */}
          <span style={{ position: 'absolute', bottom: 400, left: '3%', zIndex: 1}} >
              주소
          </span>
          <TextInput
              style={{ position: 'absolute', bottom: 395, left: '9%', zIndex: 1, width:'10%'}}
          />
          <Button style={{ position: 'absolute', bottom: 395, left: '20%', zIndex: 1, color:'white', backgroundColor: 'black'}} >
              주소 검색
          </Button>
          <TextInput
              style={{ position: 'absolute', bottom: 395, left: '30%', zIndex: 1, width:'69%'}}
              disabled={true}
          />
          <TextInput
              style={{ position: 'absolute', bottom: 355, left: '9%', zIndex: 1, width:'90%'}}
              placeholder='상세 주소를 입력하세요'
          />
      
          {/* 연락처 */}
          <span style={{ position: 'absolute', bottom: 300, left: '3%', zIndex: 1}} >
              연락처
          </span>
          <Select
              style={{ position: 'absolute', bottom: 300, left: '9%', zIndex: 1}}
              label=""
              placeholder="모바일 전화번호"
              data={['010', '011', '012', '019']}
          />
          <NumberInput
              style={{ position: 'absolute', bottom: 300, left: '30%', zIndex: 1, width:'69%'}}
              label=""
              description=""
              placeholder="'-'없이 숫자만 입력하세요"
              hideControls
          />
      
          {/* 이메일 */}
          <span style={{ position: 'absolute', bottom: 200, left: '3%', zIndex: 1}} >
              이메일
          </span>
          <TextInput
              style={{ position: 'absolute', bottom: 195, left: '9%', zIndex: 1, width:'21%'}}
              placeholder='이메일 주소를 입력하세요'
          />
          <span style={{ position: 'absolute', bottom: 200, left: '31%', zIndex: 1}} >
              @
          </span>
          <TextInput
              style={{ position: 'absolute', bottom: 195, left: '33%', zIndex: 1, width:'37.5%'}}
          />
          <Select
              style={{ position: 'absolute', bottom: 195, left: '71%', zIndex: 1}}
              label=""
              placeholder="직접입력"
              defaultValue={'직접입력'}
              data={['직접입력','naver.com', 'nate.com', 'gmail.com']}
          />
          <Button style={{ position: 'absolute', bottom: 195, left: '92%', zIndex: 1, color:'white', backgroundColor: 'black'}} >
              인증
          </Button>
      
        </div>
      );
    
    function retrunVal() {
        // setTestVal((testVal) => testVal = 1);
        setTestVal(1);
        close();
    }  
      
    return (
        <>
        <Container my="md">
        <Grid>
            <Grid.Col span={{ base: 12, xs: 13 }}>{child}</Grid.Col>
        </Grid>
        </Container>

        <Modal opened={opened} onClose={close} title="실명확인">
            {/* Modal content */}
            <TextInput></TextInput>
            <Button onClick={retrunVal}> 확인</Button>
        </Modal>
        </>
    );
}