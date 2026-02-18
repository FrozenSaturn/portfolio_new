// Simple Uptime Counter mimicking Linux uptime
const uptimeElement = document.getElementById('uptime');
const startDate = new Date();

function updateUptime() {
    const now = new Date();
    const diff = now - startDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    if (uptimeElement) {
        uptimeElement.innerText = `${hours}h ${minutes % 60}m ${seconds % 60}s`;
    }
}

setInterval(updateUptime, 1000);
updateUptime();
