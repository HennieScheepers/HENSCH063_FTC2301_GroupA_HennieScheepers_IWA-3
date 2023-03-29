const firstname = "Johannes"
const surname = "Potgieter"
//export role
export const role = "Intern"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
