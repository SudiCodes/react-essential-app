import rcc from "./assets/react-core-concepts.png";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <img src={rcc} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>

      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
