import { ExpenseType } from './ExpenseTypes'

export type SummaryData = { [key in ExpenseType]: number }
