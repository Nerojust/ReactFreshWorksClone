import './App.css';
import Footer from './components/FooterComponent/Footer';
import HeaderComponent from './components/HeaderComponent';
import PageEightComponent from './components/SectionEight';
import SectionFiveComponent from './components/SectionFive';
import SectionFourComponent from './components/SectionFour';
import SectionOneComponent from './components/SectionOne';
import PageSevenComponent from './components/SectionSeven';
import SectionSixComponent from './components/SectionSix';
import SectionThreeComponent from './components/SectionThree';
import SectionTwoComponent from './components/SectionTwo';

function App() {
  return (
    <>
      <HeaderComponent />

      <SectionOneComponent />

      <SectionTwoComponent />

      <SectionThreeComponent />

      <SectionFourComponent />

      <SectionFiveComponent />

      <SectionSixComponent />

      <PageSevenComponent />

      <PageEightComponent />

      <Footer />
    </>
  );
}

export default App;
