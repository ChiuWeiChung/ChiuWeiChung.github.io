import React from 'react';
import classes from './NoteForm.module.css';
import { Form, Field } from 'react-final-form';
import NoteField from './NoteField';
import formFields from './formFields';
import { connect } from 'react-redux';
import { submitNote } from '../../../store/actions/note';


const renderFields = (values) => {
    return formFields.map((field) => {
        if ((field.name === "newType" || field.name === "newTypeName") && values.type !== 'others') return null
        return (
            <Field
                key={field.name}
                component={NoteField}
                type={field.type}
                label={field.label}
                name={field.name}
            ></Field>
        );
    });
}

const validator = (values) => {
    const errors = {};
    formFields.forEach((field) => {
        if (!values[field.name]) {
            errors[field.name] = `You must provide ${field.name}`;
        }
    });

    if (values.type !== 'others' && values.type) {
        delete errors.newTypeName;
        delete errors.newType;
    }

    delete errors.img

    return errors;
}


const NoteForm = (props) => {
    const onSubmit = async (values) => {
        const postData = {
            type: values.type === "others" ? values.newType : values.type,
            typeName: values.type === 'others' ? values.newTypeName : null,
            detail: {
                title: values.title,
                description: values.description,
                url: values.url,
                updatedDate: values.updatedDate
            }
        }

        if (values.img) postData.detail.img = values.img;

        // should changed to if (props.token) {...}
        if (props.token) {
            props.submitNote(postData, props.token, props.history)
        }
    };
    return (
        <div className={classes.Form}>
            <h1 >Post The Note!</h1>
            <Form
                onSubmit={onSubmit}
                validate={validator}
                render={({ handleSubmit, form, invalid, values }) => (
                    <form onSubmit={handleSubmit}>
                        {renderFields(values)}
                        <div >
                            <button type="submit" disabled={invalid}>
                                Submit
                            </button>
                        </div>
                        <div className={classes.Preview}>
                            <pre >{JSON.stringify(values, 0, 1)}</pre>
                        </div>

                    </form>
                )}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        token: state.auth.token
    }
}

export default connect(mapStateToProps, { submitNote })(NoteForm)