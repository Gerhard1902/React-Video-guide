import React from 'react';
import PostData from "../data/posts.json"

class PostDetail extends React.Component {
  render() {
    const{post}= this.props
    //const post= this.props.post
    return( 
      <div>
       <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    )}
  }


export default PostDetail;