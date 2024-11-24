// Function to update the time
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    // Display the time in the 'jam' div
    document.getElementById('jam').textContent = timeString;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial time update
updateTime();
        
        
        // Fungsi untuk memperbarui status baterai
function updateBatteryStatus() {
    navigator.getBattery().then(function(battery) {
        const level = (battery.level * 100).toFixed(0); // Battery level as a percentage
        const charging = battery.charging ? "Pengisian daya" : "Tidak Mengisi Daya";
        
        // Display battery level and charging status
        document.getElementById('batteryLevel').textContent = `${level}% - ${charging}`;
    });
}

// Panggil fungsi untuk memperbarui status baterai
updateBatteryStatus();

// Opsional: Perbarui status baterai setiap 10 detik
setInterval(updateBatteryStatus, 10000);



function checkInternetSpeed() {
    const startTime = Date.now();
    const image = new Image();
    const cacheBuster = startTime + Math.random();
    image.src = `https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png?cb=${cacheBuster}`;
    image.onload = function() {
        const endTime = Date.now();
        const ping = endTime - startTime;
        document.getElementById('internetSpeed').textContent = `${ping} ms`;
    };
}

// Initial internet speed check
checkInternetSpeed();

// Optional: Check internet speed every 3 seconds
setInterval(checkInternetSpeed, 3000);