import {BrowserRouter, Route,Routes} from 'react-router-dom';
import Character from './pages/Character/Character';
import CharacterDescription from './pages/CharacterDescription/CharacterDescription';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Character />}/>
        <Route path="/character/:id" element={<CharacterDescription />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
