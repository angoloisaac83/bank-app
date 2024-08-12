import AppLayout from './components/landingPage/AppLayout'
import Land from './components/landingPage/land'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function App(){
  return(
    <>
    <Router>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Land />} />
        </Routes>
      </AppLayout>
    </Router>
    </>
  )
}