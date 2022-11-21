import './App.css'
import SkinContext from './context/SkinContext'
import AppRoutes from './routes'

function App() {
  return (
    <SkinContext>
      <AppRoutes />
    </SkinContext>
  )
}

export default App
