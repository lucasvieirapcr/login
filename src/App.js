import './App.css';
import Formulario from './componentes/Formulario';

import Logo from './componentes/Logo';

function App() {
  return (
    <div className="App">
      <Logo/>
      <Formulario/>

      <p style={{color: 'white', fontSize: '14px', marginTop: '25px', height:'24px'}}>A Voxel Digital oferece plataformas de software que possibilitam aos clientes gerenciar todo ciclo de vida do conteúdo.</p>
    </div>
  );
}

export default App;
