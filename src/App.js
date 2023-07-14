// eslint-disable-next-line
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { useEffect, useState } from 'react';
import { activeNav } from './styledComponent/activeNav'
import { handleNavigationScrolling } from './utilities/handleScroll';

// import { useMediaQuery } from 'react-responsive';

function App() {
  const [navBgColor, setnavBgColor] = useState(false);

  const [showSidebar, setshowSidebar] = useState(false);

  const [currentSection, setcurrentSection] =
    useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      try {
        if (window.scrollY > 100) {
          setnavBgColor(true);
        } else {
          setnavBgColor(false);
        }  
        handleNavigationScrolling(setcurrentSection)
      }
      
      catch (e) {
        console.log(e)
      }

      finally {
        return () => {
          window.removeEventListener('scroll')
        }
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
              activeNav={activeNav}
              currentSection={currentSection}
            ></Home>
          }
        ></Route>
        <Route path='/login'></Route>
      </Routes>
    </>
  );
}

export default App;
