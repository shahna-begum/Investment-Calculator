import React from 'react';
import PropType from 'prop-types';
const InputField = ({ type, id, labelText, htmlFor, changeHandler, value }) => {
    return (
        <p>
            <label htmlFor={htmlFor}>{labelText}</label>
            <input type={type} id={id} onChange={changeHandler} value={value} />
        </p>
    )
};
export default InputField;
InputField.PropType = {
    type: PropType.string.isRequired,
    id: PropType.string,
    labelText: PropType.string.isRequired,
    htmlFor: PropType.string,
    onChange: PropType.func,
    value: PropType.number,
};