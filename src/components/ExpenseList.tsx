import React, { FunctionComponent } from 'react'
import { IExpenseItem } from '../types/IExpenseItem'
import ItemIcon from './ItemIcon'

const ExpenseList: FunctionComponent<{ expenses: Array<IExpenseItem> }> = ({
  expenses = []
}) => {
  return (
    <ul className="collection">
      {expenses.map((expense, i) => {
        return (
          <li className="collection-item avatar" key={i}>
            <ItemIcon et={expense.type} />
            <div className="line-item-details">
              <main>{expense.note}</main>
              <time>
                {expense.when ? (
                  <>
                    {expense.when.toDateString()} @{' '}
                    {expense.when.toLocaleTimeString()}
                  </>
                ) : (
                  <>no time provideds</>
                )}
              </time>
              <aside>${expense.amount.toFixed(2)}</aside>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default ExpenseList
