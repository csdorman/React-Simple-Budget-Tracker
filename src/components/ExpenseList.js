import React, {useContext, useEffect, useState} from 'react'
import { AppContext } from '../context/AppContext'
import ExpenseItem from './ExpenseItem'

const ExpenseList = () => {
    const { expenses } = useContext(AppContext)
    const [filteredExpenses, setFilteredExpenses] = useState(expenses || [])

    useEffect(() => {
        setFilteredExpenses(expenses)
    }, [expenses])

    const handleChange = (event) => {
        const searchResults = expenses.filter((filteredExpense) =>
            filteredExpense.name.toLowerCase().includes(event.target.value)
            )
            setFilteredExpenses(searchResults)
    }

    return (
        <>
            <input
                type='text'
                class='form-control mb-2 mr-sm-2'
                placeholder='Search your expenses...'
                onChange={handleChange}>

            </input>
            <ul className='list-group'>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
                ))}
            </ul>
        </>
    )
}

export default ExpenseList