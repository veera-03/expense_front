import { useEffect, useState } from "react"
import  axios from "axios"
import ExpenseForm from "./components/ExpenseForm"
import ExpenseItem from "./components/ExpenseItem"

const App = () =>{

  const [expenses,setExpenses] = useState([
   
  ])

useEffect(() =>{
  axios.get('https://expensetracker-backend-4a21.onrender.com/findentries')
  .then(res => {
    console.log(res)
    setExpenses(res.data)
  })
  .catch(err => console.log(err))

}, [])


  const addExpense = (title,amount) =>{
    const nextId = (expenses[expenses.length-1]?.id || 0)+1
    setExpenses([...expenses, { id:nextId, title:title, amount:amount}])
    axios.post('https://expensetracker-backend-4a21.onrender.com/add-entry', ({ id:nextId,   title: title, amount: amount}))
  }

  const deleteExpense = (id)=>{
    setExpenses(expenses.filter((exp) => exp.id !==id))
  }
   let income =0
   let expense =0
   expenses.forEach((exp)=>{
    if(exp.amount >0){
      income += exp.amount  
    }
    else{
      expense -=exp.amount
    }
   })
   let balance= income-expense

  return(
    <>
   <div>
   <div className="heading" >Expense Tracker</div>
       <div className="balance" >Balance :{balance}</div>
       <div className ="income-expense-container" >
        <div className="income" >
          <span className="title">Income</span>
          <span>{income}</span>
        </div>
        <div className ="block" ></div>
        <div className="expense" >
          <span className="title">Expense</span>
          <span>{expense}</span>
        </div>
       </div>
       <ExpenseForm addExpense={addExpense}/>
       
       </div>
   {expenses.map((expense) =>(
    <ExpenseItem key = {expense.id} title = {expense.title} amount = {expense.amount} id={expense.id} deleteExpense = {deleteExpense}  />
    
      ))}
      
  </>   
  )}

export default App