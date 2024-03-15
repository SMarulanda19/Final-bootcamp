import Nav from "../components/nav/Nav"
import NewContact from "../pages/newContact/NewContact"
import { Outlet } from "react-router"
import {useState} from 'react'



const Layout = () => {
    const [isNewContactVisible, setisNewContactVisible] = useState(false);

    const isvisible = () => { 
        setisNewContactVisible(!isNewContactVisible)
    }


    return(
        <>
        <Nav  onClick = {isvisible}/>
        {isNewContactVisible &&  <NewContact></NewContact>}
        <Outlet></Outlet>
        </>
    )
}

export default  Layout;