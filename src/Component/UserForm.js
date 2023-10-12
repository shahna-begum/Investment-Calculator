import React, { useState } from "react";
import InputField from './InputField';
import Styled from '../assets/css/InvestCalcForm.module.css'

const UserForm = ({ calculateHandler }) => {
    const initialValue = {
        'current-savings': '',
        'yearly-contribution': '',
        'expected-return': '',
        duration: '',
    }
    const [inputValue, setInputValue] = useState(initialValue);

    const sumbitFormHandler = (event) => {
        event.preventDefault();
        calculateHandler(inputValue);
    }
    const resetFormHandler = (event) => {
        event.preventDefault();
        setInputValue(initialValue);
    }
    const changeHandler = (event) => {
        let dataId = event.target.id;
        let dataValue = event.target.value;
        setInputValue(prevData => {
            return { ...prevData, [dataId]: +dataValue, }
        });
    }
    return (
        <form className={Styled.form} onSubmit={sumbitFormHandler}>
            <div className={Styled['input-group']}>
                <InputField htmlFor="current-savings" labelText='Current Savings ($)' type="number" id="current-savings" value={inputValue['current-savings']} {...{ changeHandler }} />
                <InputField htmlFor="yearly-contribution" labelText='Yearly Savings ($)' type="number" id="yearly-contribution" value={inputValue['yearly-contribution']} {...{ changeHandler }} />
            </div>
            <div className={Styled['input-group']}>
                <InputField htmlFor="expected-return" labelText='Expected Interest (%, per year)' type="number" id="expected-return" value={inputValue['expected-return']} {...{ changeHandler }} />
                <InputField htmlFor="duration" labelText='Investment Duration (years)' type="number" id="duration" value={inputValue['duration']} {...{ changeHandler }} />
            </div>
            <p className={Styled.actions}>
                <button onClick={resetFormHandler} type="reset" className={Styled.buttonAlt}>
                    Reset
                </button>
                <button type="submit" className={Styled.button}>
                    Calculate
                </button>
            </p>
        </form>
    )
}
export default UserForm;