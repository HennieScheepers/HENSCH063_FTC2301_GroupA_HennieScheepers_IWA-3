// scripts.js

//spelling error @./configuration.js
// needed curly braces
import { company, year } from "./configuration.js"

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message