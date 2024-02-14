
const  ExpenseItem = (props) =>{
    const{ id, title, amount,  deleteExpense} = props

    const handleDelete = () =>{
        deleteExpense(id)
    }
    return(
    
        <div className = "expense-item">
      <div className ={`Expense-item ${amount > 0 ? 'positive': 'negative'}`} >
               <div className ="Expense-title">{title}</div>
        <div className ="Expense-amount">{amount}</div>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
        
        </div>
        
        
    )
}
export default ExpenseItem