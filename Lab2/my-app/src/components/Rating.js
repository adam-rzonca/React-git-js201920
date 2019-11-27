import React from "react";
import Star from "./Star";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0
    };
  }

  starClick(number) {
    this.setState({ rating: number + 1 }, () => {
      alert(
        "Dziekujemy za oddanie głosu. Twoja ocena, to:" + this.state.rating
      );
    });
  }

  renderStar(number) {
    return (
      <Star
        number={number}
        rating={this.state.rating}
        onClick={() => this.starClick(number)}
      />
    );
  }

  render() {
    return (
      <div>
        Twoja ocena:
        {this.renderStar(0)}
        {this.renderStar(1)}
        {this.renderStar(2)}
        {this.renderStar(3)}
        {this.renderStar(4)}
        {this.renderStar(5)}
        {this.renderStar(6)}
        {this.renderStar(7)}
        {this.renderStar(8)}
        {this.renderStar(9)}
      </div>
    );
  }
}

export default Rating;
