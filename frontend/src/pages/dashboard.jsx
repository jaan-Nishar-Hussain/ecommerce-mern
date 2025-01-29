import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-200 m-0 font-sans">
      {/* Header Section */}
      <header className="m-0 p-0">
        {/* Top Header */}
        <div className="flex justify-between items-center p-2 pl-6 pr-6 mt-2 mb-[-7px]">
          <div className="flex space-x-2">
            <img
              src="/images/nike-logo-49337.png"
              alt="Nike Logo"
              className="w-5 h-auto"
            />
            <img
              src="/images/pngwing.com.png"
              alt="Logo 1"
              className="w-5 h-auto"
            />
            <img
              src="/images/pngwing.com (1).png"
              alt="Logo 2"
              className="w-5 h-auto"
            />
            <img
              src="/images/pngwing.com (3).png"
              alt="Logo 3"
              className="w-5 h-auto"
            />
            <img
              src="/images/pngwing.com (5).png"
              alt="Logo 4"
              className="w-5 h-auto"
            />
          </div>
          <div className="flex space-x-4 text-sm font-medium">
            <p className="cursor-pointer hover:opacity-50">Find a store</p>
            <p className="cursor-pointer hover:opacity-50">| Help</p>
            <p className="cursor-pointer hover:opacity-50">| Join us</p>
            <p
              className="cursor-pointer hover:opacity-50"
              onClick={() => navigate("/signup")}
            >
              | Sign In
            </p>
          </div>
        </div>

        {/* Navigation Bar */}
        <div className="flex justify-between items-center bg-white p-3 pl-5 pr-5 mt-10 ml-5 mr-5">
          <img
            src="/images/0.1.png"
            alt="Logo"
            className="w-16 h-auto cursor-pointer"
            onClick={() => navigate("/")}
          />
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
            <img
              src="/images/user.png"
              alt="User"
              className="w-6 cursor-pointer hover:opacity-50"
              onClick={() => navigate("/order")}
            />
            <img
              src="/images/icon.png"
              alt="List"
              className="w-6 cursor-pointer hover:opacity-50"
              onClick={() => navigate("/cart")}
            />
          </div>
        </div>
      </header>

      {/* Brands Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4">
        <div className="text-center">
          <img
            src="/images/1.jpg"
            alt="New Balance"
            className="h-40 w-auto mx-auto cursor-pointer object-contain"
            onClick={() => navigate("/newbalance")}
          />
          <p className="mt-2">NEW BALANCE</p>
        </div>
        <div className="text-center">
          <img
            src="/images/10.jpg"
            alt="Adidas"
            className="h-40 w-auto mx-auto cursor-pointer object-contain"
            onClick={() => navigate("/adidas")}
          />
          <p className="mt-2">ADIDAS</p>
        </div>
        <div className="text-center">
          <img
            src="/images/24.jpg"
            alt="Nike Jordan"
            className="h-40 w-auto mx-auto cursor-pointer object-contain"
            onClick={() => navigate("/nike")}
          />
          <p className="mt-2">NIKE JORDAN</p>
        </div>
        <div className="text-center">
          <img
            src="/images/26.jpg"
            alt="Puma"
            className="h-40 w-auto mx-auto cursor-pointer object-contain"
            onClick={() => navigate("/puma")}
          />
          <p className="mt-2">PUMA</p>
        </div>
      </div>

      {/* Introduction Section */}
      <div className="text-center p-8">
        <h1 className="text-3xl md:text-6xl font-extrabold">VEG NONVEG</h1>
        <p className="text-sm md:text-lg mt-4">
          Our name, “VegNonVeg” is an amalgamation of two completely opposite
          words. At its core, it represents the coming together of different
          perspectives or tastes bound together by the love for sneakers & street culture.
        </p>
        <button
          className="mt-6 px-4 md:px-6 py-2 bg-black text-white rounded-full hover:opacity-70 active:opacity-50"
          onClick={() => navigate("/allproduct")}
        >
          Shop
        </button>
      </div>

      {/* Featured Products Section */}
      <div className="p-12">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">FEATURED</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="text-center">
            <img
              src="/images/model.jpg"
              alt="Nike Running"
              className="h-48 w-auto mx-auto object-contain"
              onClick={() => navigate("/nike")}
            />
            <p className="mt-2" onClick={() => navigate("/nike")}>
              Nike Running
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/model2.jpg"
              alt="Puma"
              className="h-48 w-auto mx-auto object-contain"
              onClick={() => navigate("/puma")}
            />
            <p className="mt-2" onClick={() => navigate("/puma")}>
              Puma
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/model3.jpg"
              alt="Adidas"
              className="h-48 w-auto mx-auto object-contain"
              onClick={() => navigate("/adidas")}
            />
            <p className="mt-2" onClick={() => navigate("/adidas")}>
              Adidas
            </p>
          </div>
          <div className="text-center">
            <img
              src="/images/model4.jpg"
              alt="New Balance"
              className="h-48 w-auto mx-auto object-contain"
              onClick={() => navigate("/newbalance")}
            />
            <p className="mt-2" onClick={() => navigate("/newbalance")}>
              New Balance
            </p>
          </div>
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

export default Dashboard;