import './Header.css';
import { eastJRLogo } from '../../assets/items';

export default function Header({ express, commuter, clean }) {

    return (
        <header>
            <img src={eastJRLogo} alt="JR_Logo" id="logo" />
            <nav className='btn-container'>
                <button onClick={() => express("express")}>Special Express</button>
                <button onClick={() => commuter("commuter")}>Commuter Rail</button>
                <button onClick={clean}>Clean Filter</button>
            </nav>
        </header>
    );
};