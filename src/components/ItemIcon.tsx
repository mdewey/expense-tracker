import React, { FunctionComponent } from 'react'
import { ExpenseType } from '../types/ExpenseTypes'

const ItemIcon: FunctionComponent<{ et: ExpenseType }> = ({ et }) => {
  console.log(et)
  let icon = 'help_outline'
  switch (et) {
    case ExpenseType.Bills:
      icon = 'account_balance'
      break
    case ExpenseType.Entertainment:
      icon = 'golf_course'
      break
    case ExpenseType.Coffee:
      icon = 'free_breakfast'
      break
    case ExpenseType.Savings:
      icon = 'local_atm'
      break
    case ExpenseType.Food:
      icon = 'local_dining'
      break
  }

  return <i className={`material-icons circle ${et}`}>{icon}</i>
}

export default ItemIcon
