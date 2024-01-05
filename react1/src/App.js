import './App.css';
import Resume from './component/Resume';
// import Task1 from './component/Task1';

function App() {
  let resumeObj = {
    mainTitle: "Resume",
    userName: "Emily",
    interest: [
      "Drawing",
      "Photography",
      "Design",
      "Programming",
      "Computer Science",
    ],
    skill:['Web Design with HTML & CSS'],
    education:[{name:'Wilton High School',link:'http://www.wiltonhighschool.org/pages/Wilton_High_School'},
        {name:'Silvermine School of Arts', link:'https://www.silvermineart.org/'}, {name:'Codeacademy',link:''}],
    experience:['Student Technology Intern for Wilton School District', 'Babysitter'],
    extracurriculars:['Recycling Club','Gardening Club','Book Club','Recycling Club','Gardening Club','Recycling Club','Gardening Club'],
    signature:"Emily",
    darkmode: false
  };
  return (
    <>
    <div className="container">
      {/* <Task1 ></Task1> */}
      <Resume {...resumeObj}></Resume>
    </div>
    </>
  );
}

export default App;
