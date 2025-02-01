import {useSearchParams} from "react-router-dom"

export function Appbar ()
{
    const [queryParams] = useSearchParams(); 

    return (
        <div className = "font-semibold flex justify-between items-center h-[50px] border border-b-4 border-gray-400" >
            <div className = "pl-4" >
                Payment App
            </div>
            <div className = "flex pr-4 w-[120px] justify-around" >
                <div>
                    Hello
                </div>
                <div className = "w-[30px] border border-blue-700 rounded-full flex justify-center" >
                    {queryParams.get("name")[0].toUpperCase()}
                </div>
            </div>
        </div>
    )
}