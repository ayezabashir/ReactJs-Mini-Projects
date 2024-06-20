import './App.css'
import Accordion from './components/Accordion/Accordion'
import AccordionMulti from './components/AccordionMulti/AccordionMulti'
import RandomColour from './components/RandomColour/RandomColour'
import RandomRgbColour from './components/RandomColour/RandomRgbColour'
import StarRating from './components/StarRating/StarRating'

function App() {

  return (
    <>
      <Accordion />
      <AccordionMulti />
      <RandomColour />
      <RandomRgbColour />
      <StarRating starsCount={10} />
    </>
  )
}

export default App
