import './App.css';
import Sidebar from './Sidebar';
function App() {
  return (
    // BEM naming convension
    <div className="app">
      <div className="app_body">
      <Sidebar />
        {/** chat */}
      </div>
    </div>
  );
}

export default App;
