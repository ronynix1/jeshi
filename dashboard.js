function loadDashboard() {
  fetch("dashboard.php")
    .then((res) => res.json())
    .then((data) => {
      const tbody = document.querySelector("#workerTable tbody");
      tbody.innerHTML = "";

      data.forEach((worker) => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${worker.name}</td>
          <td>${worker.type}</td>
          <td>${worker.tshirt}</td>
          <td>${worker.job}</td>
          <td>${worker.returned ? "✅" : "❌"}</td>
          <td>${worker.paid ? "💰" : "❌"}</td>
          <td>
            <button onclick="updateStatus(${worker.id}, 'returned')">Mark Returned</button>
            <button onclick="updateStatus(${worker.id}, 'paid')">Mark Paid</button>
          </td>
        `;

        tbody.appendChild(row);
      });
    });
}

function updateStatus(id, field) {
  fetch("updateStatus.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id, field }),
  })
    .then((res) => res.text())
    .then(() => loadDashboard());
}

loadDashboard();
