// src/components/UserDetailsTab.tsx
import React from 'react';
import { Card } from 'antd';
import './UserDetails.css'; 

interface User {
  name: string;
  email: string;
  // Add other user properties if needed
}

interface UserDetailsTabProps {
  user?: User;
}

const UserDetailsTab: React.FC<UserDetailsTabProps> = ({ user }) => {
  if (!user) {
    return <div className="error-message">No user data available. Please try logging in again.</div>;
  }
  return (
    <div className="user-details-container">
      <Card title="User Details" className="user-details-card">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user details if necessary */}
      </Card>
    </div>
  );
};

export default UserDetailsTab;
