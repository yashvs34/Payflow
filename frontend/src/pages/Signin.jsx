import {Button} from '../components/Button'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'

export function Signin ()
{
    return (
        <div className = 'h-screen flex justify-center items-center' >
            <div className = 'flex h-[400px] flex-col items-center justify-center w-[400px] border border-black shadow-2xl shadow-gray-500 rounded-2xl'>
                <Heading label = {"SIGNIN"} />
                <InputBox label = {"Enter username/email"} placeholder = {"Example : abc@gmail.com"} />
                <InputBox label = {"Enter password"} placeholder = {"abcd..."} />
                <Button label = {"Click Me"} />
            </div>
        </div>
    )
}
