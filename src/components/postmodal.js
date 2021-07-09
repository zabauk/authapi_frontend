import React, {Component} from 'react'
import {Modal, Button, Form} from 'react-bootstrap'
class Postmodal extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
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
                        <Form.Control type="text" placeholder="Post title" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Post body</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter post body" />
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={this.handleClose}>
                    Save
                </Button>
                </Modal.Footer>
            </Modal>
            </React.Fragment>
        )
    }
}

export default Postmodal