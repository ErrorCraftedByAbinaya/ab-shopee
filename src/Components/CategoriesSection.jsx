import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const capabilities = [
    {
        id: 1,
        url:'/women',
        title: 'Womens Fashion',
        imageClass: 'image-1',
        desc: 'Our clothing line brings fashion-forward and sustainable styles to life. From casual wear to luxury outfits, crafted with care and creativity.',
    },
    {
        id: 2,
        title: 'Jewellery',
        url: '/jewellery',
        imageClass: 'image-2',
        desc: 'Discover elegant and timeless jewellery collections designed to elevate your look for every occasion with sparkle and sophistication.',
    },
    {
        id: 3,
        url: '/electronics',
        title: 'Electronics',
        imageClass: 'image-3',
        desc: 'Experience next-gen electronics with cutting-edge features — from smart gadgets to essential tech accessories built for convenience.',
    },
];

export default function CategoriesSection() {
    return (
        <section className="section-padding capabilities-section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-12">
                        <h3 className="subtitle">All in One Place</h3>
                        <h2 className="title mb-4" >Fashion, Sparkle & Tech</h2>
                    </div>

                    {capabilities.map((cap) => (
                        <Link to={cap.url} className="col-lg-4 d-flex" key={cap.id}>
                                <div className={`capabilities-image ${cap.imageClass}`}>
                                    <div className="d-flex flex-column align-items-start gap-5 justify-content-between h-100">
                                        <h4 className="title">{cap.title}</h4>
                                        <div className="capabilities-content">
                                            <p className="para">{cap.desc}</p>
                                            <span className="button-link btn">
                                                <FaArrowRight className="arrow-icon" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                        </Link>
                        
                    ))}
                </div>
            </div>
        </section>
    );
}
