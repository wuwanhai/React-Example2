import React,{Component} from 'react';

class Posts extends Component {
   constructor (props) {
       super(props);
       this.state = {
           posts:[]
       }
   }
   componentDidMount() {
       fetch('http://jsonplaceholder.typicode.com/posts')
           .then(res=>res.json())
           .then(data=>this.setState({posts:data}));
   }
   render() {
       const postItems = this.state.posts.map((post)=>(
           <div key={post.id}>
               <p>{post.title}</p>
               <p>{post.body}</p>
           </div>
       ))
       return (
           <div>
               {postItems}
           </div>
       )
   }
}

export default Posts;