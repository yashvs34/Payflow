import axios from "axios";
import { useState, useEffect } from "react";

export function Balance ()
{
    const [balance, setBalance] = useState(0);

    async function handler ()
    {
        const respone = await axios.get('http://localhost:3000/api/v1/account/balance',{
            headers : {authorization : localStorage.getItem("token")}
        });
        
        setBalance(respone.data.balance);
    }

    useEffect(() => {
        handler();
    }, [balance]);

    return (
        <div className ="w-[300px] h-[50px] px-[40px] my-2 flex items-center justify-between" >
            <div className = "font-bold" >
                Your Balance
            </div>
            <div className = "font-semibold">
                Rs. {balance}
            </div>
        </div>
    )
}