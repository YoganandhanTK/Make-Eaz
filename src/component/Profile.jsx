import React from 'react';
import './Profile.css'

const ProfilePage = ({ user }) => {
  // Check if user data exists
  if (!user) {
    return <div>No user data available.</div>;
  }

  const { role, name, email, additionalInfo } = user;

  // Render profile based on user role
  return (
    <div className="profile-page">
      <h1>Profile Page</h1>
      <div className="profile-details">
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>

        {role === 'teacher' && (
          <div>
            <h2>Teacher Profile</h2>
            <p><strong>Subject:</strong> {additionalInfo.subject}</p>
            <p><strong>Years of Experience:</strong> {additionalInfo.experience} years</p>
          </div>
        )}

        {role === 'student' && (
          <div>
            <h2>Student Profile</h2>
            <p><strong>Grade:</strong> {additionalInfo.grade}</p>
            <p><strong>School:</strong> {additionalInfo.school}</p>
          </div>
        )}

        {role !== 'teacher' && role !== 'student' && (
          <div>
            <h2>Unknown Role</h2>
            <p>The role <strong>{role}</strong> is not recognized.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Example usage
const App = () => {
//   const teacherUser = {
//     role: 'teacher',
//     name: 'John Doe',
//     email: 'johndoe@example.com',
//     additionalInfo: {
//       subject: 'Mathematics',
//       experience: 10,
//     },
//   };

  const studentUser = {
    role: 'student',
    name: 'Jane Smith',
    email: 'janesmith@example.com',
    additionalInfo: {
      grade: '10th',
      school: 'XYZ High School',
    },
  };

  return (
    <div>
      {/* <ProfilePage user={teacherUser} /> */}
      {/* <hr /> */}
      <ProfilePage user={studentUser} />
    </div>
  );
};

export default App;
