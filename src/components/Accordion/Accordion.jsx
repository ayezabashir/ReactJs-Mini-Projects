import { useState } from "react"
import data from "./data";
import './accordion.css'

const Accordion = () => {
    const [accordion, setAccordion] = useState(null);
    const handleSelection = (id) => {
        // console.log(id)
        setAccordion(id)
        // Close if the accordian is opened and clicked twice
        if (id === accordion) {
            setAccordion(null)
        }
    }
    return (
        <div className="accordion">
            <h1>Open Single Accordion</h1>
            {
                data.map((item) => (
                    <div className="item" key={item.id}>
                        <h2 onClick={() => handleSelection(item.id)}>{item.question}</h2>
                        {
                            accordion === item.id ? <p>{item.answer}</p> : null
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Accordion
