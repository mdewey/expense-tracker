import React, { FunctionComponent, useEffect, useState } from 'react'
import { IExpenseItem } from '../types/IExpenseItem'

const Total: FunctionComponent<{ expenses: Array<IExpenseItem> }> = ({
  expenses = []
}) => {
  const [total, setTotal] = useState<number>(0)
  useEffect(() => {
    const total = expenses.reduce((acc, item) => (acc += item.amount), 0)
    setTotal(total)
  }, [expenses])
  return (
    <div className="total">
      <h1>${total.toFixed(2)}</h1>
    </div>
  )
}

export default Total
