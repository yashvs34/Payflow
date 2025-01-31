

export function Button ({label})
{
    return (
        <div className = "p-2 w-[350px] flex justify-center items-center" >
            <button className = "bg-black text-white border rounded-md pr-7 pl-7 transition-transform transform hover:scale-105 w-[200px] h-[30px]" >
                {label}
            </button>
        </div>
    )
}