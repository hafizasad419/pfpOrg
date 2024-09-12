import { Outlet } from 'react-router-dom'
import { Navbar, Footer } from '../'


function Layout() {

    return (
        <>
            <Navbar />
            <div className='bg-white'>
                <Outlet />
            </div>
            <Footer />

        </>
    )
}

export default Layout