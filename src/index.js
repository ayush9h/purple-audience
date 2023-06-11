import React from 'react';
import ReactDOM from 'react-dom/client';
import {  BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Meditation from './pages/Medcorner';
import Events from './pages/events';

export default function RRR() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="meditation" element={<Meditation />} />
            <Route path="events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RRR/>);