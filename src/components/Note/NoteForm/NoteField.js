import React from "react";
import Aux from "../../../hoc/Auxiliary";
import { connect } from 'react-redux';

const checkInput = (input, themes) => {
    switch (input.type) {
        case ('select'):
            return (
                <Aux>
                    <select  {...input}>
                        <option />
                        {themes.map(theme => {
                            return (
                                <option value={theme.type}>{theme.name}</option>
                            )
                        })}
                        <option value="others">其他</option>
                    </select>
                </Aux>

            )
        case ('textarea'):
            return <textarea {...input} rows="5" cols="30" style={{ marginBottom: "5px" }} />;
        default:
            return <input {...input} style={{ marginBottom: "5px" }} />;

    }
}
const noteField = (props) => {
    return (
        <div >
            <label>{props.label}</label>
            {checkInput(props.input, props.themes)}
            <div style={{ marginBottom: "5px", color: "orangered" }}>
                {props.meta.touched && props.meta.error}
            </div>
        </div>
    );
};



const mapStateToProps = (state) => {
    return {
        themes: state.notes.themes
    }
}

export default connect(mapStateToProps)(noteField);

