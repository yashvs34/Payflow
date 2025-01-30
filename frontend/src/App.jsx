import { Route, Routes, BrowserRouter } from "react-router-dom"
import {Signin} from './pages/Signin' 
import {Signup} from './pages/Signup' 
// import {Dashboard} from './pages/Dashboard' 
import {SendMoney} from './pages/SendMoney'

function App() {

  return (
    <>
    <Signup />
      {/* <BrowserRouter>
        <Routes>
          <Route path = "/signin" element = {<Signin/>} ></Route>
          <Route path = "/signup" element = {<Signup/>} ></Route>
          <Route path = "/dashboard" element = {<Dashboard/>} ></Route>
          <Route path = "/SendMoney" element = {<SendMoney/>} ></Route>
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App
