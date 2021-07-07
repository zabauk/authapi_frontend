import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormGroup, Label, Input } from 'reactstrap';
//class name
class Login extends Component{
    // login function
    dologin=()=>{
        console.log('login')
    }
    
   render(){
       return(
           <div className="container">
               <div className="row justify-content-center">
                    {/* start col */}
                    <div className="col-md-5">
                        <div className="custom-card">
                        {/* email */}
                        <FormGroup className="mb-3">
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter email address" />
                        </FormGroup>
                        {/* end email */}
                        {/* password */}
                        <FormGroup className="mb-3">
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Enter password" />
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