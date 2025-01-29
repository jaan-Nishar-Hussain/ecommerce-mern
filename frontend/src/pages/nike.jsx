import React, { useState } from 'react';
import { useCart } from './cartContext';
import { useNavigate } from "react-router-dom";

const Nike = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [buttonText, setButtonText] = useState('Add to Cart');
  const [selectedSize, setSelectedSize] = useState(null);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size.");
      return;
    }
    const item = {
      name: 'AIR JORDAN 1 RETRO HIGH OG "UNIVERSITY BLUE/UNIVERSITY GOLD-SAIL"',
      price: 16995,
      image: "/images/24.jpg",
      size: selectedSize,
    };
    addToCart(item);
    setButtonText('Added');
    setTimeout(() => setButtonText('Add to Cart'), 1500);
  };

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
            <p className="cursor-pointer hover:opacity-50" onClick={() => navigate('/signup')}>| Sign In</p>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-between items-center bg-white p-3 pl-5 pr-5 mt-10 ml-5 mr-5">
          <img src="/images/0.1.png" alt="Logo" className="w-16 h-auto cursor-pointer" onClick={() => navigate('/')} />
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
            <img src="/images/user.png" alt="User" className="w-6 cursor-pointer hover:opacity-50" onClick={() => navigate('/order')} />
            <img src="/images/icon.png" alt="List" className="w-6 cursor-pointer hover:opacity-50" onClick={() => navigate('/cart')} />
          </div>
        </div>
      </header>

      {/* Product Section */}
      <div className="relative p-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <img src="/images/24.jpg" className="h-96 w-96 mt-10 lg:mt-0 lg:ml-15" alt="AIR JORDAN 1 RETRO HIGH OG" />
          <div className="lg:ml-10 mt-6 lg:mt-0">
            <p className="mb-2 text-gray-800">Jordan</p>
            <p className="font-bold">AIR JORDAN 1 RETRO HIGH OG 'UNIVERSITY BLUE/UNIVERSITY GOLD-SAIL'</p>
            <p className="text-sm text-gray-800">₹16,995.00</p>
            <p className="text-gray-800">MRP inclusive of all taxes</p>
            <p className="mt-5 text-gray-800">
              This iteration of the AJ1 reimagines Mike's first signature model with a fresh mix of colors. Premium materials, soft cushioning and a padded ankle collar offer total support and celebrate the shoe that started it all.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-800 pl-6 mt-2 mr-8">
              <li>Premium construction delivers comfort and iconic appeal.</li>
              <li>Leather upper</li>
              <li>SOFTFOAM+ sockliner</li>
              <li>Sockliner: 100% Textile</li>
              <li>Lining: 65.62% Synthetic, 34.38% Textile</li>
              <li>Encapsulated Nike Air-Sole unit in the heel gives you soft cushioning.</li>
            </ul>
            <p className="font-bold mt-5">Product Details - </p>

            <div className="mt-4">
              <label className="block text-gray-700">Select Size (UK):</label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="mt-2 p-2 border rounded-lg"
              >
                <option value="">Select Size</option>
                {[...Array(9)].map((_, i) => (
                  <option key={i} value={i + 3}>
                    UK {i + 3}
                  </option>
                ))}
              </select>
            </div>

            <button
              className="bg-black text-white px-10 py-2 rounded-lg hover:bg-gray-800 active:bg-gray-600 mt-4"
              onClick={handleAddToCart}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <div className="p-6">
        <p className="mt-5 ml-5 font-bold">You may also like</p>
        <div className="flex flex-wrap justify-between items-center">
          <img src='/images/1.jpg' className='mt-3 ml-3 h-48 w-48 object-cover' alt="Product 1" />
          <img src='/images/10.jpg' className='mt-3 h-48 w-48 object-cover' alt="Product 2" />
          <img src='/images/26.jpg' className='mt-3 h-48 w-48 object-cover mr-3' alt="Product 3" />
        </div>
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
              <img src="/images/youtube-icon.png" alt="YouTube" className="w-5 h-5 cursor-pointer hover:opacity-75" />
              <img src="/images/twitter-icon.png" alt="Twitter" className="w-5 h-5 cursor-pointer hover:opacity-75" />
              <img src="/images/pinterest-icon.png" alt="Pinterest" className="w-5 h-5 cursor-pointer hover:opacity-75" />
              <img src="/images/instagram-icon.png" alt="Instagram" className="w-5 h-5 cursor-pointer hover:opacity-75" />
              <img src="/images/facebook-icon.png" alt="Facebook" className="w-5 h-5 cursor-pointer hover:opacity-75" />
            </div>
          </div>
          {/* Explore Section */}
          <div>
            <h4 className="font-bold mb-4">EXPLORE</h4>
            <div className="flex space-x-4">
              <img src="/images/nike.png" alt="App" className="w-12 h-12 cursor-pointer hover:opacity-75" />
              <img src="/images/0.1.png" alt="Trac" className="w-12 h-12 cursor-pointer hover:opacity-75" />
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-4 px-10 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/images/india.png" alt="India" className="w-6 h-4" />
            <span>INDIA</span>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="/images/visa.png" alt="Visa" className="w-8 h-5" />
            <img src="/images/master.png" alt="Amex" className="w-8 h-5" />
            <img src="/images/upi.png" alt="UPI" className="w-8 h-5" />
            <img src="/images/rupay.png" alt="RuPay" className="w-8 h-5" />
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
  );
}

export default Nike;