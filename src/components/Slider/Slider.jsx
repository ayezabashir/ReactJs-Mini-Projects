/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './slider.css'
const Slider = ({ url, limit = 5, page = 1 }) => {
    const [images, setImages] = useState([])
    const [currentSlider, setCurrentSlider] = useState(0)
    const [errorMessage, setErrorMessage] = useState(null)
    const [loading, setLoading] = useState(false)

    async function fetchImages(getUrl) {
        try {
            setLoading(true)
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`)
            const data = await response.json()
            if (data) {
                setImages(data)
                setLoading(false)
            }
        } catch (e) {
            setErrorMessage(e.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url])

    if (loading) {
        return <div>Loading...</div>
    }

    if (errorMessage !== null) {
        return <div>Error occured - {errorMessage} </div>
    }

    return (
        <div className='img-slider'>

        </div>
    )
}

export default Slider
