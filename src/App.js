import "./App.css";
import Home from "./components/pages/home";
import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
