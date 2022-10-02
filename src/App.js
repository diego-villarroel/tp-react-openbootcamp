import logo from './logo.svg';
import './App.css';
import ListaContactoComponente from './components/container/listaContactos';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                <ListaContactoComponente></ListaContactoComponente>
        
            </header>
            </div>
    );
}

export default App;
