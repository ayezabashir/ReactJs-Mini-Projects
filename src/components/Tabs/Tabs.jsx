/* eslint-disable react/prop-types */
import { useState } from 'react'
import './tabs.css'

const Tabs = ({ tabsContent, handleChange }) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    return (
        <div className='tab-container'>
            <div className="tab-heading">
                {
                    tabsContent.map((item) => (
                        <div key={item.id}>
                            <span className="label">{item.label}</span>
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
                        <div key={item.heading}>
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
