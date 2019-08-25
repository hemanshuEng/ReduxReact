import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createPost } from "../actions/postActions";

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
    //call action
    this.props.createPost(post);
    this.setState({ title: "", body: "" });
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
Postform.propTypes = {
  createPost: PropTypes.func.isRequired
};
export default connect(
  null,
  { createPost }
)(Postform);
