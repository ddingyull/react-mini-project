import MainHeader from './components/MainHeader'
import ImgComponent from './components/ImgComponent'
import ProfileCard from './components/ProfileCard'
// import BtnToNaver from './components/BtnToNaver'
import ClassState from './components/ClassState'
import FunctionalState from './components/FunctionalState'
import Counter from './components/Counter'
import ChangeObj from './components/ChangeObj'
import CustomList from './components/CustomList'
import CustomObj from './components/CustomObj'
import TestCss from './components/TestCss'
import TestStyled from './components/TestStyled'


function App() {
  const nameArr = ['뽀로로', '루피', '크롱']
  const customObj = [
    {
      name: '뽀로로',
      age: '5',
      nickName: '사고뭉치'
    },
    {
      name: '루피',
      age: '8',
      nickName: '공주님'
    },
    {
      name: '크롱',
      age: '3',
      nickName: '공룡'
    },
]
  return (
    <div className='App'>
      <MainHeader/>
      <ImgComponent />
      <ProfileCard text="Go to Naver" name="뽀로로" age="20" href="http://naver.com"/>
      <CustomList nameArr={ nameArr }/>
      {/* <CustomObj arr ={ }/> */}
      <ChangeObj objArr={ customObj }/>
      <ClassState/>
      <FunctionalState/>
      <Counter/>
      <TestCss style="red"/>
      <TestStyled/>
      {/* <BtnToNaver/> */}
    </div>
  );
}

export default App;
