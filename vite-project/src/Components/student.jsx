import React from "react";
import "./StudentProfile.css"; // import CSS file
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const StudentProfile = () => {
  const student = {
    name: "John Doe",
    email: "johndoe@email.com",
    level: 3,
    points: 1250,
    coursesCompleted: 5,
    contestsParticipated: 8,
    peerMatches: 12,
    rank: 15,
  };

  // Donut Chart Data
  const data = [
    { name: "Easy", value: 30 },
    { name: "Medium", value: 50 },
    { name: "Hard", value: 20 },
  ];

  const COLORS = ["#90EE90", "#FFB347", "#FF6347"]; // green, orange, red

  return (
    <div className="profile-container">
      {/* User Profile Section */}
      <div className="profile-section">
  <img src="https://via.placeholder.com/120" alt="User Profile" />
  <h2>John Doe</h2>
  <p className="email">johndoe@example.com</p>
  <p className="about">
    Passionate learner, exploring coding, contests, and peer learning. 
    Always curious to improve skills and help others grow.
  </p>
</div>

      {/* Stats Section */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2>{student.points}</h2>
          <p>Points</p>
        </div>
        <div className="stat-card">
          <h2>{student.coursesCompleted}</h2>
          <p>Courses</p>
        </div>
        <div className="stat-card">
          <h2>{student.contestsParticipated}</h2>
          <p>Contests</p>
        </div>
        <div className="stat-card">
          <h2>{student.peerMatches}</h2>
          <p>Peer2Peer</p>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="leaderboard">
        <h3>Leaderboard Rank</h3>
        <p>
          You are currently ranked{" "}
          <span className="highlight">#{student.rank}</span> among your peers.
        </p>
      </div>
<div className="activities"> <h3>Recent Activities</h3> <ul> <li>✅ Completed "JavaScript Basics" course</li> <li>🏆 Ranked #5 in "Codeverse August Contest"</li> <li>🤝 Won 3 Peer2Peer matches</li> </ul> </div>
     

      {/* Skills Section */}
      <div className="skills-section">
        <h2>Skills</h2>

        <div className="skill-category">
          <h3 className="category advanced">Advanced</h3>
          <span className="skill">
            Dynamic Programming <small>x6</small>
          </span>
          <span className="skill">
            Divide and Conquer <small>x2</small>
          </span>
          <span className="skill">
            Trie <small>x2</small>
          </span>
        </div>

        <div className="skill-category">
          <h3 className="category intermediate">Intermediate</h3>
          <span className="skill">
            Math <small>x30</small>
          </span>
          <span className="skill">
            Database <small>x28</small>
          </span>
          <span className="skill">
            Hash Table <small>x17</small>
          </span>
        </div>

        <div className="skill-category">
          <h3 className="category fundamental">Fundamental</h3>
          <span className="skill">
            Array <small>x59</small>
          </span>
          <span className="skill">
            String <small>x23</small>
          </span>
          <span className="skill">
            Two Pointers <small>x18</small>
          </span>
        </div>
      </div>
       {/* Donut Chart Section */}
      <div className="chart-section">
        <h3>Problem Difficulty Breakdown</h3>
        <PieChart width={400} height={300}>
          <Pie
            data={data}
            cx={200}
            cy={150}
            innerRadius={60}
            outerRadius={100}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default StudentProfile;
