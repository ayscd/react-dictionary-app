import logo from "./logo.svg"
import Dictionary from "./Dictionary";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container"> 
        <header>
          <div className="header">
            <span><img src={logo} className="logo img-fluid" alt="logo" /></span>
            <span><h1>LEXICON DICTIONARY</h1></span>
          </div>
        </header>
        <main className="main">
          <Dictionary />
        </main>
        <footer className="footer">This app was developed by <a href="https://www.linkedin.com/in/ayeskaasc" className="author-link" target="_blank" rel="noreferrer">Ayeska</a>. You can see it on <a href="https://github.com/ayscd/react-dictionary-app" className="git-link" target="_blank" rel="noreferrer">Github</a>.</footer>
      </div>
    </div>
  );
}

export default App;
