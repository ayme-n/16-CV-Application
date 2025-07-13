import { useState } from 'react'
import { GeneralInfos } from './GeneraInfos'
import { EducationalExp } from './EducationalExp'
import { PracticalExp } from './PracticalExp'
import './styles/App.css'
function App() {

  return (
    <div className='container'>
      <GeneralInfos/>
      <EducationalExp/>
      <PracticalExp/>
    </div>
  )
}

export default App
