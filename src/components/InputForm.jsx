import { useState } from "react";
import "./InputForm.css"

function InputForm({fetchPhotos}) {

    const [value, setValue] = useState("")

    return(
        <div>
            <input className="userInput" type="text" value={value} placeholder="Input a photo name" onChange={(e) => setValue(e.target.value)}/>
            <button className="searchButton" onClick={() => {
                fetchPhotos(value)
                setValue('')
            }}>Search</button>
        </div>
    )
}


export default InputForm;