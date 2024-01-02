import logo from './logo.svg';
import './App.css';
import Button from './component/Button';

function App() {
  return (
    <>
      <Button btnlabel="Play button" onPlay={()=> console.log('play')} onPause={()=> console.log('pause')}>Play </Button>
      {/* <Button btnlabel="pause button" onSmash={()=> console.log('pause')}>Pause</Button> */}

    </>
  );
}

export default App;
