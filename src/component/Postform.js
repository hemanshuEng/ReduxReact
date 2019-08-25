import React, { Component } from "react";
import axios from "axios";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = e => {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    axios.post("https://jsonplaceholder.typicode.com/posts", post).then(res => {
      this.setState({ title: "", body: "" });
    });
  };
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              name="title"
              className="form-control"
              placeholder="Title"
              value={this.state.title}
            />
          </div>
          <div className="form-group">
            <input
              onChange={this.handleChange}
              type="text"
              name="body"
              className="form-control"
              placeholder="Body"
              value={this.state.body}
            />
          </div>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}
export default Postform;
