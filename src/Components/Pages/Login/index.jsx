import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'
import { Card } from 'react-bootstrap';
import axios from 'axios'
import React,{useState,useEffect} from 'react';
import Cookies from 'js-cookie';
import {toast, Toaster} from 'react-hot-toast'
import Spinner from 'react-bootstrap/Spinner'


function BasicExample() {
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)
    const [Loading, setLoading] = useState(false)

    const handleForm = (e) =>{
        e.preventDefault()
        setLoading(true)

        axios.post("https://dummyjson.com/auth/login",{
                username,
                password
        },{headers: { 'Content-Type': 'application/json' }}).then(resp =>{
            setLoading(false)
            Cookies.set("token",resp.data.token)
            Cookies.set("username",resp.data.username)
            toast.success('Authenticated was successfully')
            setTimeout(() =>{
                window.location.reload();
            },1500)

        }).catch(err => {
            toast.error('Authenticated was incorrect')
            setTimeout(() =>{
                window.location.reload();
            },1500)
        })
    }
  return (
    <Container>
        <br />
        <Toaster />
        <h1>Login</h1>
        {Loading && <><Spinner animation="grow" size="lg" /></>}
        <Card title='Login' style={{padding:"5%"}}>
        <Form onSubmit={(e) => handleForm(e)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Card>
        
    </Container>
  );
}

export default BasicExample;