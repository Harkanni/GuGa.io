import styles from '../styles.module.css';
import Header from '../components/Header';
import { ProductCard } from '../components/ProductCard';
import {
  ProductCardData,
  ServiceCardData,
  createAnAccountData
} from '../ProductCardData';
import { Services } from '../components/Services';
import { FooterLinks } from '../components/FooterLinks';
import { FooterData } from '../FooterData';
import { FooterSocials } from '../components/FooterSocial';
import { DropDownMenu } from '../components/DropDownMenu';
// import { useEffect, useState } from 'react';

export const Home = ({currentSection, activeNav, showSidebar, setshowSidebar, navBgColor, setnavBgColor }) => {
  

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
        activeNav={activeNav}
        currentSection={currentSection}
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
            id={ProductData.id}
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
          id={createAnAccountData.id}
        ></ProductCard>
      </>

      <footer style={{}} className={styles.footerContainer}>
        <FooterLinks FooterData={FooterData}></FooterLinks>

        <FooterSocials></FooterSocials>
      </footer>
    </div>
  );
};
