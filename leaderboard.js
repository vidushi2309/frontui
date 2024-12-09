document.addEventListener("DOMContentLoaded", () => {
    // Sample leaderboard data
    const leaderboardData = [
      { rank: 1, name: "Alice Johnson", sport: "Running", score: 95 },
      { rank: 2, name: "Bob Smith", sport: "Swimming", score: 90 },
      { rank: 3, name: "Charlie Brown", sport: "Cycling", score: 88 },
      { rank: 4, name: "Diana Prince", sport: "Running", score: 85 },
      { rank: 5, name: "Ethan Hunt", sport: "Swimming", score: 80 },
      { rank: 6, name: "Fiona Gallagher", sport: "Cycling", score: 78 },
      { rank: 7, name: "George Knight", sport: "Running", score: 75 },
      { rank: 8, name: "Hannah Lee", sport: "Swimming", score: 72 },
      { rank: 9, name: "Ian McKellen", sport: "Cycling", score: 70 },
      { rank: 10, name: "Jessica Pearson", sport: "Running", score: 68 },
    ];
  
    // Populate the leaderboard table
    const leaderboardBody = document.getElementById("leaderboard-body");
    leaderboardData.forEach((entry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.rank}</td>
        <td>${entry.name}</td>
        <td>${entry.sport}</td>
        <td>${entry.score}</td>
      `;
      leaderboardBody.appendChild(row);
    });
  
    // Enable filter by name
    const searchInput = document.getElementById("search-name");
    searchInput.addEventListener("input", (e) => {
      const filter = e.target.value.toLowerCase();
      document.querySelectorAll("#leaderboard-body tr").forEach((row) => {
        const nameCell = row.querySelector("td:nth-child(2)").textContent.toLowerCase();
        row.style.display = nameCell.includes(filter) ? "" : "none";
      });
    });
  });
  