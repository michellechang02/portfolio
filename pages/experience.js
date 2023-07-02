import React from 'react'
import Navbar2 from '../Navbar2';
import {Text, Card, Container, Table} from "@nextui-org/react"

function experience() {
  return (
    <div>
        <Navbar2 activepage="Experience" />
        <Container>
          <br />
        <Text size={40}>experience / ɪkˈspɪər i əns /</Text>
        <Table
      aria-label="Example table with static content"
      css={{
        height: "auto",
        minWidth: "100%",
      }}
    >
      <Table.Header>
        <Table.Column>COMPANY</Table.Column>
        <Table.Column>ROLE</Table.Column>
        <Table.Column>DETAILS</Table.Column>
      </Table.Header>
      <Table.Body>
        <Table.Row key="1">
          <Table.Cell>Qualcomm</Table.Cell>
          <Table.Cell>Software Engineer</Table.Cell>
          <Table.Cell>Automated machine learning pipelines (MLOps)</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Penn Engineering</Table.Cell>
          <Table.Cell>CIS 2400 Teaching Assistant</Table.Cell>
          <Table.Cell>Teaching students C and pointers</Table.Cell>
        </Table.Row>
        <Table.Row key="2">
          <Table.Cell>Penn Medicine</Table.Cell>
          <Table.Cell>Summer Research Assistant</Table.Cell>
          <Table.Cell>Full-Stack Web Application to Visualize Brain Imaging Data in 3D</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </Container>
    </div>
  )
}

export default experience