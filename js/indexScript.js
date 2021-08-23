const jon = require('../json/websites.json');
const websiteURL = jon[Math.fllor(Math.random() * jon.length)]
window.location.href = websiteURL;