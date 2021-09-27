import React, { Component } from 'react';

class Header extends Component {
  renderSuccess() {
    if (this.props.gotBingo) {
      return (
        <span className="ma2 f1-ns f2-m f3">
          You got bingo!
        </span>
      );
    }
    return null;
  }

  render() {
    return (
      <header className="flex justify-between items-end bb-5 pv-1">
        <h1 className={this.props.gotBingo ? "visually-hidden" : "ma2 f1-ns f2-m f3"}>
        <img alt="nf-core/bingo logo" width="50%" src="https://github.com/jfy133/bingo/raw/master/logos/nfcore-bingo_logo.png"></img>
        </h1>
        {this.renderSuccess()}
        {this.props.children}
      </header>
    );
  }
}

export default Header;
