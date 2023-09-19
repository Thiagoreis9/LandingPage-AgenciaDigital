import React from "react";
import './style.css';

const Card = (props) =>{
    return(
        <div id="Card">        
            <div className={props.modo}>
                <div className="Card-content">
                    <p> {props.data} </p>
                    <h2> {props.cargo} </h2>
                    <p> {props.empresa} </p>
                    <p> {props.descricao} </p>
                </div>
            </div>
        </div>
    );
}
export default Card;