import './App.css';
import Characters from './components/Characters';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Rick and Morty Trivia</h2>
      </header>

      <main className="App-main">
        <Characters />
      </main>
    </div>
  );
}
export default App;
