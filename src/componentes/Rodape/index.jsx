import React from "react";
import './style.css';

const Rodape = (props) =>{
    return(
        <footer className={props.modo}>
            <img src="./assets/logo.png" alt="Logotipo da agencia." />
            <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
        ferramentas e tecnologias personalizadas.</p>
            <div>
                <img src="./assets/facebook.png" alt="Icone do facebook" />
                <img src="./assets/twitter.png" alt="Icone do twitter" />
                <img src="./assets/linkedin.png" alt="Icone do linkedin" />
                <img src="./assets/dribble.png" alt="Icone do dribble" />
                <img src="./assets/behance.png" alt="Icone do behance" />
                <img src="./assets/google-plus.png" alt="Icone do google plus" />
            </div>
            <p>Copyright 2022 @ <span>Thiago Reis</span></p>
        </footer>
    );
}
export default Rodape;