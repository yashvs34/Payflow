import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {SubHeading} from '../components/SubHeading'
import {FriendLogo} from '../components/FriendLogo'
import {Button} from '../components/Button'
import { Link } from 'react-router-dom'

export function SendMoney ({label})
{
    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center'>
            <div className = 'bg-white h-[300px] flex flex-col justify-center items-center border border-black shadow-2xl shadow-gray-500 rounded-2xl' >
                <Heading label = {"Send Money"} />
                <div className = 'w-[200px] flex justify-start p-2' >
                    <FriendLogo label = {"D"} /> {/* Add first char of name*/}
                    <SubHeading label = {"label"} />
                </div>
                <InputBox label = {"Amount(in Rs.)"} placeholder = {"Enter amount to send"} />
                <div className='h-[100px] flex flex-col justify-center items-center'>
                    <Button label = {"Initiate Transfer"} />
                    <Link to = {'/Dashboard'} className='text-white bg-red-600 border border-red-600 rounded-md w-[150px] flex justify-center items-center hover:scale-105 duration-200'>Cancel</Link>
                </div>
            </div>
        </div>
    )
}