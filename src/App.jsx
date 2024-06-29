import './App.css'
import Tab from './components/Tabs/Tab'
// import ScrollIndicator from './components/ScrollIndicator/ScrollIndicator'
// import SwitchThemes from './components/SwitchThemes/SwitchThemes'
// import QRCodeGenerator from './components/QRGenerator/QRCodeGenerator'
// import TreeView from './components/Tree View/TreeView'
// import sideMenu from './components/Tree View/data'
// import Accordion from './components/Accordion/Accordion'
// import AccordionMulti from './components/AccordionMulti/AccordionMulti'
// import RandomColour from './components/RandomColour/RandomColour'
// import RandomRgbColour from './components/RandomColour/RandomRgbColour'
// import Slider from './components/Slider/Slider'
// import StarRating from './components/StarRating/StarRating'
// import LoadMore from './components/LoadMore/LoadMore'

function App() {

  return (
    <>
      {/* <Accordion />
      <AccordionMulti />
      <RandomColour />
      <RandomRgbColour />
      <StarRating starsCount={10} />
      <Slider url={'https://picsum.photos/v2/list'} page={'1'} limit={'5'} />
      <LoadMore /> 
      <TreeView menus={sideMenu} /> 
      <QRCodeGenerator /> 
      <SwitchThemes />
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />  */}
      <Tab />

    </>
  )
}

export default App
