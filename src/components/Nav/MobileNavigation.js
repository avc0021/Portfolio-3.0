import { ClassNames } from '@emotion/react'
import NavLinks from './NavLinks'
import './Nav.css';


const MobileNavigation = ({ currentPage, handlePageChange }) => {
    return(
        <nav className="mobile">
        <NavLinks/>
        </nav>
    )
}

export default MobileNavigation