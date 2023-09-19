import './App.css';
import { useState } from "react";
import SecaoBanner from './componentes/SecaoBanner';
import Topo from './componentes/Topo';
import SecaoExperienciaTrabalho from './componentes/SecaoExperienciaTrabalho';
import Rodape from './componentes/Rodape';

function App(props) {

  const [modo, setNovoModo] = useState('light-mode');
  const [logo, setNovoLogo] = useState('./assets/moon.png');
    const alterarModo = () =>{
        if (modo === 'dark-mode'){
            setNovoModo('light-mode')
            setNovoLogo('./assets/moon.png')
        } else{
            setNovoModo('dark-mode')
            setNovoLogo('./assets/sun.png')
        }
    }

  return (
    <div className="App">
      <Topo modo={modo} alterarModo={alterarModo} logo={logo}/>
      <SecaoBanner modo={modo}/>
      <SecaoExperienciaTrabalho modo={modo}/>
      <Rodape modo={modo}/>
    </div>
  );
}

export default App;
