import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
// reduxForm is a helper for connecting the form to the reducer (state). 
// Field is used for interacting with the ReduxForm
class PostNew extends Component{

    render(){
        return (
            <form>
                <Field name="title" component={} />
                <Field name="title" component={} />
                <Field name="title" component={} />
                </form>
        );
    }
}

// the string being passed to the form element has to be unique. PostNewForm shld be unique value.
export default reduxForm({
    form:'PostNewForm'
})(PostNew);