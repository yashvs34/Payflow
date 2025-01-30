
export function InputBox ({label, placeholder})
{
    return (
        <div className = "w-[350px] flex flex-col justify-center items-center m-1" >
            <label htmlFor = {label} className = "text-md" >{label}</label>
            <input type = "text" id = {label} placeholder = {placeholder} className = "border-2 border-gray-500 rounded-md text-xs pl-2 pt-1 pb-1 w-[200px]"/>
        </div>
    )
}