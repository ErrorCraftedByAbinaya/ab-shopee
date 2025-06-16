import { useEffect } from 'react'
import Banner from '../Home/Banner'
import Jewellery from '../Components/Jewellery'
import Clothes from '../Components/Clothes'
import Gadgets from '../Components/Gadgets'
import CategoriesSection from '../Components/CategoriesSection'
import ShippingRefund from '../Components/ShippingRefund'

function Home() {
  useEffect(() => {
    document.title = 'Home'  
  }, [])

  return (
    <div>
      <Banner/>
      <CategoriesSection />
      <Clothes/>
      <Jewellery/>
      <Gadgets/>
      <ShippingRefund/>
    </div>
  )
}

export default Home
