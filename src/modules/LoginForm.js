import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    let user ={
      name: e.target.name.value,
      email: e.target.email.value
    }
    this.props.loginHandler(user);
  } 


  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>email</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button style={{marginTop: "25px"}}type="submit">LOGIN</Button>
      </Form>
    );
  }
}

export default LoginForm;
