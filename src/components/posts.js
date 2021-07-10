import React, {Component} from 'react'
import Modal from './postmodal'
import {ListGroup, Button} from 'react-bootstrap'
import { useCookies } from 'react-cookie'
const axios=require('axios')

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            loading:true,
            modal:false,
        }
        
    }

    //component did mount
    componentDidMount(){
        const token=useCookies['token']
        console.log('cookie token'+token)
        try{
            //get data
            axios.get('http://localhost:8000/api/posts').then(res=>{
                this.setState({
                    posts:res.data
                })
            }).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    showModalRef = ({handleShow}) => {
        this.showModal = handleShow;
     }
    //open modal
    openModal=()=>{
        this.showModal()
    }
    //render method
    render(){
        const {posts}=this.state
        return(
            <React.Fragment>
               <div className="container">
                   <div className="mb-3">
                       <Button variant="primary" onClick={this.openModal}>Create</Button>
                   </div>
               <ListGroup>
                    {posts.map((post, index)=>{
                        return(
                            <ListGroup.Item>{post.title}</ListGroup.Item>
                        )
                    })}
                </ListGroup>
               </div>
               <Modal ref={this.showModalRef} />
            </React.Fragment>
        )
    }
}

//export
export default Post