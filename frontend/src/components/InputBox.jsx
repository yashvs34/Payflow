
export function InputBox ({label, placeholder, onChange})
{
    return (
        <div className = "w-[300px] flex flex-col justify-center items-center m-1" >
            <label htmlFor = {label} className = "self-start pl-[55px] text-md" >{label}</label>
            <input onChange = {onChange} type = "text" id = {label} placeholder = {placeholder} className = "border-2 border-gray-500 rounded-md text-xs pl-2 pt-1 pb-1 w-[200px]"/>
        </div>
    )
}