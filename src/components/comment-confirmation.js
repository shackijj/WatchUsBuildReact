import React from 'react';

export default class CommentConfirmation extends React.Component {
  constructor() {
    super();

    this.state = {
      showConfirm: false
    };

    this._confirmAction = this._confirmAction.bind(this);
    this._toggleConfirmMessage = this._toggleConfirmMessage.bind(this);

  }

  render() {

    let confirmNode;

    if (this.state.showConfirm) {
      return (
        <span>
          <a href="" onClick={this._confirmAction}>Yes </a> - or - <a href="" onClick={this._toggleConfirmMessage}> No</a>
        </span>
      );
    } else {
      confirmNode = <a href="" onClick={this._toggleConfirmMessage}>{this.props.children}</a>;
    }

    return (
      <span>
        {confirmNode}
      </span>
    );
  }

  _toggleConfirmMessage(e) {
    e.preventDefault();

    this.setState({
      showConfirm: !this.state.showConfirm
    });

  }

  _confirmAction(e) {
    e.preventDefault();
    this.props.onConfirm();
  }
}

CommentConfirmation.propTypes = {
  onConfirm: React.PropTypes.func.isRequired
};