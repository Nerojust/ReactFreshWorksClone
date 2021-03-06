import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import SectionEightComponent from './components/SectionEight';
import SectionFiveComponent from './components/SectionFive';
import SectionFourComponent from './components/SectionFour';
import SectionOneComponent from './components/SectionOne';
import SectionSevenComponent from './components/SectionSeven';
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

      <SectionSevenComponent />

      <SectionEightComponent />

      <FooterComponent />
    </>
  );
}

export default App;
