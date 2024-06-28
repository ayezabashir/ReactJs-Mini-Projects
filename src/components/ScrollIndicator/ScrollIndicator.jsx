/* eslint-disable react/prop-types */
import { useState } from 'react'
import './scrollindicator.css'
import { useEffect } from 'react';

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);

    async function fetchData(getUrl) {
        try {
            const response = await fetch(getUrl);
            const data = await response.json();
            console.log(data)
            if (data && data.products && data.products.length > 0) {
                setData(data.products)
            }
        } catch (e) {
            console.log(e);
        }
    }
    useEffect(() => {
        fetchData(url);
    }, [url])

    return (
        <div className='container'>
            <h1>Scroll Indicator</h1>
            <div className='data-container'>
                {
                    data && data.length > 0 ?
                        data.map(item => <p key={item.id}>{item.title}</p>)
                        :
                        null
                }
            </div>
        </div>
    )
}

export default ScrollIndicator
