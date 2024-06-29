/* eslint-disable react/prop-types */
import { useState } from 'react'
import './tabs.css'

const Tabs = ({ tabsContent, onChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    const handleOnClick = (getCurrentIndex) => {
        setCurrentTabIndex(getCurrentIndex)
        onChange(getCurrentIndex);
    }

    return (
        <div className='tab-container'>
            <div className="tab-heading">
                {
                    tabsContent.map((item, index) => (
                        <div className='heading' onClick={() => handleOnClick(index)} key={item.id}>
                            <span className={`label ${currentTabIndex === index ? 'active' : null}`}>{item.label}</span>
                        </div>
                    ))
                }
            </div>
            <div className="tab-content">
                {
                    tabsContent[currentTabIndex]
                    &&
                    tabsContent[currentTabIndex].content
                    &&
                    tabsContent[currentTabIndex].content.map((item) => (
                        <div className='content' key={item.heading}>
                            <h3>{item.heading}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Tabs
