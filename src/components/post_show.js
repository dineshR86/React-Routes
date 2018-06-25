import React,{Componenet} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostShow extends Componenet{

    componentDidMount(){
        //we need to get the id passed to the url, we can get all the wild card values from the params object probvided by react router
        // here we have only id parameter as wild card 
        const {id}=this.props.match.params; // this same as const id= this.props.match.params.id
        this.props.fetchPost(id);
    }

    render (){
        const {post}=this.props;

        if(!post){
            return <div>loading...</div>;
        }

        return (
            <div>
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

export default connect(mapStateToProps,{fetchPost})(PostShow);