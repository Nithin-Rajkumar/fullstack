import { useState } from 'react';
import '../assets/css/payment.css';
import CustomNavBar from '../components/CustomNavBar';
import axios from 'axios';

const PaymentPage = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    profession: '',
    goals: ''
  });

  const [selectedCourse, setSelectedCourse] = useState('');
  const [cardDetails, setCardDetails] = useState({
    card_number: '',
    expiry_date: '',
    cvv: '',
    name_card: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const paymentData = {
        name: userDetails.name_payment,
        email: userDetails.email_payment,
        phone: userDetails.phone_payment,
        address: userDetails.address_payment,
        profession: userDetails.profession_payment,
        goals: userDetails.goals_payment,
        course: selectedCourse,
        card_number: cardDetails.cardNumber,
        expiry_date: cardDetails.expiryDate,
        cvv: cardDetails.cvv,
        name_card: cardDetails.nameOnCard
      };

      const token = sessionStorage.getItem('token'); // Assuming token is stored in local storage
      const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      };

      const response = await axios.post('http://localhost:8181/api/v1/user/payment', paymentData, { headers });

      console.log('Payment successful:', response.data);
      // You can redirect or show a success message here
    } catch (error) {
      console.error('Error occurred while processing payment:', error.message);
      // Handle error accordingly (show error message to user, log, etc.)
    }
  };

  return (
    <div className="payment-page">
      <CustomNavBar />
      <div className="payment-header">
        <h1 className="headline_payment">Welcome to Your English Evolution</h1>
        <p className="subheadline_payment">Complete Your Details and Unlock Mastery</p>
      </div>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="user-details_payment">
          <h2>User Details</h2>
          <input type="text" className="payment-input" placeholder="Full Name" onChange={(e) => setUserDetails({ ...userDetails, name_payment: e.target.value })} />
          <input type="email" className="payment-input" placeholder="Email Address" onChange={(e) => setUserDetails({ ...userDetails, email_payment: e.target.value })} />
          <input type="tel" className="payment-input" placeholder="Phone Number" onChange={(e) => setUserDetails({ ...userDetails, phone_payment: e.target.value })} />
          <input type="text" className="payment-input" placeholder="Address" onChange={(e) => setUserDetails({ ...userDetails, address_payment: e.target.value })} />
          <input type="text" className="payment-input" placeholder="Profession (Optional)" onChange={(e) => setUserDetails({ ...userDetails, profession_payment: e.target.value })} />
          <input type="text" className="payment-input" placeholder="Goals (Optional)" onChange={(e) => setUserDetails({ ...userDetails, goals_payment: e.target.value })} />
        </div>
        <div className="course-selection_payment">
          <h2>Choose Your Course</h2>
          <select className="payment-input" onChange={(e) => setSelectedCourse(e.target.value)}>
            <option value="general_english">General English</option>
            <option value="mastery">Mastery</option>
            <option value="intermediate">Intermediate</option>
          </select>
        </div>
        {/* Other sections of the form */}
        <div className="review-payment_payment">
          <h2>Review and Payment</h2>
          <input type="text" className="payment-input" placeholder="Card Number" onChange={(e) => setCardDetails({ ...cardDetails, cardNumber: e.target.value })} />
          <input type="text" className="payment-input" placeholder="Expiry Date" onChange={(e) => setCardDetails({ ...cardDetails, expiryDate: e.target.value })} />
          <input type="text" className="payment-input" placeholder="CVV" onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })} />
          <input type="text" className="payment-input" placeholder="Name on Card" onChange={(e) => setCardDetails({ ...cardDetails, nameOnCard: e.target.value })} />
        </div>
        <button className="payment-button" type="submit">Secure Payment</button>
      </form>
    </div>
  );
};

export default PaymentPage;
