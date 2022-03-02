import React from 'react'
import { Button } from 'react-bootstrap'
import BookFormModal from './BookFormModal';

class AddBookButton extends React.Component {
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
        <BookFormModal
          show={this.state.show}
          closeModal={this.closeModal}
          handlePostBook={this.props.handlePostBook}
         />

        : <Button onClick={() => this.setState({ show: true })}>Create Book</Button>
      }
      </>
    )
  }
}

export default AddBookButton;
