// cookies.js

// Function to set a cookie
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Expire after 'days' days
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to check if the cookie consent has been accepted
function checkCookieConsent() {
    let consent = getCookie("cookie_consent");
    if (!consent) {
        document.getElementById("cookie-banner").style.display = "block"; // Show the banner if no consent
    }
}

// Function to accept cookies
function acceptCookies() {
    setCookie("cookie_consent", "accepted", 365); // Store consent for 365 days
    document.getElementById("cookie-banner").style.display = "none"; // Hide the banner
}

// Event Listener for Accept Button
document.getElementById("accept-cookies").addEventListener("click", acceptCookies);

// Run the check on page load
window.onload = checkCookieConsent;
