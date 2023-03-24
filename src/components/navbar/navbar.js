// Note: Navbar Component...!

import React, { useState } from 'react';
import Link from 'next/link';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBIcon
} from 'mdb-react-ui-kit';
import styles from "../../styles/../styles/Navbar.module.css";

const Navbar = () => {

    // Note: Handeling states here...!
    const [showNav, setShowNav] = useState(false);

    return (
        <>
            <MDBNavbar
                expand='lg'
                className={styles.navBarContainer}
            >
                <MDBContainer fluid>
                    <MDBNavbarBrand className={styles.navHeader}>
                        Next JS
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        type='button'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showNav}>
                        <MDBNavbarNav>
                            <MDBNavbarItem className={styles.navbarItem}>
                                <Link
                                    href='/home'
                                    className={styles.navbarLink}
                                >
                                    home
                                </Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className={styles.navbarItem}>
                                <Link
                                    href='/about'
                                    className={styles.navbarLink}
                                >
                                    about
                                </Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className={styles.navbarItem}>
                                <Link
                                    href='/contact'
                                    className={styles.navbarLink}
                                >
                                    contact
                                </Link>
                            </MDBNavbarItem>

                            <MDBNavbarItem className={styles.navbarItem}>
                                <Link
                                    href='/todo-list'
                                    className={styles.navbarLink}
                                >
                                    todo app
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
};

export default Navbar;