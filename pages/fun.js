import React, {useEffect, useState} from 'react'
import Navbar2 from '../Navbar2';
import { Card, Col, Row, Button, Text, Container } from "@nextui-org/react";
import axios from 'axios';

function resume() {
  const [word, setWord] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [partofSpeech, setPartofSpeech] = useState('');
  const [def, setDef] = useState([]);
  const [again, setAgain] = useState(false);

  async function getData(){
    const Url = "https://random-word-api.vercel.app/api?words=1"

    // get list of pokemon
    const response = await fetch(Url)
    const curr = await response.json()
    const now = curr[0];
    setWord(curr[0]);
    console.log(curr[0])
    // request the charmandar data
    const response2 = await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${now}?key=53df75a5-5f4b-47b6-9fe6-5d4c2b750b79`)
    const received = await response2.json()
    const { phonetics } = received;
    console.log(received[0]);
    console.log(received[0].fl)
    setPartofSpeech(received[0].fl);
    if (received[0].hwi && received[0].hwi.prs){
    setPhonetic(received[0].hwi.prs[0].mw);
    } else {
      setPhonetic('');
    }
    console.log(received[0].shortdef);
    if (received[0].shortdef) {
      setDef(received[0].shortdef);
    } else {
      setDef(null);
    }
}

  useEffect(() => {
  getData()
  setAgain(false);
  }, [again])

  return (
    <div>
        <Navbar2 activepage="Fun" />
        <Container>
          <br />
        <Text size={40}>wordplay /ˌwərdˈpleɪ/</Text>
        <Card css={{ w: "100%", h: "300px"}}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text h3 color="black">
         {`${word} /${phonetic}/`}
        </Text>
        <Text>
          {partofSpeech}
        </Text>
        {def !== null && def.map((e, ix) => <Text>{`${ix + 1}. ${e}`}</Text>)}
      </Col>
    </Card.Header>
    <Card.Footer style={{marginTop: "220px"}}>
      <Button shadow auto color="grey" rounded flat onClick={() => setAgain(true)}>randomizer</Button>
    </Card.Footer>
    </Card>
    </Container>
    </div>
  )
}

export default resume