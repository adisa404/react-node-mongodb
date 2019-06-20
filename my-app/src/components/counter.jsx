import React, { Component } from "react";

class FirstComponent extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };

  // constructor() {
  //   super();
  //   this.handleInclrement = this.handleInclrement.bind(this);
  // }

  handleInclrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let tagsLi = this.state.tags.map(tag => <li key={tag}>${tag}</li>);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleInclrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>{tagsLi}</ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default FirstComponent;
