import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {BottomWarning} from '../components/BottomWarning'

export function Signin ()
{
    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center' >
            <div className = 'bg-white flex h-[400px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"Signin"} />
                <InputBox label = {"Enter username/email"} placeholder = {"Example : abc@gmail.com"} />
                <InputBox label = {"Enter password"} placeholder = {"abcd..."} />
                <Button label = {"Click Me"} />
                <BottomWarning label = {"Don't have an account?"} buttonText = {"Signup"} to = {"/signup"} />
            </div>
        </div>
    )
}
