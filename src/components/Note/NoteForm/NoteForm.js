import React, { useState, useEffect } from 'react';
import classes from './NoteForm.module.css';
import { Form, Field } from 'react-final-form';
import NoteField from './NoteField';
import formFields from './formFields';
import { connect } from 'react-redux';
import { submitNote, submitEditNote } from '../../../store/actions/note';

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
    const [editValue, setEditValue] = useState(null);
    const [idObj, setIDObject] = useState(null);
    useEffect(() => {
        const searchParams = new URLSearchParams(props.location.search);
        let obj = {}
        for (let key of searchParams) {
            obj[key[0]] = key[1]
        };
        if (Object.keys(obj).length === 2) {
            setIDObject(obj);
            const choosedTheme = props.themes.find(theme => {
                return theme._id === obj.themeId;
            });
            const choosedNote = choosedTheme.noteCollection.find(note => {
                return note._id === obj.noteId;
            })
            setEditValue({ type: choosedTheme.type, ...choosedNote, updatedDate: choosedNote.updatedDate.replace('T00:00:00.000Z', '') });
        }
    }, [props.location.search,props.themes])

    const renderFields = (values) => {
        return formFields.map((field) => {
            if ((field.name === "newType" || field.name === "newTypeName") && values.type !== 'others') return null
            return (
                <Field
                    key={field.name}
                    component={NoteField}
                    initialValue={idObj ? editValue[field.name] : null}
                    type={field.type}
                    label={field.label}
                    name={field.name}
                ></Field>
            );
        });
    }

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
        if (props.token) {
            if (!idObj) {
                props.submitNote(postData, props.token, props.history)
            } else {
                props.submitEditNote(postData, props.token, props.history, idObj)

            }
        }
    };
    return (
        <div className={[classes.Form, 'Main-Container'].join(' ')}>
            <h1 >{idObj ? 'Edit' : 'Post'} The Note!</h1>
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
        token: state.auth.token,
        themes: state.notes.themes,
    }
}

export default connect(mapStateToProps, { submitNote, submitEditNote })(NoteForm)