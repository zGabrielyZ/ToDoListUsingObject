import { App } from "./App.js";

const form = document.querySelector('form')
const inputAction = document.getElementById('action')
const inputTime = document.getElementById('time')




form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    App.putInActionWrapper(inputAction.value, inputTime.value, 'actionWrapper')
    
})

