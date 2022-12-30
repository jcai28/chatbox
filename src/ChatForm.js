import React, { Component } from "react";
import "./ChatForm.css"
class ChatForm extends Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    this.props.addMessage(this.state.input);
    this.props.getAnswer(this.state.input)
    this.setState({ input: "" });
  }
  render() {
    return (
      <form className='ChatForm' onSubmit={this.handleSubmit}>
        <label htmlFor='input'>Chat here</label>
        <textarea
        className="msger-input"
          type='text'
          placeholder='...'
          name='input'
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button class="msger-send-btn">Send</button>
      </form>
    );
  }
}
export default ChatForm;
