import React from 'react'
import { Link } from 'react-router-dom'

export default function Jewellery() {
  const jewelleryData = [
    {
      id: 1,
      name: 'Earrings',
      imgUrl: '/images/jewellery/earrings.jpg',
    },
    {
      id: 2,
      name: 'Necklaces',
      imgUrl: '/images/jewellery/necklace.jpg',
    },
    {
      id: 3,
      name: 'Rings',
      imgUrl: '/images/jewellery/rings.jpg',
    },
    {
      id: 4,
      name: 'Bracelets',
      imgUrl: '/images/jewellery/bracelet.jpg',
    },
  ]
  return (
    <div className='jewellery-section section-padding'>
      <div className='container'>
        <div className='row'>
          <h2 className='title text-center mb-0'>Jewellery</h2>
          <p className='description text-center mb-4'>THAT GRAB YOU THE STYLE</p>
        </div>

        <div className='row gy-3'>
          {jewelleryData.map((item) => (
            <Link to='/jewellery' key={item.id} className='col-lg-3 col-sm-6'>
              <div className='jewellary-bg d-flex align-items-end justify-content-center'  style={{ backgroundImage: `url(${item.imgUrl})` }}>
              <h3 className='text-light mb-4'>{item.name}</h3>
            </div>
            </Link>
          ))}

          {/* <div className='jewellary-bg' style={{ backgroundImage: 'url(/images/jewellery/earrings.jpg)' }}>
                  <h3>Earrings</h3>
              </div> */}
        </div>

      </div>


    </div>
  )
}
