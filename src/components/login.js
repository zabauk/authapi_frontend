import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input, Alert } from 'reactstrap';
const axios=require('axios')
//class name
class Login extends Component{
    //state
    constructor(props){
        super(props)
        this.state={
          email:'',
          password:'',
          visible:false,
          errmsg:''
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
        axios.post('http://localhost:8000/api/login', {email, password})
        .then(res=>console.log(res.data.token))
        .catch(err=>{
            this.setState({
                visible:true,
                errmsg:err.response.data.msg
            })
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
           <div className="container">
               <div className="row justify-content-center">
               <Alert color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                 {this.state.errmsg}
                </Alert>
                    {/* start col */}
                    <div className="col-md-5">
                        <div className="custom-card">
                        {/* email */}
                        <FormGroup className="mb-3">
                            <Label for="email">Email</Label>
                            <Input type="email" value={this.state.email} onChange={this.handleEmail} placeholder="Enter email address" />
                        </FormGroup>
                        {/* end email */}
                        {/* password */}
                        <FormGroup className="mb-3">
                            <Label for="password">Password</Label>
                            <Input type="password" value={this.state.password} onChange={this.handlePassword} placeholder="Enter password" />
                        </FormGroup>
                        {/* end password */}
                        {/* buttons */}
                        <FormGroup>
                            <Button className="btn btn-danger">Cancel</Button>&nbsp;
                            <Button className="btn btn-success" onClick={this.dologin}>Login</Button>
                        </FormGroup>
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