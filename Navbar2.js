import React, { useEffect } from "react";
import { Navbar, Button, Link, Text, Card, Radio, useTheme } from "@nextui-org/react";
import {Home, User, Briefcase, File, Compass} from "react-feather"

function Navbar2(props) {

  useEffect(() => {
    console.log(props.activepage);
  },[])

  const { isDark } = useTheme();
  
  return (
    <Navbar isBordered="false" variant="floating" isDark={true}>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
          mɪˈʃɛl
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor="neutral" hideIn="xs" variant="underline">
          <Navbar.Link href="/" isActive={props.activepage === "Home"}><Home /></Navbar.Link>
          <Navbar.Link href="about" isActive={props.activepage === "About"}><User /></Navbar.Link>
          <Navbar.Link href="experience" isActive={props.activepage === "Experience"}><Briefcase/></Navbar.Link>
          <Navbar.Link href="fun" isActive={props.activepage === "Fun"}><Compass/></Navbar.Link>
        </Navbar.Content>
      </Navbar>
  )
}

export default Navbar2