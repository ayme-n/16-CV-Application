

export function Input({name,type,value,handleChange}){

    return(
        <div className="input_div">
            <label htmlFor="">{name}</label>
            <input type={type} value={value} onChange={(event)=>{handleChange(event.target.value)}}/>
        </div>

    )


}