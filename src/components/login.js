import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert, Button, Form} from 'react-bootstrap'
import Cookies from 'universal-cookie';
const axios=require('axios')
const cookies = new Cookies();

//class name
class Login extends Component{
    //state
    constructor(props){
        super(props)
        this.state={
          email:'',
          password:'',
          visible:false,
          errmsg:'',
        }
    }
    //component did mount
    componentDidMount(){
        if(cookies.get("token")){
            window.location.href="http://localhost:3000/"
        }
    }
    //handle email
    handleEmail=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    //handle password
    handlePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
    }
    // login function
    dologin=()=>{
        const {email, password}=this.state
        axios.post('http://localhost:8000/api/login', {email, password}, {withCredentials: true})
        .then(res=>{
            if(res.status===200)window.location.href='http://localhost:3000/'
        })
        .catch(err=>{
            this.setState({
                visible:true,
                errmsg:err.response.data.msg
            })
            console.log(err)
        })
    }  
    
    //on dismiss
    onDismiss=()=>{
        this.setState({
            visible:false
        })
    }
   render(){
       return(
           <div className="container my-5">
               <Alert variant="danger" show={this.state.visible} onClose={() => this.setState({visible:false})} dismissible>
                        {this.state.errmsg}
                </Alert>
               <div className="row justify-content-center">
               
                    {/* start col */}
                    <div className="col-md-4">
                        <div className="text-center mb-3">
                            <img src="/user.png" width="130" alt='user' className="myimg" />
                        </div>
                        <div className="custom-card">
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" onClick={this.dologin} type="button">
                            Login
                        </Button>
                        </Form>
                        
                        </div>
                    </div>
                    {/* end col */}
               </div>
           </div>
       )
   }
}

//export
export default Login