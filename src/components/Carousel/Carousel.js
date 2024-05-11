import React from 'react'
import './carousel.css'

const Carousel = (props) => {
    const { children } = props
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [length, setLength] = React.useState(children.length)


    // Set the length to match current children from props
    React.useEffect(() => {
        setLength(children.length)
    }, [children])

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => (prevState + 1) % (length))
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button onClick={prev} className="left-arrow">
                    <svg class="icon" role="presentation" alt="" title="" width="0" height="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M4.433 4.2C6.133 6 7.767 9.667 7.767 16c0 6.333-1.634 10-3.334 11.8L9.167 32l18.4-16-18.4-16-4.734 4.2z">
                        </path>
                    </svg>
                </button>
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
                <button onClick={next} className="right-arrow">
                    <svg class="icon" role="presentation" alt="" title="" width="0" height="0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                        <path d="M27.567 27.8c-1.7-1.8-3.334-5.467-3.334-11.8s1.634-10 3.334-11.8L22.833 0l-18.4 16 18.4 16 4.734-4.2z">
                        </path>
                    </svg>
                </button>
            </div>

        </div>
    )
}

export default Carousel
