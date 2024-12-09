const events = [
  {
    id: 1,
    name: "DiscusForce Throw",
    date: "16/10/2024",
    meet: "Lightning Bolt Championships",
    category: "Throw",
    image: "https://www.tutorialspoint.com/discus_throw/images/rules_regarding_discus.jpg",
  },
  {
    id: 2,
    name: "RelayChamp 4x100m",
    date: "30/09/2024",
    meet: "Grand Marathon Challenge",
    category: "4x100m",
    image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
  },
  // Add more events here
];

// Render event tiles
function renderEvents(eventList) {
  const eventTiles = document.getElementById("eventTiles");
  eventTiles.innerHTML = ""; // Clear existing tiles

  eventList.forEach((event) => {
    const tile = document.createElement("div");
    tile.className = "event-tile";
    tile.onclick = () => openModal(event);

    tile.innerHTML = `
      <img src="${event.image}" alt="${event.name}" class="event-image" />
      <div class="event-info">
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Meet: ${event.meet}</p>
        <p>Category: ${event.category}</p>
      </div>
    `;

    eventTiles.appendChild(tile);
  });
}

// Filter events
function filterEvents() {
  const query = document.getElementById("searchBar").value.toLowerCase();
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(query) ||
      event.meet.toLowerCase().includes(query) ||
      event.category.toLowerCase().includes(query)
  );
  renderEvents(filteredEvents);
}

// Open registration modal
function openModal(event) {
  const modal = document.getElementById("registrationModal");
  const eventNameInput = document.getElementById("event-name");
  eventNameInput.value = event.name;

  modal.classList.remove("hidden");
}

// Close modal
function closeModal() {
  const modal = document.getElementById("registrationModal");
  modal.classList.add("hidden");
}

// Initialize events
document.addEventListener("DOMContentLoaded", () => {
  renderEvents(events);

  document.getElementById("registrationForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Registration Successful!");
    closeModal();
  });
});
