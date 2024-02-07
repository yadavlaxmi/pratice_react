import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Menu from './Component/Menu';
import Button from './Component/Button';
import Toggle from './Component/Toggle';
function App() {
  return (
    <div className='App'>
      <Header name="Anna" color="purple"/>
     <Sidebar greet="howday"/>
     <Menu greet="h1"/>
     <Button/>
     <Toggle/>
    </div>
  );
}

export default App;
