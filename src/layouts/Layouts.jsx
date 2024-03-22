import Nav from "../components/nav/Nav"
import NewContact from "../pages/newContact/NewContact"
import { Outlet } from "react-router"
import {useSelector} from 'react-redux'



const Layout = () => {
    const form = useSelector((state) => state.users.isNewContactVisible)

    return(
        <>
        <Nav />
        {form &&  <NewContact/>}
        <Outlet></Outlet>
        </>
    )
}

export default  Layout;