import React from "react";
import { Component } from "react";
export default class NewTask extends Component {
  render() {
    return (
      <>
      {this.props.task}
      </>
    );
  }
}
