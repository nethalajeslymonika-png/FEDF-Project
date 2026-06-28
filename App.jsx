import { useState } from "react";
import "./App.css";

const courseData = {
  "Web Design": {
    Beginner: ["HTML Basics", "CSS Fundamentals"],
    Intermediate: ["Responsive Web Design", "JavaScript Basics"],
    Advanced: ["Advanced Frontend Design", "UI Components"]
  },
  Programming: {
    Beginner: ["C Programming Basics", "Introduction to Python"],
    Intermediate: ["Object Oriented Programming", "Java Fundamentals"],
    Advanced: ["Advanced Java Programming", "Problem Solving Techniques"]
  },
  "Problem Solving": {
    Beginner: ["Logical Thinking Basics", "Simple Coding Problems"],
    Intermediate: ["Algorithm Design", "Coding Practice"],
    Advanced: ["Competitive Programming", "Advanced Algorithms"]
  },
  "Artificial Intelligence": {
    Beginner: ["Introduction to AI", "Machine Learning Basics"],
    Intermediate: ["Machine Learning Models", "Data Analysis"],
    Advanced: ["Deep Learning", "AI Applications"]
  },
  "Data Structures": {
    Beginner: ["Arrays and Strings", "Stack and Queue Basics"],
    Intermediate: ["Linked List and Trees", "Searching and Sorting"],
    Advanced: ["Graph Algorithms", "Advanced Data Structures"]
  },
  "Frontend Development": {
    Beginner: ["HTML and CSS", "JavaScript Basics"],
    Intermediate: ["Responsive Design", "Bootstrap Basics"],
    Advanced: ["React Basics", "Advanced Frontend Projects"]
  },
  "Database Management": {
    Beginner: ["Introduction to Databases", "SQL Basics"],
    Intermediate: ["Advanced SQL", "Database Design"],
    Advanced: ["Database Administration", "MongoDB Basics"]
  },
  "Software Development": {
    Beginner: ["Software Basics", "SDLC Introduction"],
    Intermediate: ["Software Testing", "Agile Development"],
    Advanced: ["Full Stack Projects", "Software Architecture"]
  },
  "Computational Thinking": {
    Beginner: ["Computational Basics", "Logical Concepts"],
    Intermediate: ["Pattern Recognition", "Problem Breakdown"],
    Advanced: ["Advanced Computational Logic", "Intelligent Systems"]
  },
  "App Development": {
    Beginner: ["Mobile App Basics", "Android Introduction"],
    Intermediate: ["Android Studio", "Firebase Basics"],
    Advanced: ["Advanced App Development", "Cross Platform Apps"]
  }
};

function App() {
  const [page, setPage] = useState("login");
  const [interest, setInterest] = useState("");
  const [level, setLevel] = useState("");
  const [courses, setCourses] = useState([]);
  const [rating, setRating] = useState("");
  const [feedback, setFeedback] = useState("");

  const signupUser = () => {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Student Account Created Successfully");
    setPage("login");
  };

  const loginUser = () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
      alert("Login Successful");
      setPage("dashboard");
    } else {
      alert("Invalid Username or Password");
    }
  };

  const recommendCourse = () => {
    if (!interest || !level) {
      alert("Please select Course Area and Skill Level");
      return;
    }

    setCourses(courseData[interest][level]);
  };

  const submitReview = () => {
    if (!rating || !feedback) {
      alert("Please provide rating and feedback");
      return;
    }

    localStorage.setItem("rating", rating);
    localStorage.setItem("feedback", feedback);

    alert("Review Submitted Successfully");
  };

  const logoutUser = () => {
    alert("Logged Out Successfully");
    setPage("login");
  };

  if (page === "signup") {
    return (
      <div className="container">
        <h2>Create Student Account</h2>

        <p>
          Register to access courses, submit ratings, and share your feedback.
        </p>

        <input
          type="text"
          id="signupUsername"
          placeholder="Choose Username"
        />

        <input
          type="password"
          id="signupPassword"
          placeholder="Choose Password"
        />

        <button className="btn" onClick={signupUser}>
          Sign Up
        </button>

        <p>
          Already have an account?
          <a href="#" onClick={() => setPage("login")}>
            Login
          </a>
        </p>
      </div>
    );
  }

  if (page === "dashboard") {
    return (
      <div className="container dashboard-container">
        <h2>Student Feedback & Course Rating</h2>

        <p>
          Select a course area and skill level to view recommended courses and
          submit ratings and feedback.
        </p>

        <div className="dashboard-cards">
          <div className="card">
            <h3>10</h3>
            <p>Course Areas</p>
          </div>

          <div className="card">
            <h3>3</h3>
            <p>Skill Levels</p>
          </div>

          <div className="card">
            <h3>5★</h3>
            <p>Rating Scale</p>
          </div>
        </div>

        <label>Choose Course Area</label>

        <select
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          <option value="">-- Select Course Area --</option>
          {Object.keys(courseData).map((course) => (
            <option key={course}>{course}</option>
          ))}
        </select>

        <label>Choose Skill Level</label>

        <select
          value={level}
          onChange={(e) => setLevel(e.target.value)}
        >
          <option value="">-- Select Skill Level --</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>

        <button className="btn" onClick={recommendCourse}>
          View Courses
        </button>

        {courses.length > 0 && (
          <div className="result">
            <h3>Recommended Courses</h3>

            <ul>
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>

            <h3>Rate & Review</h3>

            <select
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            >
              <option value="">Select Rating</option>
              <option value="1">⭐ 1 Star</option>
              <option value="2">⭐⭐ 2 Stars</option>
              <option value="3">⭐⭐⭐ 3 Stars</option>
              <option value="4">⭐⭐⭐⭐ 4 Stars</option>
              <option value="5">⭐⭐⭐⭐⭐ 5 Stars</option>
            </select>

            <textarea
              placeholder="Enter your feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />

            <button className="btn" onClick={submitReview}>
              Submit Review
            </button>

            <h3>Sample Reviews</h3>

            <p>⭐⭐⭐⭐⭐ Excellent course for beginners.</p>
            <p>⭐⭐⭐⭐ Good practical examples.</p>
            <p>⭐⭐⭐⭐⭐ Highly recommended for students.</p>
          </div>
        )}

        <button className="btn logout" onClick={logoutUser}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Student Feedback & Course Rating</h2>

      <p>
        Login to view courses, provide ratings, and share feedback.
      </p>

      <input
        type="text"
        id="loginUsername"
        placeholder="Username"
      />

      <input
        type="password"
        id="loginPassword"
        placeholder="Password"
      />

      <button className="btn" onClick={loginUser}>
        Login
      </button>

      <p>
        Don't have an account?
        <a href="#" onClick={() => setPage("signup")}>
          Create Account
        </a>
      </p>
    </div>
  );
}

export default App;