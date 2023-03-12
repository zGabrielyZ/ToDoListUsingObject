export class TimeContainer {
    constructor(text) {
        this.span = document.createElement('span')
        this.span.innerText = text
        this.h2 = document.createElement('h2')
        this.h2.innerText = 'Horário:'
        this.createElement = document.createElement('div')

        this.createElement.appendChild(this.h2)
        this.createElement.appendChild(this.span)
        this.createElement.className = 'timeContainer'
    }
}