import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
import Cookies from 'universal-cookie'
const axios=require('axios')
const cookies=new Cookies()

class Postmodal extends Component{
    constructor(props){
        super(props)
        this.state={
            title:'',
            body:'',
            show:false,
            token:cookies.get("token")
        } 
    }
    //toggle modal
    handleClose=()=>{
        this.setState({
            show:false
        })
    }
    //handle show
    handleShow=()=>{
        this.setState({
            show:true
        })
    }

    //handle title
    handleTitle=(evt)=>{
        this.setState({
            title:evt.target.value
        })
    }

    //handle body
    handleBody=(evt)=>{
            this.setState({
                body:evt.target.value
            })
    }

    //save data into database
    saveData=()=>{
        const {title, body, token}=this.state
        axios.post('http://localhost:8000/api/create-post', {title, body}, {
            headers:{'Authorization':token}
        }).then((res)=>{
            console.log(res.data)
            this.setState({
                show:false
            })
            this.props.savedPost(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return(
            <React.Fragment>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Create new post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Post title</Form.Label>
                        <Form.Control type="text" onChange={this.handleTitle} value={this.state.title} placeholder="Post title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post body</Form.Label>
                        <Form.Control onChange={this.handleBody} value={this.state.body} as="textarea" rows={3} placeholder="Enter post body" />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.saveData}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
            </React.Fragment>
        )
    }
}

export default Postmodal