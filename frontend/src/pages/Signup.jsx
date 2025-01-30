import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'

export function Signup ()
{
    return (
        <div className = 'h-screen flex justify-center items-center' >
            <div className = 'flex h-[450px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"SIGNUP"} />
                <InputBox label = {"Enter username/email"} placeholder = {"abc@gmail.com"} />
                <InputBox label = {"Enter Firstname"} placeholder = {"John..."} />
                <InputBox label = {"Enter Lastname"} placeholder = {"Jacobs..."} />
                <InputBox label = {"Enter password"} placeholder = {"abcd..."} />
                <Button label = {"Click Me"} />
            </div>
        </div>
    )
}
