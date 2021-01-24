import React, { Component } from 'react';
import PageHader from "../../components/PageHader";
import PostForm from "../../components/PostForm";

class AddPost extends Component {
    render() {
        return (
          <div>
            <PageHader currentPageName="Add New Post" />
            <PostForm />
          </div>
        );
    }
}

export default AddPost
