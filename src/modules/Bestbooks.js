import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { withAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import AddBookButton from "./AddBookButton";
import DeleteButton from "./DeleteButton";
import UpdateBookButton from "./UpdateBookButton";

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
        `${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`
      );
      this.setState({
        bookData: result.data,
      });
    } catch (e) {
      console.log(
        "we have an error in the handleGetBooks function:",
        e.message
      );
    }
  };

  handlePostBook = async (newBook) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books`;
      let createdBook = await axios.post(url, newBook);
      this.setState({ bookData: [...this.state.bookData, createdBook.data] });
    } catch (error) {
      console.log("Error in the post request.", error.response.data);
      alert("Sorry, there was an error.  Your book wasn't added");
    }
  };

  handleDelete = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}?${this.props.user.email}`;
      await axios.delete(url);
      const updatedBooks = this.state.bookData.filter(
        (book) => book._id !== id
      );
      this.setState({
        bookData: updatedBooks,
      });
      console.log("item deleted");
    } catch (error) {
      console.log("Error in the delete request.", error.message);
      alert("error in the delete method");
    }
  };

  //add method that send object to the back end for update
  //this method needs to recieve the object from the updatebookform component
  handleUpdate = async (bookToUpdate) => {
    try{
        let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`
        let updatedBook = await axios.put(url, bookToUpdate);
        let updatedBookData = this.state.bookData.map(existingBook => existingBook._id === bookToUpdate._id ? updatedBook.data : existingBook);
        this.setState({
          bookData: updatedBookData
        });
    }catch(error){
      console.log("Error in the update request.", error.message);
      alert("error in the update method");
    }
  }

  componentDidMount() {
    this.handleGetBooks();
  }
  /* TODO: render user's books in a Carousel */

  render() {
    console.log(this.props.auth0.user.email);
    return (
      <>
        <AddBookButton handlePostBook={this.handlePostBook} />
        {this.state.bookData.length ? (
          <Row xs={1} sm={2} md={3} lg={4} className="mt-5">
            <Col>
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
                    <DeleteButton
                      handleDelete={this.handleDelete}
                      book={book}
                    />
                    <UpdateBookButton
                      handleUpdate={this.handleUpdate}
                      book={book}/>
                  </Carousel.Item>
                ))}
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

export default withAuth0(BestBooks);
