import React from "react";
import "./Mentors.css";

const mentors = [
  {
    name: "Ajay Balasubramaniam",
    role: "Program Mentor",
    // image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
  {
    name: "Sibishree Maragathavel",
    role: "Technical Mentor",
    // image: "https://via.placeholder.com/150", // Replace with actual image URL
  },
];

const Mentors = () => {
  return (
    <div className="mentors-container">
      {mentors.map((mentor, index) => (
        <div key={index} className="mentor-card">
          <img src={mentor.image} alt={mentor.name} className="mentor-image" />
          <div className="mentor-details">
            <h2 className="mentor-name">{mentor.name}</h2>
            <p className="mentor-role">{mentor.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Mentors;
