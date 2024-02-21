import './Header.css';
import { eastJRLogo, lupa } from '../../assets/items';

export default function Header({ express, commuter, clean, typedText, handleTextFilter }) {



    return (
        <header>
            <div className='h-c'>
            <img src={eastJRLogo} alt="JR_Logo" id="logo" />
            <div className='search-container'>
                <img src={lupa} alt="lupa" />
                <input
                    type="text"
                    placeholder="Search a train"
                    value={typedText}
                    onChange={handleTextFilter}
                />
            </div>
            <nav className='btn-container'>
                <button onClick={() => express("express")}>Special Express</button>
                <button onClick={() => commuter("commuter")}>Commuter Rail</button>
                <button onClick={clean}>Clean Filter</button>
            </nav>
            </div>
            
        </header>
    );
};