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
            setCurrentIndex(prevState => prevState + 1)
        }
        else {
            setCurrentIndex(prevState => prevState = 0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState -1 )
        }
        else {
            setCurrentIndex(prevState => prevState = length -1)
        }
    }

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                {/*
                <button onClick={prev} className="left-arrow">
                    &lt;
                </button>
                */}
                <div className="carousel-content-wrapper">
                    <div
                        className="carousel-content"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {children}
                    </div>
                </div>
                {/*
                <button onClick={next} className="right-arrow">
                    &gt;
                </button>
                */}
            </div>

        </div>
    )
}

export default Carousel
