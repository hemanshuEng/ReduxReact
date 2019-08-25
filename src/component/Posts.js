import React, { Component } from 'react'
import axios from 'axios';
class Posts extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res=>this.setState({posts:res.data}))
       
      
    }
    render() {
        const postitems = this.state.posts.map(post=>(
           <div key={post.id} className="col-6">
               <h3>{post.title}</h3>
               <p>{post.body}</p>
           </div>   
        ));
        return (
            <div>
                <h1 className="text-center">Posts</h1>
                <div className="row">
                   {postitems}  
                </div>
            </div>
        )
    }
}
export default Posts;