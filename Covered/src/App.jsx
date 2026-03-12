import Portal from './pages/Portal'
import Admin from './pages/Admin'

export default function App() {
  const isAdmin = window.location.pathname === '/admin'
  return isAdmin ? <Admin /> : <Portal />
}
