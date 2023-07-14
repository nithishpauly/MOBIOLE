import React from 'react'
import Footer from '../components/Footer'


const Home = ({isLoggedIn}) => {
  return (
    <div className='flex-auto justify-center items-center text-white text-xl  max-h-max'>
      <div className='margin-left-5'>
      <p >

      Freecharge is a well-known name in the world of payment app serving over 100 million users across the country. Over the years Freecharge has transformed to become one of the leading financial services and investment apps in India. From recharge & bill payments to investment & lending, Freecharge lets you do it all effortlessly. A 100% subsidiary of Axis Bank, Freecharge has always been known for offering safe and seamless UPI payments, utility bill payments, mobile/DTH recharges, Pay Later solutions etc. With a robust infrastructure supporting multiple payment methods, Freecharge users can choose to pay via Wallet, UPI, Net Banking, Debit Cards and Credit Cards to spend across categories at their favourite offline or online merchant. On the lending front, the offerings span across Buy Now Pay Later, Personal loans, Credit Cards, all supported by Axis Bank.

Freecharge is a significant player in the merchant business and is constantly building new products to support small and mid-size retailers across payments and lending. 
      </p>
      </div>
      <div>
     <Footer />
     </div>
    </div>
  )
}

export default Home