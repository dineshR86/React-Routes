import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';


class PostIndex extends Component {

    constructor(props) {
        super(props);

        this.renderPosts = this.renderPosts.bind(this);
    }

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className="list-group-item" key={post.id}>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                </li>
            );
        });

    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/post/new">
                        Add a Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps({ posts }) {
    return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);