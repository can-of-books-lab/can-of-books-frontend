import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class BookFormModal extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
      email: e.target.email.value
    }
    this.props.handlePostBook(newBook)
    this.props.closeModal();
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.closeModal}>
        <Modal.Header closeButton>Add Book</Modal.Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Form.Group controlId='status'>
            <Form.Check type='switch' label='status' />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>E-mail</Form.Label>
            <Form.Control type='text' />
          </Form.Group>
          <Button type='submit'>Create Book</Button>
        </Form>
      </Modal>
    )
  }
}

export default BookFormModal;
