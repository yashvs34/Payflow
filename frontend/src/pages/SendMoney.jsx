import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {SubHeading} from '../components/SubHeading'
import {FriendLogo} from '../components/FriendLogo'
import {Button} from '../components/Button'

export function SendMoney ({label})
{
    return (
        <div className = 'h-screen flex justify-center items-center'>
            <div className = 'h-[300px] flex flex-col justify-center items-center border border-black shadow-2xl shadow-gray-500 rounded-2xl' >
                <Heading label = {"Send Money"} />
                <div className = 'w-[200px] flex justify-start p-2' >
                    <FriendLogo label = {"D"} /> {/* Add first char of name*/}
                    <SubHeading label = {label} />
                </div>
                <InputBox label = {"Amount(in Rs.)"} placeholder = {"Enter amount to send"} />
                <Button label = {"Initiate Transfer"} />
            </div>
        </div>
    )
}