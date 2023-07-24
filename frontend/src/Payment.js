import React from 'react';
import './Service.css';
import { useState } from 'react';
import axios from 'axios';
export default function Service() {
  const [mobileNo, setMobileNo] = useState(0);
  const [mobileNetwork, setMobileNetwork] = useState('');
  const [plan, setPlan] = useState('');
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data1=
    {
      number:mobileNo,
      amount:amount,
      network:mobileNetwork,
      plans:plan
    }
    axios.post("http://localhost:8060/post",data1)
    // alert('Form submitted!');
  };

  return (
    <div className='service'>
      <div className='ser'>
        <h1><center>Payment </center></h1>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <span className="icon"></span>
            <input type="text" required value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
            <label>Mobile no</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="text" required value={mobileNetwork} onChange={(e) => setMobileNetwork(e.target.value)} />
            <label>Mobile Network</label>
          </div>
          <div className="select-box">
            <label>Plans</label>
            <br />
            <span></span>
            <select name="items" size="2" value={plan} onChange={(e) => setPlan(e.target.value)}>
              <option value="Prepaid">1.Plan</option>
              <option value="Postpaid">2.Plan</option>
              <option value="Postpaid">3.Plan</option>
            </select>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="NUMBER" required value={amount} onChange={(e) => setAmount(e.target.value)} />
            <label>Amount</label>
          </div>
          <br />
          <div className="remember-forgot">
            <label><input type="checkbox" />Confirm</label>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>Proceed</button>
       
        </form>
      </div>
    </div>
  )
}
// import React from 'react';
// import './Service.css';
// import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';

// export default function Service() {
//   const formData = useSelector((state) => state);
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8060/post', formData);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     dispatch({ type: 'UPDATE_FORM_DATA', payload: { [name]: value } });
//   };

//   return (
//     <div className='service'>
//       <div className='ser'>
//         <h1><center>Payment </center></h1>
//         <form onSubmit={handleSubmit}>
//           {/* ... Other form inputs */}
//           <input type="text" required name="mobileNo" value={formData.mobileNo} onChange={handleInputChange} />
//           {/* ... Other form inputs */}
//           <button type="submit" className="btn">Proceed</button>
//         </form>
//       </div>
//     </div>
//   )
// }
