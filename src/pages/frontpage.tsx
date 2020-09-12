import React from "react"
import { Container } from "react-bootstrap"
import { Constant } from "react-declarative-state"
import { test } from "../services"

export default class FrontPage extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Constant value={test()} placeholder={(progress) => <div>Error</div>}>
          {(value) => <div>assd</div>}
        </Constant>
      </Container>
    )
  }
}
