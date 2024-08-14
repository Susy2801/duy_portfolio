import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Components/header/header";
import Main from "./Components/main page/main";
import Experience from "./Components/experience page/experience";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Experience />
    </div>
  );
}

export default App;
