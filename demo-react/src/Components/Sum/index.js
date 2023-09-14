import { useState } from "react";

function Sum(){
    const [soA, setSoA] = useState(0) // tinh so A

    function handleAChange(e){
        setSoA(e.target.value)
    }

    const [soB, setSoB] = useState(0) // tinh so B

    function handleBChange(e){
        setSoB(e.target.value)
    }

    const [totalAB, setTotal] = useState(0) // tinh so AB

    function total(e){
        setTotal(Number(soA)+Number(soB)) // dang o chuoi string chuyen qua number
    }


    return(
        <div>
            <input type='number' onChange = {handleAChange} />
            <input type='number' onChange = {handleBChange} />
            <button onClick = {total}> Tinh tong </button>
            <p>{soA}+{soB}={totalAB}</p>
        </div>
    )
}

export default Sum