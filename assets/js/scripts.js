    // Simulate live visitors with random number for demo
    function updateVisitorCount() {
        const visitorCount = Math.floor(Math.random() * 100 + 1); // Random between 1–100
        document.getElementById('liveVisitors').textContent = visitorCount;
    }

    // Update every 5 seconds
    setInterval(updateVisitorCount, 5000);

    // Initial update
    updateVisitorCount();