import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Container,Form,Button,Col,Row } from "react-bootstrap"

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
<Container className='d-flex justify-content-center p-4 m-auto' fluid>
    <Form onSubmit={handleFormSubmit} className='p-3'>
    <h2 className='p-3'>Signup</h2>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridFirst">
      <Form.Label htmlFor="firstName">First Name</Form.Label>
      <Form.Control 
        placeholder="First Name"
        name="firstName"
        type="firstName"
        id="firstName" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label htmlFor="lastName">Last Name</Form.Label>
      <Form.Control 
        placeholder="Last"
        name="lastName"
        type="lastName"
        id="lastName"
        onChange={handleChange} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridEmail">
    <Form.Label htmlFor="email">Email:</Form.Label>
    <Form.Control 
      placeholder="youremail@test.com"
      name="email"
      type="email"
      id="email"
      onChange={handleChange}
    />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridPassword">
    <Form.Label htmlFor="pwd">Password:</Form.Label>
    <Form.Control 
      placeholder="********"
      name="password"
      type="password"
      id="pwd"
      onChange={handleChange} 
    />
  </Form.Group>

  <Button className='m-2' type="submit">
    Submit
  </Button>
  <p><small>already a member? click <Link to="/login">here</Link> to login</small></p>
</Form>
</Container>

    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="email">Email:</label>
    //       <input
    //         placeholder="youremail@test.com"
    //         name="email"
    //         type="email"
    //         id="email"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="pwd">Password:</label>
    //       <input
    //         placeholder="******"
    //         name="password"
    //         type="password"
    //         id="pwd"
    //         onChange={handleChange}
    //       />
    //     </div>
    //     <div className="flex-row flex-end">
    //       <button type="submit">Submit</button>
    //     </div>
    //   </form>
    // <Link className='m-1 p-1' to="/login">← Go to Login</Link>
    // </Container>
  );
}

export default Signup;




    // <Container className=" bg-light m-5 p-4 d-flex justify-content-center" fluid>
    //   <form onSubmit={handleFormSubmit}>
    //   <h2 className='p-3'>Signup</h2>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="firstName">First Name:</label>
    //       <input
    //         placeholder="First"
    //         name="firstName"
    //         type="firstName"
    //         id="firstName"
    //         onChange={handleChange}
    //       />
        //     </div>
    //     <div className="flex-row space-between my-2">
    //       <label htmlFor="lastName">Last Name:</label>
    //       <input
    //         placeholder="Last"
    //         name="lastName"
    //         type="lastName"
    //         id="lastName"
    //         onChange={handleChange}
    //       />
    //     </div>