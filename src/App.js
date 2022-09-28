// import MainHeader from './components/MainHeader'
// import ImgComponent from './components/ImgComponent'
// import ProfileCard from './components/ProfileCard'
// // import BtnToNaver from './components/BtnToNaver'
// import ClassState from './components/ClassState'
// import FunctionalState from './components/FunctionalState'
// import Counter from './components/Counter'
// import ChangeObj from './components/ChangeObj'
// import CustomList from './components/CustomList'
// import CustomObj from './components/CustomObj'
// import TestCss from './components/TestCss'
// import TestStyled from './components/TestStyled'


// function App() {
//   const nameArr = ['뽀로로', '루피', '크롱']
//   const customObj = [
//     {
//       name: '뽀로로',
//       age: '5',
//       nickName: '사고뭉치'
//     },
//     {
//       name: '루피',
//       age: '8',
//       nickName: '공주님'
//     },
//     {
//       name: '크롱',
//       age: '3',
//       nickName: '공룡'
//     },
// ]
//   return (
//     <div className='App'>
//       <MainHeader/>
//       <ImgComponent />
//       <ProfileCard text="Go to Naver" name="뽀로로" age="20" href="http://naver.com"/>
//       <CustomList nameArr={ nameArr }/>
//       {/* <CustomObj arr ={ }/> */}
//       <ChangeObj objArr={ customObj }/>
//       <ClassState/>
//       <FunctionalState/>
//       <Counter/>
//       <TestCss style="red"/>
//       <TestStyled/>
//       {/* <BtnToNaver/> */}
//     </div>
//   );
// }

// export default App;


// import styled { keyframes } from "styled-components"; // npm styled-component 설치
// import logo from '';
// import { keyframes } from 'styled-components';


// const RootDiv = styled.div`
//   text-align: center;
// `;
// const AppHeader = styled.h1`
//   background-color: #282c34;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;

// `

// const rotation = `
//     from {
//     transform: rotate(0deg);
//     }
//     to {
//     transform: rotate(360deg);
//     }
// `

// const AppLogo = styled.span`
//   height: 40vmin;
//   pointer-events: none;
//   animation: ${rotation} infinite 20s linear;
//   min-height: 100vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: calc(10px + 2vmin);
//   color: white;

// `

// const rotation = `
//     from {
//     transform: rotate(0deg);
//     }
//     to {
//     transform: rotate(360deg);
//     }
// `

// const AppLogo = styled.span`
//   height: 40vmin;
//   pointer-events: none;
//   animation: ${rotation} infinite 20s linear;
// `
// const MyA = styled.span`
//   color: #61dafb;
// `

// function App() {
//   return (
//     <RootDiv>
//       <AppHeader>
//       <AppLogo src={ logo } alt="app" />
//         <p>Edit <code>src/App.js</code> and save to reload.</p>
//       <MyA
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//     >
//     Learn React
//       </MyA>
//       </AppHeader>
//       </RootDiv>
    
// );
// }
import ConditionalRender from './components/ConditionalRender';
import PracticeOne from './components/PracticeOne';
import PracticeTwo from './components/PracticeTwo';
import TestRef from './components/TestRef';
import ChangeFocus from './components/ChangeFocus';

import { useState } from 'react';

// function App() {
//   const [condition, setCondition] = useState("보이기");
//   const onChange = () => {
//     condition === "보이기" ? setCondition("감추기") : setCondition("보이기");
// }

// const conditionRender = condition === "감추기" && <ConditionalRender />;

// return (
//   <div className="App">
//     {/* 앞부분이 true이면 뒤에가 실행됨 */}
//     { conditionRender } 
//   <button onClick={onChange}>{condition}</button>
//   </div>
// );
// }

function App(){
  const [practice, setPractice ] = useState('1번');
  const onChange = () => {
    practice == "1번" ? setPractice('2번') : setPractice('1번');
  }

  const practiceOne = practice === "1번" && <PracticeOne /> ;

  return (
  <div className="App">
    {/* 앞부분이 true이면 뒤에가 실행됨 */}
    { practice === "1번" ? <PracticeOne text={practice} />  :<PracticeTwo text={practice} />} 
  <button onClick={onChange}>{practice}</button>
  <TestRef/>
  <ChangeFocus/>
  </div>
);
}

export default App;

