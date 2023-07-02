import Navbar2 from '../Navbar2';
import { useRef, useMemo, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Container, Card, Row, Text, Col, Spacer, Button } from "@nextui-org/react";
import { Headphones, PauseCircle } from "react-feather";
import useSound from "use-sound";

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1)
function Sphere({ position = [0, 0, 0], ...props }) {
  const ref = useRef()
  const factor = useMemo(() => 0.5 + Math.random(), [])
  useFrame((state) => {
    const t = easeInOutCubic((1 + Math.sin(state.clock.getElapsedTime() * factor)) / 2)
    ref.current.position.y = position[1] + t * 4
    ref.current.scale.y = 1 + t * 3
  })
  return (
    <mesh ref={ref} position={position} {...props} castShadow receiveShadow>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshLambertMaterial color="white" roughness={0} metalness={0.1} />
    </mesh>
  )
}

function Spheres({ number = 20 }) {
  const ref = useRef()
  const positions = useMemo(() => [...new Array(number)].map(() => [3 - Math.random() * 6, Math.random() * 4, 3 - Math.random() * 6]), [])
  useFrame((state) => (ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() / 2) * Math.PI))
  return (
    <group ref={ref}>
      {positions.map((pos, index) => (
        <Sphere key={index} position={pos} />
      ))}
    </group>
  )
}

function index() {
  const [play, { stop }] = useSound("paperplane.mp3");
  const [playing, setPlaying] = useState(false);

  function playMusic () {
    play();
    setPlaying(true);
  }

  function stopMusic () {
    stop();
    setPlaying(false);
  }

  return (
    <div>
      <Navbar2 activepage="Home" />
      <br />
      <Container>
      <Row>
        <Col>
      <Canvas style={{
        width: '70vh',
        height: '90vh',
     }} shadows camera={{ position: [-9, 3, 10], fov: 70 }}>
      <fog attach="fog" args={["white", 0, 40]} />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[2.5, 8, 5]} intensity={1.5} shadow-mapSize={1024}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </directionalLight>
      <pointLight position={[-10, 0, -20]} color="white" intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <group position={[0, -3.5, 0]}>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[100, 100]} />
          <shadowMaterial transparent opacity={0.4} />
        </mesh>
        <Spheres />
      </group>
    </Canvas>
    </Col>
    <Col>
      <Row>
        <Text style={{marginTop:"170px"}} h1 size={70} color="black">
          michelle
        </Text>
        <Spacer x={1} />
        {!playing ?
        <Button flat color="neutral" auto style={{marginTop:"200px"}} onPress={() => playMusic()}><Headphones /></Button>
        :
        <Button flat color="neutral" auto style={{marginTop:"200px"}} onPress={() => stopMusic()}><PauseCircle /></Button>
      }
        </Row>
        <Row>
          <Text size={30}>/ mɪˈʃɛl /</Text>
          <Spacer x={1} />
        <Text size={35} i={true}> noun</Text>
        </Row>
        <p style={{fontSize: "30px"}}>a software engineer from <br /> south korea</p>
    </Col>
    </Row>
    </Container>
    </div>
  )
}


export default index