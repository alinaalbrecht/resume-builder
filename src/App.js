import "./App.scss";
import { Experience } from "./Components/Experience";
import { Header } from "./Components/Header";
import { Sidebar } from "./Components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Experience />
    </div>
  );
}

export default App;
