import { useState } from "react"
import { Input } from "./Input"



export function GeneralInfos(){


    const [edit,setEdit] = useState(true)
    const [name,Setname] = useState("")
    const [email,Setemail] = useState("")
    const [phone,Setphone] = useState("")

    return(

        (edit==true) ? (
            <div className="section">
                <Input name="Name" type="text" value={name} handleChange={Setname}></Input>
                <Input name="Email" type="email" value={email} handleChange={Setemail}></Input>
                <Input name="Phone" type="tel" value={phone} handleChange={Setphone}></Input>
                <button onClick={()=>{setEdit(false)}}>Submit</button>
            </div>
        )
        :
        (
            <div className="section">
                
                <div className="input_div"><h3>Name</h3><p>{name}</p></div>
                <div className="input_div"><h3>Email</h3><p>{email}</p></div>
                <div className="input_div"><h3>Phone</h3><p>{phone}</p></div>

                <button onClick={()=>{setEdit(true)}}>Edit</button>
            </div>
        )
    )
}