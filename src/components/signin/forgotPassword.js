import { useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const ForgotPassword = ()=>{
    var history = useHistory();
    const [ForgotEmail, setForgotEmail] = useState(false)
    const handleForgot = (e) =>{
        e.preventDefault();
        const data = {
            "email":ForgotEmail
        }
        console.log(data);
        axios.post(`${process.env.REACT_APP_API_URL}/api/v1/auth/password/forgot`,data)
        .then((res)=>{
            console.log(process.env.REACT_APP_API_URL);
            alert(res.data["message"]);            
            history.push("/enter");
        })
        .catch((err)=>console.warn(err))
    }
    
  

  return (
    <div className='col-sm-6 offset-sm-3'>
      <h1>Forgot Password</h1>
      <br />
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' onChange={(e) => setForgotEmail(e.target.value)} />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant='primary' onClick={handleForgot}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default ForgotPassword
