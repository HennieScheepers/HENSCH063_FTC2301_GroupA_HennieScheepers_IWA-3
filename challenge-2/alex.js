const firstname = "Alex"
const surname = "Naidoo"
//export role
export const role = "Head of Marketing"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
