import React, { useEffect, useState } from 'react'
import './App.scss'
import M from 'materialize-css'
import { ExpenseType } from './types/ExpenseTypes'
import { IExpenseItem } from './types/IExpenseItem'
import ExpenseSummary from './components/ExpenseSummary'
import ExpenseList from './components/ExpenseList'

function App() {
  const [selectedType, setSelectedType] = useState<ExpenseType>(
    ExpenseType.Food
  )
  const [textAmount, setTextAmount] = useState<string>('')
  const [newAmount, setNewAmount] = useState<number>()
  const [newNote, setNewNote] = useState<string>('')

  const [expenses, setExpenses] = useState<Array<IExpenseItem>>([])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setExpenses(prev => {
      const expense: IExpenseItem = {
        amount: newAmount || 0,
        note: newNote || selectedType,
        type: selectedType,
        when: new Date()
      }
      return [...prev, expense]
    })
  }

  useEffect(() => {
    M.AutoInit()
    M.updateTextFields()
  }, [])

  return (
    <div className="App">
      <h1 className="title">Expense Tracker</h1>
      <ExpenseSummary expenses={expenses} />
      <form className="col s12 z-depth-1" onSubmit={e => handleSubmit(e)}>
        <header>
          <h5>add an expense...</h5>
        </header>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">attach_money</i>
            <input
              id="amount"
              type="number"
              placeholder="0.00"
              value={textAmount}
              step="0.01"
              onBlur={e => setNewAmount(parseFloat(e.target.value))}
              onChange={e => setTextAmount(e.target.value)}
            />
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="input-field col s6">
            <select
              value={selectedType as ExpenseType}
              onChange={e => setSelectedType(e.target.value as ExpenseType)}
            >
              {Object.keys(ExpenseType).map(key => {
                return (
                  <option key={key} value={key}>
                    {key}
                  </option>
                )
              })}
            </select>
            <label>Materialize Select</label>
          </div>
          <div className="input-field col s12">
            <input
              id="note"
              type="text"
              value={newNote}
              onChange={e => setNewNote(e.target.value)}
            />
            <label htmlFor="note">Notes</label>
          </div>
        </div>
        <div className="submit-button">
          <button className="btn">add</button>
        </div>
      </form>
      <ExpenseList expenses={expenses} />
    </div>
  )
}

export default App
