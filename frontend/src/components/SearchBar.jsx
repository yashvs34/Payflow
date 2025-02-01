
export function SearchBar ({setFilter})
{
    return (
        <div>
            <input onChange={(e) => {
                setFilter(e.target.value);
            }} type="text" placeholder="Search" className = "w-[600px] mx-10 p-1 font-thin text-sm border-[2px] border-gray-400 rounded-md" />
        </div>
    )
}