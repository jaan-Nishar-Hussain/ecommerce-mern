
import { useNavigate } from "react-router-dom";
import {useCart} from './cartContext';
import React,{useState} from 'react'
const Newbalance = () => {
    const navigate = useNavigate();
    const {addToCart} = useCart();
    const [buttonText, setButtonText] = useState(['add to cart']);
    const handleAddToCart = ()=>{

      const item ={
      
        name:'New Balance 574',
        price:9999,
        image:'/images/1.jpg'
      }
      addToCart(item);
      setButtonText('added');
        setTimeout (()=>setButtonText('add to cart'),1500)
       

    }

  return (
    <div className="bg-gray-200 m-0 font-sans">
    {/* Header Section */}
    <header className="m-0 p-0">
      {/* Top Header */}
      <div className="flex justify-between items-center p-2 pl-6 pr-6 mt-2 mb-[-7px]">
        <div className="flex space-x-2">
          <img src="/images/nike-logo-49337.png" alt="Nike Logo" className="w-5 h-auto" />
          <img src="/images/pngwing.com.png" alt="Logo 1" className="w-5 h-auto" />
          <img src="/images/pngwing.com (1).png" alt="Logo 2" className="w-5 h-auto" />
          <img src="/images/pngwing.com (3).png" alt="Logo 3" className="w-5 h-auto" />
          <img src="/images/pngwing.com (5).png" alt="Logo 4" className="w-5 h-auto" />
        </div>
        <div className="flex space-x-4 text-sm font-medium">
          <p className="cursor-pointer hover:opacity-50">Find a store</p>
          <p className="cursor-pointer hover:opacity-50">| Help</p>
          <p className="cursor-pointer hover:opacity-50">| Join us</p>
          <p className="cursor-pointer hover:opacity-50" onClick={()=>navigate('/signup')}>| Sign In</p>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="flex justify-between items-center bg-white p-3 pl-5 pr-15 mt-10 ml-5 mr-5">
        <img src="/images/0.1.png" alt="Logo" className="w-16 h-auto"onClick={()=>navigate('/')} />
        <div className="hidden md:flex space-x-8 text-lg font-medium">
          <p className="cursor-pointer hover:opacity-50">New & Featured</p>
          <p className="cursor-pointer hover:opacity-50">Men</p>
          <p className="cursor-pointer hover:opacity-50">Women</p>
          <p className="cursor-pointer hover:opacity-50">Sale</p>
          <p className="cursor-pointer hover:opacity-50">Customize</p>
          <p className="cursor-pointer hover:opacity-50">SNKR</p>
        </div>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-1 rounded-full border border-gray-300 text-center bg-gray-200 focus:outline-none hover:bg-white"
        />
        <div className="flex space-x-4">
        <img src="/images/user.png" alt="User" className="w-6 cursor-pointer hover:opacity-50" onClick={()=>navigate('/order')}/>
        <img src="/images/icon.png" alt="List" className="w-6 cursor-pointer hover:opacity-50" onClick={()=>navigate('/cart')}/>
        </div>
      </div>
    </header>
    <div className="relative">
  <img src="/images/1.jpg" className="h-120 w-120 mt-10 ml-15" />
  <div className="absolute top-0 left-4 text-left ml-135">
    <p className="mb-2  text-gray-800">New Balance</p>
    <p className="font-bold">574 'NAVY/WHITE'</p>
    <p className="text-sm text-gray-800">9,999.00</p>
    <p className='text-grey-800'>MRP inclusive of all taxes</p>
    <p className='mr-30 mt-5 text-grey-800'>The most New Balance shoe everâ€™ says it all, right? No,
         actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot
          of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase.
           This unassuming, unpretentious versatility is exacts of all-time greats. As hybrid road/trail
            design built on a wider last than the previous generationâ€™s narrow racing silhouettes, the 574 offered a uniquely versatile mix of new,, and comfortable that was adopted as a closet staple across the globe. Thatâ€™s why today,
         the 574 is synonymous with the boundary defying New Balance style, and worn by anyone</p>
           <ul className="list-disc list-inside space-y-2 text-gray-800 pl-6 mt-2 mr-8">
  <li>Midsole foam uses approximately 3% bio-based content made from renewable sources to help
     reduce our carbon footprint</li>
  
  <li>ENCAP midsole cushioning combines soft foam with a
     durable polyurethane rim todeliver all-day</li>
  <li>support
  Vamp, collar and tongue mesh are 100% recycled polyester</li>
  <li>Rubber outsole with 5% recycled rubber</li>
  

</ul>
<p className='text-bold mt-5'>Product Details - </p>

<button className="bg-black text-white px-40 py-2 rounded-lg hover:bg-gray-800 active:bg-gray-600" onClick={ handleAddToCart}>
  {buttonText}
</button>


</div>
</div>

<div>
    <p className='mt-5 ml-5 font-bold'>You may also like</p>
</div>

<div className='flex justify-between items-center'>
    <img src='/images/26.jpg ' className='mt-3 ml-3 h-85 w-95'/>
    <img src='/images/10.jpg ' className='mt-3 h-85 w-95'/>
    <img src='/images/24.jpg ' className='mt-3 h-85 w-95 mr-3'/>
</div>

  {/* Footer Section */}
  <footer className="bg-black text-white text-sm mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-10 py-6">
          {/* Support Section */}
          <div>
            <h4 className="font-bold mb-4">SUPPORT</h4>
            <ul className="space-y-2">
              <li>Contact us</li>
              <li>Promotions & Sale</li>
              <li>Track Order</li>
              <li>Shoe Care</li>
              <li>Tech Glossary</li>
              <li>Initiate Return / Exchange</li>
              <li>Sitemap</li>
            </ul>
          </div>
          {/* About Section */}
          <div>
            <h4 className="font-bold mb-4">ABOUT</h4>
            <ul className="space-y-2">
              <li>Company</li>
              <li>Corporate News</li>
              <li>Press Center</li>
              <li>Investors</li>
              <li>Sustainability</li>
              <li>Careers</li>
              <li>Store Locator</li>
              <li>PUMA Articles</li>
            </ul>
          </div>
          {/* Stay Up To Date Section */}
          <div>
            <h4 className="font-bold mb-4">STAY UP TO DATE</h4>
            <div className="flex space-x-4">
              <img
                src="/images/youtube-icon.png"
                alt="YouTube"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
              <img
                src="/images/twitter-icon.png"
                alt="Twitter"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
              <img
                src="/images/pinterest-icon.png"
                alt="Pinterest"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
              <img
                src="/images/instagram-icon.png"
                alt="Instagram"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
              <img
                src="/images/facebook-icon.png"
                alt="Facebook"
                className="w-5 h-5 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
          {/* Explore Section */}
          <div>
            <h4 className="font-bold mb-4">EXPLORE</h4>
            <div className="flex space-x-4">
              <img
                src="/images/nike.png"
                alt="App"
                className="w-12 h-12 cursor-pointer hover:opacity-75"
              />
              <img
                src="/images/0.1.png"
                alt="Trac"
                className="w-12 h-12 cursor-pointer hover:opacity-75"
              />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 px-10 py-4 flex justify-between items-center">
          {/* Country and Payment Section */}
          <div className="flex items-center space-x-4">
            <img src="/images/india.png" alt="India" className="w-6 h-4" />
            <span>INDIA</span>
          </div>
          <div className="flex space-x-4">
            <img src="/images/visa.png" alt="Visa" className="w-8 h-5" />
            
            <img src="/images/master.png" alt="Amex" className="w-8 h-5" />
            <img src="/images/upi.png" alt="UPI" className="w-8 h-5" />
            <img
              src="/images/rupay.png"
              alt="RuPay"
              className="w-8 h-5"
            />
          </div>
        </div>
        <div className="text-center text-xs mt-4">
          © VEG NON-VEG INDIA LTD, 2025. ALL RIGHTS RESERVED.{" "}
          <span className="underline cursor-pointer">
            IMPRINT AND LEGAL DATA
          </span>
        </div>
      </footer>
    </div>

    
  )
}

export default Newbalance;
