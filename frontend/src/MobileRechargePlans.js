import React, { useState, useEffect } from 'react';
import './MobileRechargePlans.css'; // Import the CSS file for this component
import { Link } from 'react-router-dom';

// Mock data for plans (replace this with actual API data)
const mockPlans = [
  { id: 1, name: 'Plan 1', description: '28 days,1 GB per Day,ul-calls & sms,post-data:100kb/s.', price: 256 },
  { id: 2, name: 'Plan 2', description: '80 days,1 GB per Day,ul-calls & sms,post-data:100kb/s.', price: 656 },
  { id: 3, name: 'Plan 3', description: '28 days,2 GB per Day,ul-calls & sms,post-data:100kb/s', price: 356 },
  // Add more plans here...
];

const MobileRechargePlans = () => {
  const [plans, setPlans] = useState([]);

  // Simulate fetching data from an API (useEffect with an empty dependency array runs only once)
  useEffect(() => {
    // Replace this with actual API fetch call
    // For now, use the mockPlans as the initial data
    setPlans(mockPlans);
  }, []);

  return (
    <div className='bckimg'>
    <div className="mobile-recharge-plans">
      
      <h1>Popular Mobile Recharge Plans</h1>
      <div className="plans-container" style={{backgroundImage:"white"}}>
        {plans.map((plan) => (
          <Link to='/Payment'>
          <div className="plan-card" key={plan.id}>
            <h2 className="plan-name">{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>
            <p className="plan-price">Price: ₹{plan.price}</p>
          </div>
          </Link>
        ))}
        </div>
       
        <div style={{backgroundColor:"#ff90a2"}}>
        <br/><br/><br/>
        <div></div>
    </div>
    </div></div>

  );
}
export default MobileRechargePlans;

