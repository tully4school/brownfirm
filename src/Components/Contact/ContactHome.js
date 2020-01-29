
import React, { Component } from "react";
import './ContactHome.css'
import * as emailjs from "emailjs-com";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
class ContactForm extends Component {
    state = {
        name: "",
        email: "",
        subject: "",
        message: ""
    };
    handleSubmit(e) {
        e.preventDefault();
        const { name, email, subject, message } = this.state;
        let templateParams = {
            from_name: email,
            to_name: "gmail",
            subject: subject,
            message_html: message
        };
        emailjs.send(
            "gmail",
            "template_dYZBD6YN",
            templateParams,
            "user_nKtggWtjaykr9NHaBaTuF"
        );
        this.resetForm();
    }
    resetForm() {
        this.setState({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value });
    };
    render() {
        return (
            <>
                <h3 className="pl-1">Have A Question?</h3>
                <Form
                    onSubmit={this.handleSubmit.bind(this)}
                    className='m-2'
                >
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Control
                            type='email'
                            name='email'
                            value={this.state.email}
                            className='text-primary'
                            onChange={this.handleChange.bind(this, "email")}
                            placeholder='Email Address'
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicName'>
                        <Form.Control
                            type='text'
                            name='name'
                            value={this.state.name}
                            className='text-primary'
                            onChange={this.handleChange.bind(this, "name")}
                            placeholder='Name'
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicSubject'>
                        <Form.Control
                            type='text'
                            name='subject'
                            className='text-primary'
                            value={this.state.subject}
                            onChange={this.handleChange.bind(this, "subject")}
                            placeholder='Phone Number'
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicMessage'>
                        <Form.Control
                            type='textarea'
                            name='message'
                            className='text-primary'
                            value={this.state.message}
                            onChange={this.handleChange.bind(this, "message")}
                            placeholder="message"
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        Submit
					</Button>
                </Form>
            </>
        );
    }
}
export default ContactForm;

