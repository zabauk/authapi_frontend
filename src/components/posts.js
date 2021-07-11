import React, {Component} from 'react'
import Modal from './postmodal'
import {ListGroup, Button, Alert} from 'react-bootstrap'
import  Cookies  from 'universal-cookie'
const cookies=new Cookies()
const axios=require('axios')

class Post extends Component{
    constructor(props){
        super(props)
        this.state={
            posts:[],
            loading:true,
            modal:false,
            token:cookies.get("token"),
            success:false,
        }
        
    }

    //component did mount
    componentDidMount(){
        try{
            //get data
            axios.get('http://localhost:8000/api/posts', {
                headers:{'Authorization':this.state.token}
            }).then(res=>{
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
    //saved data
    savedPost=(post)=>{
        const newPosts=[...this.state.posts, post]
        this.setState({
            posts:newPosts,
            success:!this.state.success,
        })
    }
    //delete post
    deletePost=(id)=>{
        try{
            //get data
            axios.delete(`http://localhost:8000/api/delete/${id}`, {
                headers:{'Authorization':this.state.token}
            }).then(res=>{
                const {posts}=this.state
                const newPosts=posts.filter(post=>post._id !==res.data._id)
                this.setState({
                    posts:newPosts,
                    success:!this.state.success,
                })
            }).catch(err=>{
                console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }
    //render method
    render(){
        const {posts}=this.state
        return(
            <React.Fragment>
               <div className="container">
               <Alert variant="success" show={this.state.success} onClose={() => this.setState({success:false})} dismissible>
                       <strong>Success! </strong>Action completed successfully
                </Alert>
                   <div className="mb-3">
                       <Button variant="primary" onClick={this.openModal}>Create</Button>
                   </div>
               <ListGroup>
                    {posts.map((post, index)=>{
                        return(
                            <ListGroup.Item key={index}>{post.title}  <span className="float-right"><Button className="btn-sm">Edit</Button> <Button className="btn-sm" variant="danger" onClick={()=>this.deletePost(post._id)}>Delete</Button></span></ListGroup.Item>
                        )
                    })}
                </ListGroup>
               </div>
               <Modal ref={this.showModalRef} savedPost={this.savedPost} />
            </React.Fragment>
        )
    }
}

//export
export default Post