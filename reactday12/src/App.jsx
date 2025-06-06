import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Task2 from './Components/Task2'
import Task3 from './Components/Task3'
import Task4 from './Components/Task4'
import Task5 from './Components/Task5'
import Task6 from './Components/Task6'
import Task7 from './Components/Task7'
import Task8 from './Components/Task8'
import Task9 from './Components/Task9'
import Task10 from './Components/Task10'
import Task11 from './Components/Task11'
import Task12 from './Components/Task12'
import Task13 from './Components/Task13'
import Project1 from './Components/Mini1'
import Project2 from './Components/Mini2'
import Project3 from './Components/Mini3'
import Project4 from './Components/Mini4'
import { MyProvider } from './Contexts/MyContext'
import { ThemeProvider } from './Contexts/ThemeContext'
import { AuthProvider } from './Contexts/AuthContext'
import { UserDataProvider } from './Contexts/UserDataContext'
import { CounterProvider } from './Contexts/CounterContext'
import { LanguageContext, LanguageProvider } from './Contexts/LanguageContext'





function App() {
  

  return (
    <>
    <MyProvider>
      <ThemeProvider>
      <AuthProvider>
      <UserDataProvider>
      <CounterProvider>
      <LanguageProvider>
    <Task2/>
    <Task3/>
    <Task4/>
    <Task5/>
    <Task6/>
    <Task7/>
    <Task8/>
   <Task9/>
    <Task10/>
    <Task11/>
    <Task12/>
    <Task13/>
    <Project1/>
    <Project2/>
    <Project3/>
    <Project4/>
    </LanguageProvider>
    </CounterProvider>
    </UserDataProvider>
</AuthProvider>
         </ThemeProvider>
    </MyProvider>

    
    
  
    
    </>
  )
}

export default App
