import React from 'react'
import { Button } from 'react-bootstrap'
import UpdateBookForm from './UpdateBookForm';

class UpdateBookButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  closeModal = () => {
    this.setState({show: false})
  }

  render() {
    return(
      <>
      { this.state.show ?
        <UpdateBookForm
        book={this.props.book}
        handleUpdate={this.props.handleUpdate}
        closeModal={this.closeModal} 
        show={this.state.show}/>
        : <Button onClick={() => this.setState({ show: true })}>Update Book</Button>
      }
      </>
    )
  }
}

export default UpdateBookButton;
