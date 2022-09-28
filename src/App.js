import React from 'react'
import LeftNavBar from './components/LeftNavBar';
import Main from './components/Main';
import RightContainer from './components/RightContainer';

const App = () => {

  return (
    <div 
    className='w-[90%] mx-auto my-8
    flex gap-12'>
      <LeftNavBar />
      <Main />
      <RightContainer />
      {/* <LineChart /> */}
    </div>
  )
}

export default App;