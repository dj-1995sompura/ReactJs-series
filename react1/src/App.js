import './App.css';
import Clocktask from './component/Clocktask';
// import Button from './component/Button';
// import Comp2 from './component/Comp2';
// import Resume from './component/Resume';
// import Task1 from './component/Task1';
// import Video from './component/Video';
// import Counter from './component/Counter';
// import { useState } from 'react';

function App() {
  // console.log("app render");
  // let resumeObj = {
  //   mainTitle: "Resume",
  //   userName: "Emily",
  //   interest: [
  //     "Drawing",
  //     "Photography",
  //     "Design",
  //     "Programming",
  //     "Computer Science",
  //   ],
  //   skill:['Web Design with HTML & CSS'],
  //   education:[{name:'Wilton High School',link:'http://www.wiltonhighschool.org/pages/Wilton_High_School'},
  //       {name:'Silvermine School of Arts', link:'https://www.silvermineart.org/'}, {name:'Codeacademy',link:''}],
  //   experience:['Student Technology Intern for Wilton School District', 'Babysitter'],
  //   extracurriculars:['Recycling Club','Gardening Club','Book Club','Recycling Club','Gardening Club','Recycling Club','Gardening Club'],
  //   signature:"Emily",
  //   darkmode: false
  // };

  // function clickTest() {
  //   // alert("test")
  // }

  // let videos=[{
  //         title:"Dog",
  //         view:"5K",
  //         time:"1 year",
  //         varify: true,
  //         id: 1
  //       },
  //       {
  //         title:"Cat",
  //         view:"1K",
  //         time:"1 month",
  //         varify: true,
  //         id: 2
  //       },
  //       {
  //         title:"Rat",
  //         view:"10K",
  //         time:"5 year",
  //         varify: false,
  //         id: 3
  //       }
  //     ]
    
  //   const [videoData, setVideoData] = useState(videos);

  //   let  handleVideo = ()=>{
  //     console.log(videos.length);
  //     setVideoData([...videoData,{
  //       title:"Rat",
  //       view:"10K",
  //       time:"5 year",
  //       varify: false,
  //       id: videoData.length+1
  //     }]) 
  // }
  return (
    <>
    {/* <button onClick={handleVideo}>Add video</button>  */}
    <div className="container">
      {/* <Task1 ></Task1> */}
      {/* <Resume {...resumeObj}></Resume> */}
      {/* <Comp2 event={clickTest}></Comp2> */}
      {/* {
        videoData.map(video=>
        <Video title={video.title}
        view={video.view}
        time={video.time}
        varify= {video.varify}
        id={video.id}
        key={video.id}>
          <Button onPlay={()=>console.log("play")} onPause={()=> console.log("pause")}>Video</Button>
        </Video>
        )
  
      } */}
      {/* <Counter></Counter> */}

      <Clocktask></Clocktask>
    </div>
    </>
  );
}

export default App;
