// Simulated data fetching function
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                card1: "Data for Card 1: 100",
                card2: "Data for Card 2: 200"
            });
        }, 2000);
    });
}

// Update the dashboard with fetched data
async function updateDashboard() {
    const data = await fetchData();
    document.getElementById('data1').innerText = data.card1;
    document.getElementById('data2').innerText = data.card2;
}

// Call the function to update the dashboard
updateDashboard();
