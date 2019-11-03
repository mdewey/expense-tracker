import { ExpenseType } from './ExpenseTypes'

export interface IExpenseItem {
  type: ExpenseType
  note: string | null
  amount: number
  when?: Date
  id?: number | undefined
}
