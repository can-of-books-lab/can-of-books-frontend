import {Component} from 'react'
import {Button } from 'react-bootstrap'

class DeleteButton extends Component{
  render(){

    return(
      <Button className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.book._id)}>Delete Book</Button>
    )
  }
}
export default DeleteButton