import React, {Component} from 'react';
import axios from 'axios';

class ContactForm extends Component{

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      subject: '',
      message: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

    handleNameChange(event) {
      this.setState({
        name: event.target.value
      });
    }

    handleSubjectChange(event) {
      this.setState({
        subject: event.target.value
      });
    }

    handleMessageChange(event) {
      this.setState({
        message: event.target.value
      });
    }

    handleSubmit(event) {

      event.preventDefault();

      const name = this.state.name;
      const subject = this.state.subject;
      const message = this.state.message;

      axios({
          method: "POST",
          url:"http://localhost:3002/send",
          data: {
              name: name,
              subject: subject,
              messsage: message
          }
      }).then((response)=>{
              console.log(response.data);
        });

      };

    render(){
        return(
            <form class="contact-form" onSubmit={this.handleSubmit}>

              <h2 class="contact-us">Contact Us</h2>
              <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="Your Name*" />

              <input type="text" value={this.state.subject} onChange={this.handleSubjectChange} placeholder="Subject*" />

              <textarea value={this.state.message} onChange={this.handleMessageChange} placeholder="Message*"></textarea>

              <button type="submit" class="buton">Send</button>

            </form>

        )
    }
}

export default ContactForm
