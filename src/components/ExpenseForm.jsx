import { useState } from "react"

const ExpenseForm = (props) =>{
    const {addExpense} = props
    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState()
    const [errors, setErrors] = useState({})
   
    const handlesubmit = (e) =>{
        e.preventDefault()
        let err ={}
        if(title.length<3){
           err.title = 'Title should be atleast 3 characters '
        }
        if(!amount){
            err.amount = 'Enter a valid amount'
         }
        if(Object.keys(err).length>0){
            setErrors({...err})
            return
        }
        addExpense(title,amount)
        setTitle('')
        setAmount('')
        }
    
    const handleTitleChange = (e) =>{
        console.log(e.target.value)
        setTitle(e.target.value)
        setErrors({...errors,title:''})
    }
    const handleAmountChange = (e) =>{
        console.log(e.target.value)
        setAmount(parseInt(e.target.value))
        setErrors({...errors,amount:''})
    }


    return(
        <form onSubmit={handlesubmit} >
        <div className="toadd">
        <input id="titleinput"  placeholder="Title" value={title} onChange={handleTitleChange} />
        {errors.title ? <div className="error">{errors.title}</div>:null}
        <input id="Amountinput" type="number"  placeholder="Amount" value={amount} onChange={handleAmountChange} />
        {errors.amount ? <div className="error" >{errors.amount}</div>:null}
        </div>
        
        <button className="addbutton">Add Expense</button>
        </form>
    )
}


export default ExpenseForm