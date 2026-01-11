import React from "react";

const Stats = () => {
  return (
    <div className="stats">
      <div className="total-members">
        <h3>10</h3>
        <p>Total members</p>
      </div>
      <div className="total-tasks">
        <h3>14</h3>
        <p>Total Tasks</p>
      </div>
      <div className="pending-tasks">
        <h3>8</h3>
        <p>Pending Tasks</p>
      </div>
      <div className="meetings">
        <h3>4</h3>
        <p>Upcoming Meetings</p>
      </div>
    </div>
  );
};

export default Stats;
