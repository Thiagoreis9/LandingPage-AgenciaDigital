import React from "react";
import './style.css';

const Topo = (props) => {

    return (
        <header>
            <div id="Header-content" className={ props.modo }>
                <img src="./assets/logo.png" alt="Logotipo da agencia." />
                <button onClick={ props.alterarModo }>
                    <img src={props.logo} alt="Logotipo do modo light." />
                </button>
            </div>
        </header>
    );
}
export default Topo;