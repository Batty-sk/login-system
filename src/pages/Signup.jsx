import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsPersonFill, BsLockFill } from 'react-icons/bs'; // Importing icons from React Icons

const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmission = (data) => {
    console.log(data);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Row className="justify-content-center  ">
        <Col xs={12} md={12}>
          <Form onSubmit={handleSubmit(onSubmission)} style={{border:'1px solid black',padding:'20px'}} >

            <h2 className='text-center'>Sign Up</h2>

            <div className="text-center mb-3">
              <BsPersonFill size={64} className="border border-dark rounded-circle p-2" />
            </div>
            <Form.Group controlId="formBasicEmail">
              <div className="input-group">
                
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsPersonFill /></span>
                </div>
                <Form.Control type="text" placeholder="Username" {...register("username",{required:true})} />
              </div>
              {errors.username && <span className='text-danger'>Name is required</span>}
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsLockFill /></span> 
                </div>
                <Form.Control type="password" placeholder="Password" {...register("password",{required:true})} />
              </div>
              {errors.password && <span className='text-danger'>Password is required</span>}
            </Form.Group>

            <div className='mt-4'>
            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Form.Text className="text-muted">
              <a href="login/">Already have an account? Sign In</a>
            </Form.Text>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
