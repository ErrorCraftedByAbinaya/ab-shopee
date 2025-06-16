import { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Gadgets() {
    const [activeSlide, setActiveSlide] = useState(0);
    const [progress, setProgress] = useState(0);
    const sliderRef = useRef(null);

    const gadgets = [
        {
            id: 1, title: "Smart Massage Gun",
            description: "PLorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam ex alias voluptates vel voluptatem tempore vitae voluptate nemo quod exercitationem",
            image: "1.jpg", category: "Muscle Relief"
        },
        {
            id: 2, title: "Aromatherapy Diffuser",
            description: "PLorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam ex alias voluptates vel voluptatem tempore vitae voluptate nemo quod exercitationem officiis earum aspernatur voluptatibus, quidem laborum aperiam commodi sit",
            image: "2.jpg",
            category: "Aromatherapy"
        },
        {
            id: 3, title: "Meditation Headband",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam ex alias voluptates vel voluptatem tempore vitae voluptate nemo quod exercitationem officiis earum aspernatur voluptatibus, quidem laborum aperiam commodi sit", image: "3.jpg", category: "Mindfulness"
        },
        { id: 4, title: "Heated Eye Mask", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam ex alias voluptates vel voluptatem tempore vitae voluptate nemo quod exercitationem officiis earum aspernatur voluptatibus, quidem laborum aperiam commodi sit", image: "1.jpg", category: "Sleep Aid" },
        { id: 5, title: "Acupressure Mat", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis numquam ex alias voluptates vel voluptatem tempore vitae voluptate nemo quod exercitationem officiis earum aspernatur voluptatibus, quidem laborum aperiam commodi sit", image: "2.jpg", category: "Stress Relief" }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        autoplay: false, // Turn off autoplay
        beforeChange: (current, next) => setActiveSlide(next),
    };


    // Progress logic
    useEffect(() => {
        setProgress(0);
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    // Go to next slide and reset progress
                    const nextSlide = (activeSlide + 1) % gadgets.length;
                    setActiveSlide(nextSlide);
                    sliderRef.current.slickGoTo(nextSlide);
                    return 0;
                }
                return prev + 2;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [activeSlide]);


    return (
        <div className='section-padding'>
            <div className="container gadgets-section">
                <h2 className='title'>Relaxation Gadgets</h2>

                <Slider ref={sliderRef} {...settings}>
                    {gadgets.map((gadget, index) => (
                        <div key={index} className="gadget-slide d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5">
                            <Link to='/electronics' className='image-left'>
                                <img src={`/images/electronics/${gadget.image}`} alt={gadget.title} className='img-fluid' />

                            </Link>
                            <div className='align-self-start'>
                                <h3 className='text-start mb-3 section-title'>{gadget.title}</h3>
                                <p className='text-start'>{gadget.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Progress bars */}
                <div className="progress-container">
                    {gadgets.map((_, index) => {
                        let width = '0%';
                        if (index < activeSlide) width = '100%';
                        else if (index === activeSlide) width = `${progress}%`;

                        return (
                            <div
                                key={index}
                                className="progress-track"
                                onClick={() => {
                                    setActiveSlide(index);
                                    sliderRef.current.slickGoTo(index);
                                }}
                            >
                                <div
                                    className="progress-bar"
                                    style={{
                                        width,
                                        backgroundColor: index <= activeSlide ? '#b7b8b8' : '#ddd'
                                    }}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

    );
}
