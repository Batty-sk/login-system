import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsPersonFill, BsLockFill, BsCalendar, BsEnvelopeFill } from 'react-icons/bs';
import { loginOrRegister } from '../const';
import { useNavigate } from 'react-router-dom';


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();  

  const onSubmission = async (data) => {
    console.log('data ', data);
    try {
      await loginOrRegister(data, 'register');
      navigate('/dashboard')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh', background: '#169ba3' }}>
      <Row className="justify-content-center">
        <Col xs={12} md={12}>
          <Form onSubmit={handleSubmit(onSubmission)} style={{ border: '1px solid black', padding: '40px', background: '#2b355b', borderRadius: '20px', boxShadow: '0px 10px 20px black' }}>

            <h2 className='text-center p-3 rounded mb-3' style={{ background: 'cyan' }}>Sign Up</h2>

            <div className="text-center mb-3">
              <BsPersonFill size={64} style={{ color: 'white' }} className="border rounded-circle p-2" />
            </div>
            <Form.Group controlId="formBasicUsername" className='mb-3'>
              <div className="input-group d-flex align-items-center">
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsPersonFill /></span>
                </div>
                <Form.Control type="text" placeholder="Username" {...register("username", { required: true })} />
              </div>
              {errors.username && <span className='text-danger'>Name is required</span>}
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className='mb-3'>
              <div className="input-group d-flex align-items-center">
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsEnvelopeFill /></span>
                </div>
                <Form.Control type="email" placeholder="Email" {...register("email", { required: true })} />
              </div>
              {errors.email && <span className='text-danger'>Email is required</span>}
            </Form.Group>

            <Form.Group controlId="formBasicDOB" className='mb-3'>
              <div className="input-group d-flex align-items-center">
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsCalendar /></span>
                </div>
                <Form.Control type="date" placeholder="Date of Birth" {...register("dob", { required: true })} />
              </div>
              {errors.dob && <span className='text-danger'>Date of Birth is required</span>}
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className='mb-3'>
              <div className="input-group d-flex align-items-center">
                <div className="input-group-prepend">
                  <span className="input-group-text"><BsLockFill /></span>
                </div>
                <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
              </div>
              {errors.password && <span className='text-danger'>Password is required</span>}
            </Form.Group>

            <div className='mt-4 d-flex justify-content-center'>
              <Button style={{ background: 'cyan', color: 'black' }} type="submit">
                Signup
              </Button>
            </div>
            <Form.Text className="text-muted">
              <a href="login/" className='text-white'>Already have an account? Sign In</a>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
