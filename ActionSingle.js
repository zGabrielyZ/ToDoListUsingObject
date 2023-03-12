export class ActionSingle {
    constructor(actionContainer, timeContainer) {
        this.action = actionContainer
        this.time = timeContainer
        this.ElementActionSingle = document.createElement('div')
        this.ElementActionSingle.appendChild(this.action)
        this.ElementActionSingle.appendChild(this.time)
        this.ElementActionSingle.className = 'actionSingle'
    }
}