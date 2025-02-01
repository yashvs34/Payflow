import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {SearchBar} from './SearchBar'

export function Users ()
{
    const [users, setUsers] = useState([]);
    const [filter, setfilter] = useState("");

    async function handler ()
    {
        const tusers = await axios.get('http://localhost:3000/api/v1/user/bulk?filter=' + filter)
        setUsers(tusers.data.user);
    }

    useEffect(() => {
        handler();
    }, [filter]);

    return (
        <div>
            <SearchBar setFilter = {setfilter} />
            {users == null ? <></> : users.map((user) => <User user = {user} key = {user._id} />)}
        </div>
    )
}

function User ({user})
{
    return (
        <div className = "w-[400px] h-10 text-sm mx-[100px] flex justify-between items-center border-b border-blue-800 hover:scale-105 duration-200" >
            <div>
                {user.firstName} {user.lastName}
            </div>
            <Link to = {`/sendmoney?id=${user._id}&name=${user.firstName}`} className = 'flex justify-center border border-black rounded-md w-[120px] bg-black text-white cursor-pointer' >
                Send Money
            </Link>
        </div>
    )
}