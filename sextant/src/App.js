import './App.css';
import Banner from './Banner';
import Exhibit from './Exhibit';
import IPAddress from './IPAddress';

function App() {
  return (
    <div className="App">
      <Banner />
      <main>
        <Exhibit title="Public IPv4 Address">
          <IPAddress version="v4" />
        </Exhibit>

        <Exhibit title="Public IPv6 Address">
          <IPAddress version="v6" />
        </Exhibit>
      </main>
    </div>
  );
}

export default App;
