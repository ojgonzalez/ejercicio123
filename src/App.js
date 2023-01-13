import logo from './logo.svg';
import './App.css';
import ContactComponentPure from './components/pure/ContactComponentPure';
import ContactComponentList from './components/functional/ContactComponentList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>
            <ContactComponentPure name='Oscar' lastName='Gonzalez' email='correodeoscar@test.abc' online={true}/>
          </div>
          <div>
            <ContactComponentList></ContactComponentList>
          </div>
        </div>
      </header>
      
    </div>
  );
}

export default App;
