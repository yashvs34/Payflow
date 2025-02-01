import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {SubHeading} from '../components/SubHeading'
import {FriendLogo} from '../components/FriendLogo'
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export function SendMoney ()
{
    const [queryParams] = useSearchParams();
    const name = queryParams.get("name");
    const id = queryParams.get("id");
    const [amount, setAmount] = useState(0);
    const [message, setMessage] = useState("");

    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center'>
            <div className = 'bg-white h-[300px] flex flex-col justify-center items-center border border-black shadow-2xl shadow-gray-500 rounded-2xl' >
                <Heading label = {"Send Money"} />
                <div className = 'w-[200px] flex p-2' >
                    <FriendLogo label = {name[0].toUpperCase()} />
                    <SubHeading label = {name} />
                </div>
                <InputBox label = {"Amount(in Rs.)"} placeholder = {"Enter amount to send"} />
                <div className='text-red-600 font-semibold text-xs'>{message}</div>
                <div className='h-[100px] flex flex-col justify-center items-center'>
                    <button onClick={async () => {
                        const response = await axios.post('http://localhost:3000/api/v1/account/transfer', {
                            to: id,
                            amount : parseInt(amount)
                        }, {
                            Authorization : localStorage.getItem("token")
                        })
    
                        setMessage(response.data.message);
                    }} className = "bg-black text-white border rounded-md pr-7 pl-7 transition-transform transform hover:scale-105 w-[200px] h-[30px]" >
                        {"Initiate Transfer"}
                    </button>
                    <Link to = {'/Dashboard'} className='text-white bg-red-600 border border-red-600 rounded-md w-[150px] flex justify-center items-center hover:scale-105 duration-200'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}