import Compteur from './Compteur';
import FocusInput from './FocusInput';
import CompteurRendu from './CompteurRendu';
import ListeArticles from './ListeArticles';
import Timer from './Timer';

function App() {
  return (
    <div>
      <h1>Advanced Hooks Workshop – Beginner Level</h1>
      
      <h2>Counter with useReducer</h2>
      <div className="exercise-container">
        <Compteur />
      </div>

      <h2>Focus Management with useRef</h2>
      <div className="exercise-container">
        <FocusInput />
      </div>

      <h2>Render Tracker with useRef</h2>
      <div className="exercise-container">
        <CompteurRendu />
      </div>

      <h2>Article Feed with useFetch</h2>
      <div className="exercise-container">
        <ListeArticles />
      </div>

      <h2>Timer with Effect Cleanup</h2>
      <div className="exercise-container">
        <Timer />
      </div>
    </div>
  );
}

export default App;