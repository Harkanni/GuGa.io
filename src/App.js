// eslint-disable-next-line
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

function App() {
  const [navBgColor, setnavBgColor] = useState(false);

  const [showSidebar, setshowSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log('scroll triggered');
      if (window.scrollY > 100) {
        setnavBgColor(true);
      } else {
        setnavBgColor(false);
      }
    });
  }, []);

  return (
    <>
      <Routes>
        <Route
          path='/'
          element={
            <Home
              navBgColor={navBgColor}
              setnavBgColor={setnavBgColor}
              showSidebar={showSidebar}
              setshowSidebar={setshowSidebar}
            ></Home>
          }
        ></Route>
        <Route path='/login'></Route>
      </Routes>
    </>
  );
}

export default App;
