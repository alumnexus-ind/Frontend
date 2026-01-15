import React from 'react';

function Dashboard() {
    // Dummy data for courses
    const courses = [
        { id: 1, title: "React for Beginners", instructor: "CodeWithHarry", price: "Free" },
        { id: 2, title: "Advanced Python", instructor: "CodeWithHarry", price: "$10" },
        { id: 3, title: "Data Structures & Algo", instructor: "CodeWithHarry", price: "$20" },
        { id: 4, title: "Web Design Mastery", instructor: "CodeWithHarry", price: "Free" }
    ];

    return (
        <div className="dashboard-container">
            <h1>My Courses</h1>
            <div className="course-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <h3>{course.title}</h3>
                        <p>Instructor: {course.instructor}</p>
                        <span className="price">{course.price}</span>
                        <button>Start Learning</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
