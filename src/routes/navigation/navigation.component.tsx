import { useContext, useEffect, useState } from "react";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import AdagioLogo from "../../assets/adagio_logo.png";
import styles from './navigation.module.scss';

const Navigation = () => {
    const [loginOrRegisterPageAux,setLoginOrRegisterPageAux] = useState<string>();

    useEffect(()=>{
        toggleLoginOrRegisterPageAux();
    },[]);

    const toggleLoginOrRegisterPageAux = () => {
        console.log('perc: ', window.location.pathname)
        if(window.location.pathname === "/")
            setLoginOrRegisterPageAux("/register");
        else 
            setLoginOrRegisterPageAux("/");
    }

    const verifyCurrentUserState = () =>{
        console.log(window.location.pathname);

        return (
            <nav className={`${styles["navegacao-container"]}`}>
                <ul className={`${styles['lista-navegacao']}`}>

                    <li onClick={toggleLoginOrRegisterPageAux} 
                    className={`${styles['item-navegacao']}`}>
                        <Link  to={`${loginOrRegisterPageAux}`} >
                            {
                                loginOrRegisterPageAux === "/" ?
                                "Fazer Login" : "Cadastre-se"
                            }
                        </Link>
                    </li>

                </ul>
            </nav>
        );
         
    }
    return (
        <Fragment>

            <header className={`${styles['header-navigation']}`}>
                <Link to="/" >
                    <img className={`${styles.adagio_logo}`} src={AdagioLogo}/>
                </Link>
                {verifyCurrentUserState()}
            </header>

            <Outlet/>
        </Fragment>
    )
}

export default Navigation;