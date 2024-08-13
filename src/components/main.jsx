import AppLayout from './landingPage/AppLayout'
import Land from './landingPage/land'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
export default function Main(){
  return(
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Land />} />
        </Routes>
      </AppLayout>
    </>
  )
}