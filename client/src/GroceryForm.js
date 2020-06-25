import React from "react";
import List from "./components/lists/List";
import { Form, } from "semantic-ui-react";

class GroceryForm extends React.Component {
  state = { name: "", price: "", };

handleSubmit = (e) => {
  e.preventDefault();
  if (this.props.id) {
    this.props.updateList( this.props.id, this.state )
  } else {
    this.props.add(this.state)
  }
  this.setState({ name: "", price: "", })
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value, });
}; 


componentDidMount() {
  const { name  } = this.props;
  this.setState({ name });
}
  


render() {
  return (
    <Form onSubmit={this.handleSubmit}>
      <Form.Group widths="equal">
        <Form.Input 
          fluid 
          label="Grocery Item" 
          placeholder="Grocery Item" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleChange}
        />
        <Form.Input 
          fluid 
          label="Price" 
          placeholder="Price" 
          name="price" 
          value={this.state.phone} 
          onChange={this.handleChange}
        />
        <Form.Button color='black'>Submit</Form.Button>
      </Form.Group>
    </Form> 
  );  
}
}


export default GroceryForm;