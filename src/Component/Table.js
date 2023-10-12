import React from 'react';
import TableTr from './TableTr';
import Styled from '../assets/css/Table.module.css';

const Table = (props) => {
    return (
        <table className={Styled.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {(props.data?.length <= 0 || (props.data === null)) && <tr><td colSpan='5' style={{ textAlign: 'center' }}>No Data Found...</td></tr>}
                {props.data?.map((item, index) => (
                    <TableTr key={index} year={item.year} savingsEndOfYear={item.savingsEndOfYear} yearlyInterest={item.yearlyInterest} yearlyContribution={item.yearlyContribution} intialSaving={item.intialSaving} />
                ))}
            </tbody>
        </table>
    )
}
export default Table;