import React, { useEffect } from 'react'
import './App.scss'
import M from 'materialize-css'

enum ExpenseType {
  Meals = 'meals',
  Entertainment = 'entertainment',
  Bills = 'bills',
  Savings = 'savings',
  Coffee = 'coffee'
}
function App() {
  useEffect(() => {
    M.AutoInit()
    M.updateTextFields()
  }, [])
  return (
    <div className="App">
      <h1 className="title">Expense Tracker</h1>

      <main className="summary">
        <div className="summary-item z-depth-4">
          <header>Gems</header>
          <p>82</p>
        </div>
        <div className="summary-item z-depth-4">
          <header>Gems</header>
          <p>82</p>
        </div>
        <div className="summary-item z-depth-4">
          <header>Gems</header>
          <p>82</p>
        </div>

        <div className="summary-item z-depth-4">
          <header>Gems</header>
          <p>82</p>
        </div>
        <div className="summary-item z-depth-4">
          <header>Gems</header>
          <p>82</p>
        </div>
      </main>

      <form className="col s12 z-depth-1">
        <header>
          <h5>add an expense...</h5>
        </header>
        <div className="row">
          <div className="input-field col s6">
            <i className="material-icons prefix">attach_money</i>
            <input id="amount" type="number" />
            <label htmlFor="amount">Amount</label>
          </div>
          <div className="input-field col s6">
            <select>
              <option value="" disabled>
                Choose your option
              </option>
              {Object.keys(ExpenseType).map(key => {
                console.log({ key })
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
            <input id="note" type="text" />
            <label htmlFor="note">Notes</label>
          </div>
        </div>
        <div className="submit-button">
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            add
          </button>
        </div>
      </form>

      <ul className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle">casino</i>
          <div className="line-item-details">
            <main>this is a thing</main>
            <aside>$6.00</aside>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default App
