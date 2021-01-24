import React, { Component } from "react";
import PostHeader from "../components/PageHader";

class Post extends Component {
  render() {
    return (
      <div>
        <PostHeader currentPageName="Post Page" />
        <div className="row">
          <table className="table table-striped table-border mt-5">
            <thead>
              <tr>
                <th>Post title</th>
                <th>Category Name</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p>
                    Conveniently visualize diverse mindshare without
                    intermandated services.
                  </p>
                </td>
                <td>Demo post</td>
                <td>10 December 2020</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Post;
