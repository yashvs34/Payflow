import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {BottomWarning} from '../components/BottomWarning'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Signin ()
{
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center' >
            <div className = 'bg-white flex h-[400px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"Signin"} />
                <InputBox onChange={(e) => {
                    setUserName(e.target.value);
                }} label = {"Enter username/email"} placeholder = {"Example : abc@gmail.com"} />
                <InputBox onChange={(e) => {
                    setPassword(e.target.value);
                }} label = {"Enter password"} placeholder = {"abcd..."} />
                <div className='text-red-600 font-semibold text-xs'>{message}</div>
                <Button onClick={async () => {
                    const response = await axios.post('http://localhost:3000/api/v1/user/signin', {
                        userName,
                        password
                    })

                    setMessage(response.data.message);

                    if (response.data.message === "Logged in")
                    {
                        localStorage.setItem("token", "Bearer " + response.data.token);
                        navigate('/dashboard?name='+userName);
                    }
                    else
                    {
                        setMessage(response.data.message);
                    }
                }} label = {"Sign In"} />
                <BottomWarning label = {"Don't have an account?"} buttonText = {"Signup"} to = {"/signup"} />
            </div>
        </div>
    )
}
