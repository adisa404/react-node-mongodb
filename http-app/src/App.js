import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import httpService from './services/httpService';
import config from './config.json';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

class App extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    const response = await httpService.get(config.apiEndpoint);
    const { data: posts } = response;
    this.setState({ posts });
  }

  handleAdd = async () => {
    const obj = { title: 'a', body: 'b' };
    const response = await httpService.post(config.apiEndpoint, obj);
    const { data: post } = response;
    console.log('post', post);

    const posts = [post, ...this.state.posts];
    this.setState({ posts });
  };

  handleUpdate = async post => {
    post.title = 'UPDATED';
    await httpService.put(config.apiEndpoint + '/' + post.id, post);

    // clone post
    const posts = [...this.state.posts];
    const postIndex = posts.indexOf(post);
    posts[postIndex] = { ...post };
    this.setState({ posts });
  };

  handleDelete = async post => {
    const originalPosts = this.state.posts;

    const posts = this.state.posts.filter(p => p.id !== post.id);
    this.setState({ posts });

    try {
      await httpService.delete(config.apiEndpoint + '/' + post.id);
    } catch (ex) {
      //ex.request
      //ex.response
      if (ex.response && ex.response.status === 404)
        alert('this post has already been deleted');

      this.setState({ posts: originalPosts });
    }
  };

  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <button className='btn btn-primary' onClick={this.handleAdd}>
          Add
        </button>
        <table className='table'>
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map(post => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className='btn btn-info btn-sm'
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className='btn btn-danger btn-sm'
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default App;
