import {React, useState, useRef} from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import '../Signin/Signin.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signin() {
  const [action,setAction] = useState("Login")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  let handleLogin = async  (e) =>{

    e.preventDefault();
    console.log("executing")
    const config={
      headers:{
        "Content-type":"application/json",
        'withCredentials': true
      },
    }
    const response = await axios.post(
      `http://127.0.0.1:8000/signin`,{
        username: username,
        password: password
      },config
    ).then((response)=>{
      console.log(response)
      navigate("/dashboard")
    }).catch((error)=>{
      console.log(error)
    })

  }
  return (
   <>
    <div className="row justify-content-center align-items-center vh-100 g-2">
    <div className="col-10 row align-items-center" >
    <div className="col-6">
    <img src='https://img.freepik.com/free-vector/hand-drawn-halloween-bat-illustration_23-2149069133.jpg?w=1480&t=st=1696951177~exp=1696951777~hmac=9efa28322d0108224d8697a15339290b037ab80ee9f2a888241522b8af138a0b' className="img-fluid"></img>
    </div>
    <Form  onSubmit={handleLogin} className="px-4 py-5 col-6">
        <h4 className="login-title text-center">{action}</h4>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text"   onChange={(e)=>{setUsername(e.target.value)}}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </Col>
      </Form.Group>
      
      <Button className={`py-2 px-6 ${action === "Sign Up"?"gray":""}`} type="submit" onClick={()=>{setAction("Login")}}>Login</Button>{' '}
      <Button className={`py-2 px-6 ${action === "Login"?"gray":""}`} type="submit" onClick={()=>{setAction("Sign Up")}}>Sign Up</Button>
    </Form>
   </div>
   </div>
   </>
  )
}

export default Signin