import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import axios from "axios";
import AddBookButton from "./AddBookButton";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */

  handleGetBooks = async () => {
    try {
      let result = await axios.get(
        `${process.env.REACT_APP_SERVER}/books?email=${this.props.user.email}`
      );
      this.setState({
        bookData: result.data,
      });
    } catch (e) {
      console.log(
        "we have an error in the handleGetBooks function:",
        e.response.data
      );
    }
  };

  componentDidMount() {
    this.handleGetBooks();
  }

  handlePostBook = async (newBook) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`
      let createdBook = await axios.post(url, newBook) 
        console.log(createdBook.data);
        this.setState({bookData: [...this.state.bookData, createdBook.data]})
    } catch (error) {
      console.log('Error in the post request.', error.response.data)
      alert('Sorry, there was an error.  Your book wasn\'t added')
    }
  }

  /* TODO: render user's books in a Carousel */
  render() {
    console.log(this.state.bookData);
    return (
     <>
        {this.state.bookData.length ? (
          <Row xs={1} sm={2} md={3} lg={4} className="mt-5">
              <Col>
                <AddBookButton
                  handlePostBook={this.handlePostBook}
                  />
                <Carousel fade>
                  {this.state.bookData.map((book, index) => (
                  <Carousel.Item key={index}>
                    <img
                      className="d-block w-100"
                      src="https://place-hold.it/3200x1800"
                      alt={book.description}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                      <p>{book.status}</p>
                      <p>{book.email}</p>
                    </Carousel.Caption>
                  </Carousel.Item>))}
                </Carousel>
              </Col>
          </Row>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
