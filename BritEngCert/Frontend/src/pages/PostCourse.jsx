import { useState } from 'react';
import axios from 'axios'; 
import "../assets/css/post.css";
import Sidebar from '../components/SideNavBar';

const PostCourse = () => { 
  const [courseName, setCourseName] = useState('');
  const [description, setCourseSummary] = useState('');
  const [duration, setCourseDuration] = useState('');
  const [cost, setCourseCost] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem('token');

    const formData = { 
      "courseName": courseName,
      "description": description,
      "duration": duration,
      "cost": parseFloat(cost)
    };

    try {
      const response = await axios.post('http://localhost:8181/api/v1/user/api/v1/course', formData, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 202) {
        console.log('Course posted successfully');
      
        setCourseName('');
        setCourseSummary('');
        setCourseDuration('');
        setCourseCost('');
        setShowSuccessMessage(true);
      } else {
        console.error('Failed to post course');
      }
    } catch (error) {
      console.error('Error posting course:', error);
    }
  };

  return (
    <div>
      <Sidebar className='e'/>
      <div className='post-body'>
        <div className='post-container'>
          <form className='post-form' onSubmit={handleSubmit}>
            <h2 className='post-h2'>Post a New Course</h2>
            
            <div>
              <label className='post-label' htmlFor="courseName">Course Name:</label>
              <input
                className='post-input'
                type="text"
                id="courseName"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='post-label' htmlFor="courseSummary">Course Summary:</label>
              <textarea
                className='post-textsummary'
                id="courseSummary"
                value={description}
                onChange={(e) => setCourseSummary(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='post-label' htmlFor="courseDuration">Course Duration:</label>
              <input
                className='post-input'
                type="text"
                id="courseDuration"
                value={duration}
                onChange={(e) => setCourseDuration(e.target.value)}
                required
              />
            </div>
            <div>
              <label className='post-label' htmlFor="courseCost">Course Cost:</label>
              <input
                className='post-input'
                type="text"
                id="courseCost"
                value={cost}
                onChange={(e) => setCourseCost(e.target.value)}
                required
              />
            </div>
            <button className='post-but' type="submit">Post Course</button>
          </form>
        </div>
      </div>
      {showSuccessMessage && (
        <div className="success-message">
          <p>Course created successfully!</p>
        </div>
      )}
    </div>
  );
};

export default PostCourse;
