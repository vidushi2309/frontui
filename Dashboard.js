// Sample event data
const events = [
    {
      id: 1,
      name: "DiscusForce Throw",
      date: "16/10/2024",
      meet: "Lightning Bolt Championships",
      category: "Throw",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Robert_Harting_%282008%29.jpg/330px-Robert_Harting_%282008%29.jpg",
    },
    {
      id: 2,
      name: "RelayChamp 4x100m",
      date: "30/09/2024",
      meet: "Grand Marathon Challenge",
      category: "4x100m",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
    },
    {
      id: 3,
      name: "Golden Mile Run",
      date: "26/09/2024",
      meet: "Grand Marathon Challenge",
      category: "200M",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2013_IPC_Athletics_World_Championships_-_26072013_-_Maximiliano_Rodriguez_Magi_of_Spain_during_the_Men%27s_Long_jump_-_T12.jpg/1280px-2013_IPC_Athletics_World_Championships_-_26072013_-_Maximiliano_Rodriguez_Magi_of_Spain_during_the_Men%27s_Long_jump_-_T12.jpg",
    },
    {
      id: 4,
      name: "SpeedBurst 200m Sprint",
      date: "24/09/2024",
      meet: "Grand Marathon Challenge",
      category: "200M",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Gold_Relay_UK_WOC_2008-crop.jpg",
    },
    {
      id: 5,
      name: "LeapPro Long Jump",
      date: "18/09/2024",
      meet: "Lightning Bolt Championships",
      category: "10M",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/2013_IPC_Athletics_World_Championships_-_26072013_-_Maximiliano_Rodriguez_Magi_of_Spain_during_the_Men%27s_Long_jump_-_T12.jpg/1280px-2013_IPC_Athletics_World_Championships_-_26072013_-_Maximiliano_Rodriguez_Magi_of_Spain_during_the_Men%27s_Long_jump_-_T12.jpg",
    },
    // Add more events here
  ];
  
  // Function to render event tiles
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
  
  // Function to filter events based on search input
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
  
  // Function to open modal with event details
  function openModal(event) {
    const modal = document.getElementById("registrationModal");
    const eventDetails = document.getElementById("eventDetails");
  
    eventDetails.textContent = `
      Name: ${event.name}\n
      Date: ${event.date}\n
      Meet: ${event.meet}\n
      Category: ${event.category}
    `;
  
    modal.classList.remove("hidden");
  }
  
  // Function to close modal
  function closeModal() {
    const modal = document.getElementById("registrationModal");
    modal.classList.add("hidden");
  }
  
  // Initialize events on page load
  document.addEventListener("DOMContentLoaded", () => {
    renderEvents(events);
  });
  