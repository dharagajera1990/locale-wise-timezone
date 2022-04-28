import logo from './logo.svg';
import './App.css';
import Timezone from './Component/Timezone';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const localeList = ["en-US", "en-GB", "pt-BR","en-IN"];
  return (
    <div className="App">
      <Timezone localeList={localeList} />
    </div>
  );
}

export default App;
