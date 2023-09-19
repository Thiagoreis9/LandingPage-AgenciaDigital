import React from "react";
import Card from "../Card";
import './style.css';

const SecaoExperienciaTrabalho = (props) => {
    return (
        <section id="SecaoExperienciaTrabalho">
            <div className={props.modo}>
                <div className="title-section">
                    <h2>Experiências De Trabalho</h2>
                    <p className="pseudoElement">
                        Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                        Sites e Marketing Digital, nos empenhamos diariamente para entregar
                        resultados que tragam impacto aos nossos clientes.
                    </p>
                </div>

                <div className="Cards-section">
                    <Card
                        data="JUNHO 2012 - 2016"
                        cargo="Web Designer"
                        empresa="Pied Piper StartUp."
                        descricao="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores" />
                    <Card
                        data="AGOSTO 2016 - 2019"
                        cargo="Product Designer"
                        empresa="E Corp."
                        descricao="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra" />
                    <Card
                        data="FEVEREIRO 2019 - 2021"
                        cargo="Digital Consulting"
                        empresa="Arasaka Inc."
                        descricao="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução" />
                </div>
            </div>
        </section>
    );
}
export default SecaoExperienciaTrabalho;