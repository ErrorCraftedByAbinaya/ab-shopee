
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Clothes = () => {
    const items = [
        { id: 1, image: 'images/clothes/1.jpg',url:'/men' },
        { id: 2, image: 'images/clothes/2.jpg', url: '/men' },
        { id: 3, image: 'images/clothes/3.jpg', url: '/women' },
        { id: 4, image: 'images/clothes/4.jpg', url: '/women' },
        { id: 5, image: 'images/clothes/5.jpg', url: '/men' },
        { id: 6, image: 'images/clothes/6.jpg', url: '/women' },
        { id: 7, image: 'images/clothes/7.jpg', url: '/women' },
        { id: 8, image: 'images/clothes/8.jpg', url: '/women' },
        { id: 9, image: 'images/clothes/9.jpg', url: '/women' },
        { id: 10, image: 'images/clothes/10.jpg', url: '/women' }
      ]
    const sliderRef = useRef(null);
    const [currIndex, setCurrIndex] = useState(1);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const intervalRef = useRef(null);
    const itemRefs = useRef([]);

    const resize = () => {
        const width = Math.max(window.innerWidth * 0.25, 275);
        const height = window.innerHeight * 0.5;
        setDimensions({ width, height });

        itemRefs.current.forEach(item => {
            if (item) {
                item.style.width = `${width - 40}px`;
                item.style.height = `${height}px`;
            }
        });

        if (sliderRef.current) {
            sliderRef.current.style.width = `${width * items.length}px`;
        }
    };
     const move = (index) => {
        let newIndex = index;
        if (index < 1) newIndex = items.length;
        if (index > items.length) newIndex = 1;

        setCurrIndex(newIndex);

        itemRefs.current.forEach((item, i) => {
            const box = item.querySelector('.item__3d-frame');
            if (i === newIndex - 1) {
                item.classList.add('carousel__slider__item--active');
                box.style.transform = "perspective(1200px)";
            } else {
                item.classList.remove('carousel__slider__item--active');
                box.style.transform = `perspective(1200px) rotateY(${i < (newIndex - 1) ? 40 : -40}deg)`;
            }
        });

        if (sliderRef.current) {
       
            sliderRef.current.style.transform = `translate3d(${(newIndex * -dimensions.width) + (dimensions.width / 2) + window.innerWidth / 2}px, 0, 0)`;

      

        }
    };


    const prev = () => {
        move(currIndex - 1);
    };

    const next = () => {
        move(currIndex + 1);
    };

    useEffect(() => {
        resize();
        move(currIndex);
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
            clearInterval(intervalRef.current);
        };
    }, []);
    useEffect(() => {
        if (dimensions.width > 0) {
            move(currIndex);
        }
    }, [dimensions]);
    return (
        <div className='clothes section-padding'>
            <h2 className='title mb-4 text-center'>The Everyday Classic</h2>
            <div className='clothes-bg d-flex justify-content-center align-items-end'>
                <div className="carousel">
                    <div className="carousel__body">
                       
                       
                        <div className="carousel__slider h-100" ref={sliderRef}>
                            {items.map((val, index) => (
                                <Link to={val.url}
                                    className="carousel__slider__item"
                                    key={index}
                                    ref={el => itemRefs.current[index] = el}
                                >
                                    <div className="item__3d-frame">
                                        <div className="item__3d-frame__box item__3d-frame__box--front" style={{backgroundImage: `url(${val.image})`,backgroundSize: 'cover', backgroundPosition: 'center'}}>
                                        </div>
                                        <div className="item__3d-frame__box item__3d-frame__box--left" />
                                        <div className="item__3d-frame__box item__3d-frame__box--right" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                    </div>
                    <div className='d-flex justify-content-between justify-content-md-center gap-5 mb-4 mx-4'>
                        <div className="carousel__prev" onClick={prev}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>
                        <div className="carousel__next" onClick={next}>
                            <FontAwesomeIcon icon={faChevronRight} />

                        </div>

                    </div>
                </div>

            </div>
            
        </div>
        
    );
};

export default Clothes;
