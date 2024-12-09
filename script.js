document.addEventListener("DOMContentLoaded", () => {
    // For Performance Page (Chart.js)
    if (document.getElementById("performanceChart")) {
      const ctx = document.getElementById("performanceChart").getContext("2d");
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar'],
          datasets: [{ label: 'Performance', data: [10, 20, 30], borderColor: 'blue' }]
        }
      });
    }

  }

  