import React, { FunctionComponent, useEffect, useState } from 'react'
import { IExpenseItem } from '../types/IExpenseItem'
import { ExpenseType } from '../types/ExpenseTypes'
import { SummaryData } from '../types/SummaryData'

const ExpenseSummary: FunctionComponent<{
  expenses: Array<IExpenseItem>
}> = ({ expenses = [] }) => {
  const [data, setData] = useState<SummaryData | null>()
  useEffect(() => {
    const data = expenses.reduce<SummaryData>(
      (totals, item) => {
        if (totals[item.type]) {
          totals[item.type] += item.amount
        } else {
          totals[item.type] = item.amount
        }
        return totals
      },
      {} as SummaryData
    )
    console.log({ data })
    setData({ ...data })
  }, [expenses])

  if (!data || !Object.keys(data).length) {
    return (
      <main className="summary">
        <h3>No Expenses Yet...</h3>
      </main>
    )
  } else {
    return (
      <main className="summary">
        {Object.keys(data).map(category => {
          return (
            <div className={`summary-item z-depth-4 `} key={category}>
              <header className={`${category}`}>{category}</header>
              <p>${data[category as ExpenseType].toFixed(2)}</p>
            </div>
          )
        })}
      </main>
    )
  }
}

export default ExpenseSummary
