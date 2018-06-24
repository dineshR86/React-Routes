import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';

// reduxForm is a helper for connecting the form to the reducer (state). 
// Field is used for interacting with the ReduxForm
class PostNew extends Component {

    renderField(field) {

        const {meta:{touched,error}}=field; // ES6 syntax where we are destructuring the field object.
                                            // meta=field.meta; touched=meta.touched
        const className=`form-group ${touched && error ?'has-danger':''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input className="form-control" type="text" {...field.input} />
                <div className="text-help">
                {touched?error:""}
                </div>
            </div>
        );

    }

    onSubmit(values){
        console.log(values);
        this.props.createPost(values,()=>{
            this.props.history.push("/"); // we are passing a callback function to the action creator.
        });
    }

    render() {
        // handlesubmit is property passed to the props of the component by the redux form. 
        // its similar to how the redux connect passed the state object to the props of the component
        const {handleSubmit}=this.props; // ES6 syntax, its same as --> handleSubmit=this.props.handleSubmit
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label="Title" name="title" component={this.renderField} />
                <Field label="Categories" name="categories" component={this.renderField} />
                <Field label="Content" name="content" component={this.renderField} />
                <button className="btn  btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel </Link>
            </form>
        );
    }
}

function validate(values){
    // console.log(values) -> {title:'asdf',categories:'asdf',content:'asdf'}
    const errors={};

    if(!values.title){
        errors.title="Enter a title";
    }

    if(!values.categories){
        errors.title="Enter a categorie";
    }

    if(!values.content){
        errors.title="Enter a content";
    }

    // if errors is empty, the form is fine to submit.
    // if errors has any properties, redux form assumes form is invalid.
    return errors;

}

// the string being passed to the form element has to be unique. PostNewForm shld be unique value.
// reduxform contains two properties form and validate, 
// since our validation function name(validate) is same as validate proeprty of redux form we can use ES6 syntax to have only validate
export default reduxForm({
    validate,
    form: 'PostNewForm'
})(
    connect(null,{createPost})(PostNew)
);