const batteryPercent = document.getElementById("batteryPercent")
const batteryStatus = document.getElementById("batteryStatus")

showBatteryInfo()

function showBatteryInfo() {
    //Get battery info 
    navigator.getBattery()
    .then(function(battery) {
        const level = battery.level * 100
        batteryPercent.textContent = level + " %"
        batteryStatus.textContent = (battery.charging) ? "Charging" : "On Battery"
    });
}
