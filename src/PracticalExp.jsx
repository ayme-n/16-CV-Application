import { useState } from "react"
import { Input } from "./Input"


export function PracticalExp(){

    const [edit,setEdit] = useState(true)

    const [dateFrom,SetdateFrom] = useState("")
    const [dateTo,SetdateTo] = useState("")
    const [main,Setmain] = useState("")
    const [position,Setposition] = useState("")
    const [company,Setcompany] = useState("")


    return(

       edit==true ? (
         <div className="section">
            <Input name="Company" type="text" value={company} handleChange={Setcompany}></Input>
            <Input name="Position" type="text" value={position} handleChange={Setposition}></Input>
            <Input name="Main Role" type="text" value={main} handleChange={Setmain}></Input>
            <Input name="From" type="date" value={dateFrom} handleChange={SetdateFrom}></Input>
            <Input name="To" type="date" value={dateTo} handleChange={SetdateTo}></Input>
            <button onClick={()=>{setEdit(false)}}>Submit</button>
        </div>
       )
       :
       ( <div className="section">

                <div className="input_div"><h3>Company</h3><p>{company}</p></div>
                <div className="input_div"><h3>Position</h3><p>{position}</p></div>
                <div className="input_div"><h3>Main role</h3><p>{main}</p></div>
                <div className="input_div"><h3>From</h3><p>{dateFrom}</p></div>
                <div className="input_div"><h3>To</h3><p>{dateTo}</p></div>

            <button onClick={()=>{setEdit(true)}}>Edit</button>
        </div>)

    )


}