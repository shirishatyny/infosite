
import './App.css';
import Titles from './Components/Titles';
import Buttons from './Components/Buttons';
import Footer from './Components/Footer';

import Image from './Components/Image';
import Information from './Components/Information';

function App() {
  return (
    <div className="App">
      <Image/>
      <Titles/>
      <Buttons/>
      <Information/>
      <Footer/>
    </div>
  );
}

export default App;
