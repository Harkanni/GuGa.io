// eslint-disable-next-line
import styles from '../src/styles.module.css';
import Header from './components/Header';
import { ProductCard } from './components/ProductCard';
import {
  ProductCardData,
  ServiceCardData,
  createAnAccountData
} from '../src/ProductCardData';
import { Services } from './components/Services';
import { FooterLinks } from './components/FooterLinks';
import { FooterData } from './FooterData';
import { FooterSocials } from './components/FooterSocial';
import { DropDownMenu } from './components/DropDownMenu';
import { useEffect, useState } from 'react';
// import { useMediaQuery } from 'react-responsive';

function App() {
  const [navBgColor, setnavBgColor] = useState(false);

  const [showSidebar, setshowSidebar] = useState(false);

  // const isDesktopOrLaptop = useMediaQuery({
  //   query: '(min-device-width: 1224px)',
  // });

  useEffect(() => {
    window.addEventListener('scroll', () => {
      console.log("scroll triggered")
      if (window.scrollY > 100) {
        setnavBgColor(true);
      } else {
        setnavBgColor(false);
      }
    });
  }, []);
  
  return (
    <div className={styles.App}>
      <DropDownMenu
        showSidebar={showSidebar}
        setshowSidebar={setshowSidebar}
      ></DropDownMenu>

      <Header
        showSidebar={showSidebar}
        setshowSidebar={setshowSidebar}
        navBgColor={navBgColor}
        setnavBgColor={setnavBgColor}
      ></Header>

      <>
        {ProductCardData.map((ProductData, id) => (
          <ProductCard
            key={id}
            type={ProductData.type}
            h1={ProductData.h1}
            p={ProductData.p}
            bgColor={ProductData.bgColor}
            imgUrl={ProductData.imgUrl}
            text={ProductData.btnText}
            btnBgColor={ProductCard.btnBgColor}
          ></ProductCard>
        ))}
      </>

      <Services serviceCardData={ServiceCardData}></Services>

      <>
        <ProductCard
          type={createAnAccountData.type}
          h1={createAnAccountData.h1}
          p={createAnAccountData.p}
          bgColor={createAnAccountData.bgColor}
          imgUrl={createAnAccountData.imgUrl}
          text={createAnAccountData.btnText}
        ></ProductCard>
      </>

      <footer className={styles.footerContainer}>
        <FooterLinks FooterData={FooterData}></FooterLinks>

        <FooterSocials></FooterSocials>
      </footer>
    </div>
  );
}

export default App;
