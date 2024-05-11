import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './Components/themeBtn'
import Card from './Components/Card'
import { ThemeProvider } from './Context/Theme'

function App() {

  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
      themeMode === 'light' ? setThemeMode('dark') : setThemeMode('light');
  }

  useEffect(() => {
    let themeCrnt = document.querySelector('html');
    themeCrnt.classList.remove('light', 'dark');
    themeCrnt.classList.add(themeMode);
  
  }, [themeMode])
  

  return (

    <ThemeProvider value={{themeMode, toggleTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
          </div>
      </div>
      </ThemeProvider>

  )
}

export default App
