import { ActionContainer } from "./ActionContainer.js";
import { ActionSingle } from "./ActionSingle.js";
import { TimeContainer } from "./TimeContainer.js";



export class App {

  static #createAction(actionText) {
        const newActionContainer = new ActionContainer(actionText)
        const elementAction = newActionContainer.createElement
        return elementAction
    }

    static #createTime(timeText) {
        const newTimeContainer = new TimeContainer(timeText)
        const elementTime = newTimeContainer.createElement
        return elementTime
    }

    static #createSingleContainer(actionContainer, timeContainer) {
        const newSingleContainer = new ActionSingle(actionContainer, timeContainer)
        const singleContainer = newSingleContainer.ElementActionSingle
        return singleContainer
    }

    static putInActionWrapper(actionText, timeAction, classPlace) {
        const actionElement = App.#createAction(actionText)
        const timeElement = App.#createTime(timeAction)
        const singleContainerElement = App.#createSingleContainer(actionElement, timeElement)
        const button = document.createElement('button')
        button.className = 'btnRemove'
        button.id = 'btnRemove'
        button.type = 'click'
        button.innerText = 'Remover'
        singleContainerElement.appendChild(button)

        const btn = singleContainerElement.querySelector('#btnRemove')
        btn.addEventListener('click', (e) => {
            e.preventDefault()

            const btnTarget = e.target
            const div = btnTarget.closest('.actionSingle')
            div.remove()
        })


        const placeToPut =  document.querySelector(`.${classPlace}`)

        placeToPut.appendChild(singleContainerElement)
         
    }
}