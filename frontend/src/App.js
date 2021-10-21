import Header from './components/Header';
import Footer from './components/Footer';
import Highlights from './components/Highlights';
import Realeases from './components/Releases';

function App() {
  return (
    <div className="App">
      <Header />
      <Realeases />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
