import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faAngleDown, faBars, faHeart, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons/faBagShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, NavLink } from 'react-router-dom'
import { categories } from '../data/categories'
import { useSelector } from 'react-redux'
import SearchModal from '../Components/SearchModal'
import { useState } from 'react'

export default function Header() {
    const [showSearchModal, setShowSearchModal] = useState(false);
    const cart = useSelector(state => state.cart);
    const wishlistCount = useSelector(state => state.wishlist.length);
    const totalCartItems = cart.reduce((acc, item) => acc + item.quantity, 0); 
    return (
        <header className='header-section'>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container">
                    <div className='row w-100 align-items-center justify-content-between'>
                        <div className='col-lg-4 col-2'>
                            <div className="icon bar-icon navbar-toggler" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <a className="navbar-brand" href="/">AB Shopee</a>
                                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">

                                    <ul className="navbar-nav pe-3">
                                        {categories.map((cat) => {
                                            if (cat.subcategories) {
                                                // Dropdown structure for Clothes
                                                return (
                                                    <li key={cat.id} className="nav-item hover-dropdown" role="button">
                                                        <span className="nav-link link-effect d-flex align-items-center gap-2" aria-expanded="false">
                                                            <span data-text={cat.name} className="text-change">{cat.name}</span>
                                                            <FontAwesomeIcon icon={faAngleDown} className='down-arrow' />
                                                        </span>
                                                        <ul className="dropdown-menu">
                                                            {cat.subcategories.map(sub => (
                                                                <li key={sub.id}>
                                                                    <NavLink className="dropdown-item" to={sub.url}>
                                                                        <span data-text={sub.name} className="text-change">{sub.name}</span>
                                                                    </NavLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            }

                                            return (
                                                <li key={cat.id} className={`nav-item ${cat.name === 'Home' ? 'active' : 'link-effect'}`}>
                                                    <NavLink className="nav-link link-effect" to={cat.url}>
                                                        <span data-text={cat.name} className="text-change text-uppercase">{cat.name}</span>
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>


                                </div>
                            </div>
                        </div>
                        <div className='col-lg-5 d-flex justify-content-center col-5'>
                            <a className="navbar-brand" href="/">AB Shopee</a>
                        </div>
                        <div className='col-lg-3 d-flex align-items-center justify-content-end gap-sm-4 gap-3 col-3'>
                            <Link className="nav-link icon" to="#" onClick={() => setShowSearchModal(true)}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </Link>

                            <SearchModal
                                show={showSearchModal}
                                handleClose={() => setShowSearchModal(false)}
                            />
                            <NavLink className="nav-link icon position-relative" to="/cart"><FontAwesomeIcon icon={faBagShopping} />
                                {totalCartItems > 0 && (
                                    <span className="badge position-absolute top-0 start-100">
                                        {totalCartItems}
                                    </span>
                                )}
                            </NavLink>
                            <NavLink className="nav-link icon  position-relative" to="/wishlist"><FontAwesomeIcon icon={faHeart} />
                                {wishlistCount > 0 && (
                                    <span className="badge position-absolute top-0 start-100">
                                        {wishlistCount}
                                    </span>
                                )}
                            </NavLink>
                            <NavLink className="nav-link icon" to="/login" ><FontAwesomeIcon icon={faUser} /></NavLink>
                        </div>
                    </div>


                </div>
            </nav>
        </header>
    )
}
