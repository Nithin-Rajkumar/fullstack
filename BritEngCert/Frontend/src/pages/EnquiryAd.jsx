import { useState } from 'react';
 import Sidebar from "../components/SideNavBar";
import "../assets/css/enquiryad.css"; // Import CSS for styling
import AdNavbar from '../components/AdminNavBar';

const EnquiriesAd = () => {
  // Sample data for enquiries (replace with actual data from your backend)
  const [enquiries, setEnquiries] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },
    { id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },{ id: 1, name: "John Doe", email: "john@example.com", message: "I'm interested in the Python course. Can you provide more details?" },
    { id: 2, name: "Alice Smith", email: "alice@example.com", message: "Do you offer any discounts for group enrollments?" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", message: "Is there a trial period for the Machine Learning course?" },// Add more enquiries here...
  ]);
 
  const handleReply = (id) => { 
    console.log(`Replying to enquiry with ID: ${id}`);
  };
 
  const handleDelete = (id) => { 
    setEnquiries(enquiries.filter(enquiry => enquiry.id !== id));
  };

  return (
    <div className="enquiries_page_enquiryad">
      <AdNavbar />
      <div className="homeContainer_enquiryad">
        <Sidebar className="sidebar_enquiryad"/>
        <div className="dashboardContent_enquiryad">
          <h2>Enquiries</h2>
          <div className="enquiries_container_enquiryad">
            {enquiries.map(enquiry => (
              <div className="enquiry_card_enquiryad" key={enquiry.id}>
                <div className="enquiry_info_enquiryad">
                  <h3>{enquiry.name}</h3>
                  <p>Email: {enquiry.email}</p>
                  <p>{enquiry.message}</p>
                </div>
                <div className="enquiry_actions_enquiryad">
                  <button onClick={() => handleReply(enquiry.id)}>Reply</button>
                  <button onClick={() => handleDelete(enquiry.id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnquiriesAd;
// import { useState, useEffect } from 'react';
// import Sidebar from "../components/SideNavBar";
// import "../assets/css/enquiryad.css"; // Import CSS for styling
// import AdNavbar from '../components/AdminNavBar';

// const EnquiriesAd = () => {
//   const [enquiries, setEnquiries] = useState([]);
//   const token = sessionStorage.getItem('token');
//   console.log(token);
//   useEffect(() => {
//     const fetchEnquiries = async () => {
//       try {
//         const response = await fetch("http://localhost:8181/api/v1/user/enquirylist", {
//           headers: {
//             'Authorization': `Bearer ${token}` // Assuming getSessionToken() retrieves the session token
//           }
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch enquiries');
//         }
//         const data = await response.json();
//         console.log("Fetched data:", data); // Add this line to log fetched data
//         setEnquiries(data);
//       } catch (error) {
//         console.error("Error fetching enquiries:", error);
//       }
//     };
//     fetchEnquiries();
//   }, []);
  
//   const handleReply = (id) => { 
//     console.log(`Replying to enquiry with ID: ${id}`);
//   };
 
//   const handleDelete = (id) => { 
//     setEnquiries(enquiries.filter(enquiry => enquiry.enquiryId !== id));
//   };

//   return (
//     <div className="enquiries_page_enquiryad">
//       <AdNavbar />
//       <div className="homeContainer_enquiryad">
//         <Sidebar className="sidebar_enquiryad"/>
//         <div className="dashboardContent_enquiryad">
//           <h2>Enquiries</h2>
//           <div className="enquiries_container_enquiryad">
//             {Array.isArray(enquiries) && enquiries.length > 0 ? (
//               enquiries.map(enquiry => (
//                 <div className="enquiry_card_enquiryad" key={enquiry.enquiryId}>
//                   <div className="enquiry_info_enquiryad">
//                     <h3>{enquiry.title}</h3>
//                     <p>Email: {enquiry.description}</p>
//                     <p>{enquiry.message}</p>
//                   </div>
//                   <div className="enquiry_actions_enquiryad">
//                     <button onClick={() => handleReply(enquiry.enquiryId)}>Reply</button>
//                     <button onClick={() => handleDelete(enquiry.enquiryId)}>Delete</button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <p>No enquiries found.</p>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
  
// };

// export default EnquiriesAd;
