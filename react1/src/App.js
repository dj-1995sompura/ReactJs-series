
import './App.css';
import Button from './component/Button';

import Video from './component/Video';

function App() {
  let videos=[{
          id:1,
          title:"Dog",
          view:"5K",
          time:"1 year",
          varify: true
        },
        {
          id:2,
          title:"Cat",
          view:"1K",
          time:"1 month",
          varify: true
        },
        {
          id:3,
          title:"Rat",
          view:"10K",
          time:"5 year",
          varify: false
        }
      ]
  return (
    <>
    <div className="container" onClick={()=>console.log('app')}>
      {/* <Button btnlabel="Play button" onPlay={()=> console.log('play')} onPause={()=> console.log('pause')}>Play </Button> */}
      {/* <Button btnlabel="pause button" onSmash={()=> console.log('pause')}>Pause</Button> */}
      {
        videos.map(video=>
          <Video title={video.title}
          view={video.view}
          time={video.time}
          varify= {video.varify}
          id={video.id} key={video.id}>
            <Button onPlay={()=> console.log('playing..')} onPause={()=> console.log('paused..')}>{video.title}</Button>  
          </Video>
          )
      }
    </div>
    </>
  );
}

export default App;
