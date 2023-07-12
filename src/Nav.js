import React from 'react';
import Img from './images/shop-logo.ico';
import { FaTruck } from 'react-icons/fa';
import { BsBagCheck } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';
import './Nav.css';
const Nav = () => {
    return (<>
        <div className='free'>

            <div className="icon"><FaTruck /></div>
            <p>FREE Shipping when shopping upto $1000</p>
        </div>
        <div className="main-header">
            <div className="container">
                <div className="logo">
                    <img src={Img} alt="logo" />
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Search your product ....' value='' autoComplete='off' />
                    <button>Search</button>
                </div>
                <div className="icon">
                    <div className="account">
                        <div className="user-icon">
                            <AiOutlineUser />
                        </div>
                        <p>Hello, user</p>
                    </div>
                    <div className="second-icon">
                        <p><AiOutlineHeart /></p>
                        <p><BsBagCheck /></p>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default Nav;