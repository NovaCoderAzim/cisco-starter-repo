import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Exhibit title="Your Public IP Address">
          <p>Loading IP address...</p>
        </Exhibit>

        <Exhibit title="Latency">
          <p>Loading latency data...</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
