import './Header.css';
import { eastJRLogo, lupa, expressIcon, commuterIcon } from '../../assets/items';

export default function Header({ express, commuter, clean, typedText, handleTextFilter }) {



    return (
        <header>
            <div className='header-container'>
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
                    <button onClick={() => express("express")}>Express <img className='buttonImage' src={expressIcon} alt="SpEXP"/></button>
                    <button onClick={() => commuter("commuter")}>Commuter<img className='buttonImage' src={commuterIcon} alt="Commu"/></button>
                    <button onClick={clean}>ALL</button>
                </nav>
            </div>

        </header>
    );
};