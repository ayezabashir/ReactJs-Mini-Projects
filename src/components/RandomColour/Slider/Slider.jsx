/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import './slider.css'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

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

    console.log(images)

    if (loading) {
        return <div>Loading...</div>
    }

    if (errorMessage !== null) {
        return <div>Error occured - {errorMessage} </div>
    }

    function handlePrev() {
        setCurrentSlider(currentSlider === 0 ? images.length - 1 : currentSlider - 1)
    }

    function handleNext() {
        setCurrentSlider(currentSlider === images.length - 1 ? 0 : currentSlider + 1)
    }

    return (
        <div className='img-slider'>
            <BsArrowLeftCircleFill onClick={handlePrev} className='arrow arrow-left' />
            {
                images && images.length ?
                    images.map((img, index) => (
                        <img
                            key={img.id}
                            src={img.download_url}
                            className={currentSlider === index ? "current-slide" : "current-slide hide-current-image"}
                        />
                    ))
                    :
                    null
            }
            <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
            <span className='circle-indicators'>
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button
                                key={index}
                                className={currentSlider === index ? 'current-indicator' : 'current-indicator hide-current-indicator'}
                                onClick={() => setCurrentSlider(index)}
                            ></button>
                        ))
                        :
                        null
                }

            </span>

        </div>
    )
}

export default Slider
