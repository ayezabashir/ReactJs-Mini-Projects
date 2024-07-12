/* eslint-disable react/prop-types */
import { useState } from 'react'
import './scrollindicator.css'
import { useEffect } from 'react';

const ScrollIndicator = ({ url }) => {
    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(0)

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

    const handleScroll = () => {
        const scrollAmount = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScroll((scrollAmount / height) * 100)

    }

    useEffect(() => {
        fetchData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', () => { })
        }
    }, [])

    return (
        <div className='container'>
            <div className="progress-container">
                <div className="scroll-progress">
                    <div className="progress-bar" style={{ width: `${scroll}%` }}></div>
                </div>
            </div>
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
