import React, {Component} from 'react'
import Modal from './postmodal'
import {ListGroup, Button} from 'react-bootstrap'
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
            token:cookies.get("token")
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