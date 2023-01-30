import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [calculationsHistory, setCalculationsHistory] = useState([]);

  const [principalAmount, setPrincipalAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0.0);
  const [months, setMonths] = useState(0);

  const [emi, setEmi] = useState(0);

  const [installments, setInstallments] = useState([]);

  function calculateMonthlyInterest(principal, interestRate, months, emi) {
    //TODO: EMI
    // Numerator: 1.64204869
    // Denominator: .64204869
    // result = N/D = 2.55751428
    // EMI = result * monthly interest

    const emiDetails = [];

    let interest = interestRate * principal;
    let principalPaid = 0;
    let balance = principal;
    for (let installment = 1; installment <= months; installment++) {
      principalPaid = Math.floor(emi - interest);
      balance = balance - principalPaid;
      if (principal !== 0) {
        emiDetails.push({
          principalPaid,
          interest: Math.floor(interest),
          emi,
          balance: balance,
        });
      }
      interest = interestRate * balance;
      principal = principal - emi;
    }

    return emiDetails;
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const emi = (
      (principalAmount * interestRate * Math.pow(1 + interestRate, months)) /
      (Math.pow(1 + interestRate, months) - 1)
    ).toFixed(0);
    setEmi(emi);

    console.log("Principal: ", principalAmount);
    console.log("Interest: ", interestRate);
    console.log("Months: ", months);
    console.log("First EMI: ", interestRate * principalAmount);

    setInstallments(
      calculateMonthlyInterest(principalAmount, interestRate, months, emi)
    );

    console.log(
      "Installments:",
      calculateMonthlyInterest(principalAmount, interestRate, months, emi)
    );

    setCalculationsHistory((prev) => [
      ...prev,
      calculateMonthlyInterest(principalAmount, interestRate, months, emi),
    ]);
    localStorage.setItem(
      "Calculations_History",
      JSON.stringify(calculationsHistory)
    );
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div className="form-inputs">
          <div className="inputs">
            <label htmlFor="">Principal Amount</label>
            <input
              type="number"
              name=""
              id=""
              min={0}
              step="1"
              onChange={(e) => setPrincipalAmount(e.target.value)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Rate of Interest</label>
            <input
              type=""
              name=""
              id=""
              min={0}
              step="0.01"
              onChange={(e) => setInterestRate(e.target.value / 1200)}
            />
          </div>
          <div className="inputs">
            <label htmlFor="">Tenure in Months</label>
            <input
              type="number"
              name=""
              id=""
              min={0}
              step="1"
              onChange={(e) => setMonths(e.target.value)}
            />
          </div>
        </div>

        <button className="btn-calculate" type="submit">
          Calculate
        </button>
      </form>
      {emi ? <div>EMI: {emi}</div> : ""}
      <table className="amortization-data">
        <thead>
          <tr>
            <th>Installment</th>
            <th>Principal Paid</th>
            <th>Interest Charged</th>
            <th>Total Payment</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {installments.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{`₹${value.principalPaid}`}</td>
                <td>{`₹${value.interest}`}</td>
                <td>{`₹${value.emi}`}</td>
                <td>{`₹${value.balance}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Calculator;
