import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {BottomWarning} from '../components/BottomWarning'

export function Signup ()
{
    return (
        <div className = 'bg-gray-400 h-screen flex justify-center items-center' >
            <div className = 'bg-white flex h-[450px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"Signup"} />
                <InputBox label = {"Enter username/email"} placeholder = {"abc@gmail.com"} />
                <InputBox label = {"Enter Firstname"} placeholder = {"John..."} />
                <InputBox label = {"Enter Lastname"} placeholder = {"Jacobs..."} />
                <InputBox label = {"Enter password"} placeholder = {"abcd..."} />
                <Button label = {"Click Me"} />
                <BottomWarning label = {"Already have an account?"} buttonText = {"Signin"} to = {"/signin"} />
            </div>
        </div>
    )
}
