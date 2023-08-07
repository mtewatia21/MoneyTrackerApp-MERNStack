import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
      <h1>
        $ int CurrBalance
      </h1>
      <form>
        <div className="info">
          <input type = "text" placeholder='someting'></input>
          <input type = "datetime-local"></input>
        </div>
        <div className="description">
          <input type = "text" placeholder='description'></input>
        </div>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">Xbox360</div>
            <div className="description">For you!</div>
          </div>
          <div className="right">
            <div className="price">$500</div>
            <div className="datetime">2023-8-06</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
