import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { SearchBar } from "../components/SearchBar"

export function Dashboard ()
{
    return (
        <div>
            <Appbar label = {"U"} />
            <Balance label = {"10,000"} />
            <SearchBar/>
            <Users/>
        </div>
    )
}