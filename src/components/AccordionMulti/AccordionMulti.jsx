import './../Accordion/accordion.css';
import data from '../Accordion/data';
import { useState } from 'react';

const AccordionMulti = () => {
    const [multiple, setMultiple] = useState([]);

    const handleAccordion = (id) => {
        let copyMultiple = [...multiple];
        const index = copyMultiple.indexOf(id);
        if (index === -1) {
            // If the item is not in the array, add it
            copyMultiple.push(id);
        } else {
            // If the item is already in the array, remove it
            copyMultiple.splice(index, 1);
        }
        setMultiple(copyMultiple);
    };

    return (
        <div className='accordion'>
            {data.map((item) => (
                <div className="item" key={item.id}>
                    <h2 onClick={() => handleAccordion(item.id)}>{item.question}</h2>
                    {multiple.includes(item.id) && <p>{item.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default AccordionMulti;
