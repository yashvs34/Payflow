import { useState } from 'react'
import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {BottomWarning} from '../components/BottomWarning'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export function Signup ()
{
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center' >
            <div className = 'bg-white flex h-[450px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"Signup"} />
                <InputBox onChange = {(e) => {
                    setUserName(e.target.value);
                }} label = {"Enter username/email"} placeholder = {"abc@gmail.com"} />
                <InputBox onChange = {(e) => {
                    setFirstName(e.target.value);
                }} label = {"Enter Firstname"} placeholder = {"John..."} />
                <InputBox onChange = {(e) => {
                    setLastName(e.target.value);
                }} label = {"Enter Lastname"} placeholder = {"Jacobs..."} />
                <InputBox onChange = {(e) => {
                    setPassword(e.target.value);
                }} label = {"Enter password"} placeholder = {"abcd..."} />
                <div className='text-red-600 font-semibold text-xs'>{message}</div>
                <Button onClick={async () => {
                    const response = await axios.post('http://localhost:3000/api/v1/user/signup', {
                        userName,
                        firstName,
                        lastName,
                        password
                    });

                    setMessage(response.data.message);

                    if (response.data.message === "User created successfully")
                    {
                        navigate('/signin');
                    }
                }} label = {"Signup"} />
                <BottomWarning label = {"Already have an account?"} buttonText = {"Signin"} to = {"/signin"} />
            </div>
        </div>
    )
}
