const batteryPercent = document.getElementById("batteryPercent");
const batteryStatus = document.getElementById("batteryStatus");
const browser = document.getElementById("browser");
const platform = document.getElementById("platform");
const notSupported = document.getElementById("notSupported");
const deviceContent = document.getElementById("deviceContent");

showDeviceInfo();

async function showDeviceInfo() {
    
    const isSupported = navigator && 'getBattery' in navigator;

    //Show battery & other device info if navigator is supported
    if (isSupported) {
        navigator.getBattery()
            .then(function (battery) {

                battery.addEventListener('levelchange', () => {
                    updateBatteryInfo(battery);
                });

                battery.addEventListener('chargingchange', () => {
                    updateBatteryInfo(battery);
                });
                updateBatteryInfo(battery);

            });

        browser.textContent = navigator.userAgentData.brands[2].brand
        platform.textContent = navigator.userAgentData.platform
    }else {
        deviceContent.classList.add("hide");
        notSupported.classList.remove("hide");
    }

}

function updateBatteryInfo(battery) {
    batteryPercent.textContent =  `${Math.round(battery.level * 100)} %`;
    batteryStatus.textContent = (battery.charging) ? "Charging" : "On Battery";
}