import rcc from "../../assets/react-core-concepts.png";
import "./Header.css";

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

export default Header;
