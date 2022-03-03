import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

class UpdateBookForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.books.status,
      email: this.props.book.email,
      _id: this.props.book._id,
      __v: this.props.book.__v 
    }
    
    this.props.closeModal();
    this.props.handleUpdate(bookToUpdate);
  }


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
        <Button type='submit'>Update Book</Button>
      </Form>
    </Modal>
    )
  }
}

export default UpdateBookForm