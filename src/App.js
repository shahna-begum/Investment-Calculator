import React, { useState } from 'react';
import Header from './Component/Header';
import Table from './Component/Table';
import UserForm from './Component/UserForm';

function App() {
  const [data, setData] = useState(null);
  const calculateHandler = (userInput) => {
    const yearlyData = [];
    let intialSaving = +userInput['current-savings'];
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        intialSaving: intialSaving,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setData(yearlyData);
  };
  return (
    <div>
      <Header />
      <UserForm  {...{ calculateHandler }} />
      <Table {...{ data }} />
    </div>
  );
}

export default App;
