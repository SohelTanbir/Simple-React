import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Banner from './components/banner/Banner';
import Player from './components/Player/Player';

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Player/>
    </div>
  );
}

export default App;
