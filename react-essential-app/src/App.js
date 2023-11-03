import rcc from "./assets/react-core-concepts.png";
// import component from "./assets/components.png";
// import config from "./assets/config.png";
// import jsxui from "./assets/jsx-ui.png";
// import statemgmt from "./assets/state-mgmt.png";
import { CORE_CONCEPTS } from "./data";
import "./App.css";

const words = ["Fundamental", "Crucial", "Core"];
function randomPicker(l) {
  const i = Math.floor(Math.random() * l.length);
  // console.log(l.length);
  return l[i];
}

function Header() {
  const pickedWord = randomPicker(words);
  return (
    <header>
      <img src={rcc} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {pickedWord} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              image={CORE_CONCEPTS[0].image}
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
