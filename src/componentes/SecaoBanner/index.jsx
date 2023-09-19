import React from "react";
import './style.css';

const SecaoBanner = (props) =>{
    return(
        <section id="SecaoBanner" className={props.modo}>
            <div className="SecaoBanner-content">
                <div className="Banner">
                    
                </div>

                <div className="Content">
                    <p>branding | ux | ui | tecnologia</p>
                    <h2>Agência de Branding</h2>
                    <span>e design digital</span>
                </div>
            </div>
        </section>
    );
}
export default SecaoBanner;