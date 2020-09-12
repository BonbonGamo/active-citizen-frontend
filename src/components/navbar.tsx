import React from "react";
import { Navbar, Container } from "react-bootstrap";

export default class Navigation extends React.Component<{}> {
  render() {
    return (
      <Navbar expand="lg" bg="light">
        <Navbar.Brand>ACF</Navbar.Brand>
      </Navbar>
    );
  }
}
