import { ClassNames } from '@emotion/react'
import NavLinks from './NavLinks'
import './Nav.css';


const MobileNavigation = () => {
    return(
        <nav className="mobile">
        <NavLinks/>
        </nav>
    )
}

export default MobileNavigation