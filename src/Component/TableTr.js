import React from 'react';
let formatter = Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
})
const TableTr = (props) => {
    return (
        <tr>
            <td>{props.year}</td>
            <td>{formatter.format(props.savingsEndOfYear)}</td>
            <td>{formatter.format(props.yearlyInterest)}</td>
            <td>{formatter.format((props.savingsEndOfYear - props.intialSaving) - (props.yearlyContribution * props.year))}</td>
            <td>{formatter.format(props.intialSaving + props.yearlyContribution * props.year)}</td>
        </tr>
    )
}
export default TableTr;