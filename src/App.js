import Home from './components/Home';
import './App.css';
import ThemeContext, { ThemeChange } from './contexts/ThemeContext';

function App() {

  return (
    <div>
      <ThemeContext.Provider value={new ThemeChange()}>
        <div className='App'>
          <Home />
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
