import React, {useState} from 'react'
import Navbar2 from '../Navbar2';
import {Text, Row, Col, Table, Card, Container, Image, Button, Grid} from "@nextui-org/react"
import {ArrowDownCircle, ArrowUpCircle, PlayCircle} from "react-feather";

function about() {

  const [show, setShow] = useState(true);

  return (
    <div>
      
        <Navbar2 activepage="About"/>
        {show ? <div>
        <Container>
        <Row>
            <Col style={{marginTop: "350px"}}>
        <Text size={40}>about / əˈbaʊt /</Text>
        <Text>Michelle Chang or Minji (민지)</Text>
        <Text>1. junior studying computer science at Penn</Text>
        <Text>2. korean drama binge watcher</Text>
        <Text>3. dictionary fanatic</Text>
        <Text>4. summer lover</Text>
        </Col>
        <Col>
        <Image
          src="me.jpg"
          width="70vh"
          height="70vh"
        />
        </Col>
        </Row>
        <br />
        <Button rounded light color="neutral" onClick={() => setShow(false)}><ArrowDownCircle /></Button>
        
        
        </Container>
      </div>
      : <div>
        <Container style={{marginTop: "30px"}}>
        <Button rounded light color="neutral" onClick={() => setShow(true)}><ArrowUpCircle /></Button>
        <Text size={40}>collage /kəˈläZH/</Text>
        <Grid.Container gap={3} justify="center">
        <Grid xs={3}>
        <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
        <Image src="hike.jpg"
          width="70vh"
          height="50vh"/>
      </Card.Body>
    </Card>
        </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
        <Image src="lajolla.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
    </Card>
        </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="seaworld.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="marine.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="firstday.jpg"
          width="70vh"
          height="50vh"/>
</Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="alo.jpg"
          width="70vh"
          height="50vh"/>
</Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="mosaic.jpg"
          width="70vh"
          height="50vh"/>
</Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="blacks.jpg"
          width="70vh"
          height="50vh"/>
</Card.Body>
    </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="huntsman.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
              </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="house.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
          </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="jeju.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
          </Card>
      </Grid>
      <Grid xs={3}>
      <Card isHoverable css={{ mw: "400px" }}>
      <Card.Body>
      <Image src="fisher.jpg"
          width="70vh"
          height="50vh"/>
          </Card.Body>
          </Card>
      </Grid>
    </Grid.Container>
        </Container>
        </div>}
    </div>
  )
}

export default about