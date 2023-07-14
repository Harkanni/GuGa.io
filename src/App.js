// eslint-disable-next-line
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

function App() {
  const [navBgColor, setnavBgColor] = useState(false);

  const [showSidebar, setshowSidebar] = useState(false);

  const [currentSection, setcurrentSection] =
    useState(true);

  const activeNav = {
    borderBottom: 3,
    borderBottomColor: '#f39540',
    borderBottomStyle: 'solid',
    transitionProperty: 'border-bottom',
    transitionDelay: '.2s'
  };

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // console.log('scroll triggered');
      if (window.scrollY > 100) {
        setnavBgColor(true);
      } else {
        setnavBgColor(false);
      }

      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTopOffset = section.offsetTop;
        // const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTopOffset) {
          setcurrentSection(section.id)
        } else if (window.scrollY < 100) {
          setcurrentSection(false)
        }
      });

      return () => {
        window.removeEventListener('scroll')
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
