import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchPost,deletePost} from '../actions/index';

class PostShow extends Component{

    componentDidMount(){
        //we need to get the id passed to the url, we can get all the wild card values from the params object probvided by react router
        // here we have only id parameter as wild card 
        const {id}=this.props.match.params; // this same as const id= this.props.match.params.id
        this.props.fetchPost(id);
    }

    onDeleteClick(){
        const {id}=this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push("/");
        });
    }

    render (){
        const {post}=this.props;

        if(!post){
            return <div>loading...</div>;
        }

        return (
            <div>
                <Link to="/">Back to Posts</Link>
                <button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>
                Delete a Post
                </button>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories}</h6>
                <p>
                    {post.content}
                </p>
            </div>
        );
    }
}

// ownProps is the props object of the PostShow component, it can be passed as the second parameter to the mapStateToProps function. 
// 
function mapStateToProps({posts},ownProps){
    return {post:posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow);