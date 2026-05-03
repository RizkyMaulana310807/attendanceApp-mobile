import React from "react";

const History: React.FC = () => {
  // Dummy data for history
  const historyItems = [
    { id: 1, date: "2023-10-01", status: "Present" },
    { id: 2, date: "2023-10-02", status: "Absent" },
    { id: 3, date: "2023-10-03", status: "Present" },
  ];

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1 style={{ color: "white" }}>History</h1>
      <ul style={{ color: "white" }}>
        {historyItems.map((item) => (
          <li key={item.id} style={{ color: "white" }}>
            {item.date}: {item.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
