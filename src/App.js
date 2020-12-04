import './App.css';
import { Preview } from './components/Preview';
import { Tools } from './components/Tools';

function App() {
  return (
    <div className = "content">
      <div className="row">
        <Preview />
        <Tools />
      </div>
    </div>
  );
}

export default App;
