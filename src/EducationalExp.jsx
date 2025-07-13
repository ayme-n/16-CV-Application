import { useState } from "react"
import { Input } from "./Input"

export function EducationalExp(){

    const [edit,setEdit] = useState(true)
    const [school,Setschool] = useState("")
    const [speciality,Setspeciality ] = useState("")
    const [date,Setdate] = useState("")


    return(

        (edit==true) ? (
            <div className="section">
            <Input name="School" type="text" value={school} handleChange={Setschool}></Input>
            <Input name="Speciality" type="text" value={speciality} handleChange={Setspeciality}></Input>
            <Input name="Date" type="date" value={date} handleChange={Setdate}></Input>
            <button onClick={()=>{setEdit(false)}}>Submit</button>
        </div>
        )
        :
        (
            <div className="section">

                <div className="input_div"><h3>School</h3><p>{school}</p></div>
                <div className="input_div"><h3>Speciality</h3><p>{speciality}</p></div>
                <div className="input_div"><h3>Date</h3><p>{date}</p></div>

                <button onClick={()=>{setEdit(true)}}>Edit</button>
            </div>
        )
    )
}