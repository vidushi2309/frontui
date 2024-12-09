// Log a message when the page loads
console.log("Athlete profile page loaded!");

// Highlight table rows on hover
document.querySelectorAll("table tbody tr").forEach(row => {
  row.addEventListener("mouseover", () => {
    row.style.backgroundColor = "#f0f8ff";
  });

  row.addEventListener("mouseout", () => {
    row.style.backgroundColor = "transparent";
  });
});

// Add "Update Profile" and "Delete Profile" buttons
const profileInfo = document.querySelector(".profile-info");

// Create "Update Profile" button
const updateButton = document.createElement("button");
updateButton.textContent = "Update Profile";
updateButton.style.marginTop = "10px";
updateButton.style.padding = "10px";
updateButton.style.cursor = "pointer";
profileInfo.appendChild(updateButton);

// Create "Delete Profile" button
const deleteButton = document.createElement("button");
deleteButton.textContent = "Delete Profile";
deleteButton.style.marginTop = "10px";
deleteButton.style.marginLeft = "10px";
deleteButton.style.padding = "10px";
deleteButton.style.cursor = "pointer";
deleteButton.style.backgroundColor = "red";
deleteButton.style.color = "white";
profileInfo.appendChild(deleteButton);

// Modal structure for updating profile
const modal = document.createElement("div");
modal.id = "updateModal";
modal.style.display = "none";
modal.style.position = "fixed";
modal.style.top = "50%";
modal.style.left = "50%";
modal.style.transform = "translate(-50%, -50%)";
modal.style.backgroundColor = "white";
modal.style.padding = "20px";
modal.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
modal.style.zIndex = "1000";
modal.innerHTML = `
  <h3>Update Profile</h3>
  <form id="updateForm">
    <label for="name">Name:</label>
    <input type="text" id="name" placeholder="Enter new name" required><br><br>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" required><br><br>
    <label for="gender">Gender:</label>
    <input type="text" id="gender" placeholder="Enter gender" required><br><br>
    <label for="height">Height (cm):</label>
    <input type="number" id="height" placeholder="Enter height" required><br><br>
    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" placeholder="Enter weight" required><br><br>
    <label for="category">Category:</label>
    <input type="text" id="category" placeholder="Enter category" required><br><br>
    <label for="coach">Coach:</label>
    <input type="text" id="coach" placeholder="Enter coach name"><br><br>
    <button type="submit">Save Changes</button>
    <button type="button" id="closeModal">Cancel</button>
  </form>
`;

// Append modal to body
document.body.appendChild(modal);

// Show modal when clicking "Update Profile"
updateButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
document.getElementById("closeModal").addEventListener("click", () => {
  modal.style.display = "none";
});

// Save updated details
document.getElementById("updateForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const newName = document.getElementById("name").value;
  const newDOB = document.getElementById("dob").value;
  const newGender = document.getElementById("gender").value;
  const newHeight = document.getElementById("height").value;
  const newWeight = document.getElementById("weight").value;
  const newCategory = document.getElementById("category").value;
  const newCoach = document.getElementById("coach").value;

  // Update the profile information
  if (newName) profileInfo.querySelector("h2").textContent = newName;
  profileInfo.querySelectorAll("p")[0].textContent = `Date of Birth: ${newDOB}`;
  profileInfo.querySelectorAll("p")[1].textContent = `Gender: ${newGender}`;
  profileInfo.querySelectorAll("p")[2].textContent = `Height: ${newHeight}`;
  profileInfo.querySelectorAll("p")[3].textContent = `Weight: ${newWeight}`;
  profileInfo.querySelectorAll("p")[4].textContent = `Category: ${newCategory}`;
  profileInfo.querySelectorAll("p")[5].textContent = `Coach: ${newCoach}`;

  alert("Profile updated successfully!");
  modal.style.display = "none";
});

// Delete profile functionality
deleteButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to delete this profile? This action cannot be undone.")) {
    profileInfo.innerHTML = "<h2>Profile Deleted</h2>";
  }
});

// Add sorting functionality to tables
document.querySelectorAll("table thead th").forEach((header, index) => {
  header.style.cursor = "pointer";
  header.addEventListener("click", () => {
    const table = header.closest("table");
    const rows = Array.from(table.querySelectorAll("tbody tr"));
    const isAscending = header.classList.toggle("ascending");

    rows.sort((rowA, rowB) => {
      const cellA = rowA.cells[index].textContent.trim();
      const cellB = rowB.cells[index].textContent.trim();

      // Handle numeric and text sorting
      return isAscending
        ? cellA.localeCompare(cellB, undefined, { numeric: true })
        : cellB.localeCompare(cellA, undefined, { numeric: true });
    });

    // Append sorted rows to the table body
    rows.forEach(row => table.querySelector("tbody").appendChild(row));
  });
});
