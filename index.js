// Dummy worker database (simulation)
const workers = {
  "12345": {
    name: "John Doe",
    tshirt: "T-101",
    type: "Casual",
    leader: "Mr. Brian",
    phone: "0712345678"
  },
  "67890": {
    name: "Mary Atieno",
    tshirt: "T-202",
    type: "Permanent",
    leader: "Mrs. Jane",
    phone: "0798765432"
  }
};

function login() {
  const id = document.getElementById("idNumber").value;
  const phone = document.getElementById("phone").value;
  const worker = workers[id];

  if (worker && worker.phone === phone) {
    document.getElementById("nameOut").textContent = worker.name;
    document.getElementById("tshirtOut").textContent = worker.tshirt;
    document.getElementById("typeOut").textContent = worker.type;
    document.getElementById("leaderOut").textContent = worker.leader;

    // Payment calculation
    let pay = worker.type === "Casual" ? "Ksh 775 / day" : "Ksh 30,000 / month";
    document.getElementById("payOut").innerHTML = `<span class="highlight">${pay}</span>`;

    document.getElementById("workerInfo").style.display = "block";
  } else {
    alert("Worker not found or phone number mismatch!");
  }
}

