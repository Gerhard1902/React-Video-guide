import React from 'react';
import PostData from "../data/posts.json"
import PostDetail from "./postDetail.js"

class PostList extends React.Component {
  render() {
    return (
      <div>
          <div>
          {PostData.map((item,index )=>{
          return( 
            <PostDetail post={item}/>
          )
        })}
          </div>
      </div>
    );
  }
}

export default PostList;
