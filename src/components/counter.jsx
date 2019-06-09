import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }
  state = {
    count: 1,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
    names: ["Joe", "Jane", "Jack"]
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }

  renderNames() {
    if (this.state.names.length === 0) return <p>There are no names!</p>;
    return (
      <ol>
        {this.state.names.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    );
  }

  handleIncrement() {
    this.setState({
        count: this.state.count + 1
    })
  }

  handleIncrementV2 = () => {
    console.log(this);
  };

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="" />
        <br />
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <br />
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          Increment
        </button>
        <br />
        <button
          onClick={this.handleIncrementV2}
          className="btn btn-primary btn-sm m-2"
        >
          Arrow Func No Bind Alt Version
        </button>
        <br />
        <span style={this.styles}>Style Object Example</span>
        <br />
        <span style={{ fontSize: 50, color: "skyBlue", fontWeight: "Bold" }}>
          Inline Style Example
        </span>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          {!this.state.names.length && "Please add a name"}
          {this.renderNames()}
        </div>
      </React.Fragment>
    );
  }
}

export default Counter;
