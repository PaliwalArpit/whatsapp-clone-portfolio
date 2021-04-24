import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';
import './Chat.css'
function App() {
  return (
    // BEM naming convension
    <div className="app">
      <div className="app_body">
      <Sidebar />
      <Chat />
        {/** chat */}
      </div>
    </div>
  );
}

export default App;
