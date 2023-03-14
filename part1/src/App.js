
import './App.css';
import Mensaje from './mensaje'

const Descripcion = ()=>{
  return <p>
    callate marcos
  </p>
}
function App() {
  return (
    <div className="App">
      <Mensaje color='red' contenido='Estamos trabajando'/>
      <Mensaje color='green' contenido='En un curso'/>
      <Mensaje color='gray' contenido='De react'/>
      <Descripcion/>
    </div>
  );
}

export default App;
