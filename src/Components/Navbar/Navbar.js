import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {MenuItems} from './MenuItems';
import {FaHome, FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import './Navbar.css';
import {Button} from '../Button';


export default class Navbar extends Component {

    state = {clicked : true};

    handleClick = ()=>{
         this.setState ({clicked: !this.state.clicked})
     }

    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Salve <span></span><i><FaHome /></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    {
                        this.state.clicked ? <i><AiOutlineClose></AiOutlineClose></i> :<i><FaBars></FaBars></i> 
                    }
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} onClick={this.handleClick}>
                    {MenuItems.map((item, index)=>{
                        return(
                            <li key={index}><h3 className={item.cName}>
                                <Link to={item.url} style={{color: "white"}}>{item.title}
                                </Link>
                                </h3>
                            </li>
                        )
                    })}
                </ul>
                <Button>
                    <Link to="/signup" style={{color: "white"}}>Sign Up</Link>
                </Button>
            </nav>
        )
    }
}
