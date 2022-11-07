import  style from './Header.module.css';
import { Link } from 'react-router-dom';

function Header(){

    return(
    
        <header className={style.header_box}>

            <div>
                <h1> EXPERT</h1>
                <input type="search" placeholder="buscar"/>




            </div>





            <div>
                <button><Link to="/">HOME</Link></button>
                <button><Link to="/empresa">MENU 1</Link></button>


            </div>





           
        </header>
        
        



    );


}

export default Header