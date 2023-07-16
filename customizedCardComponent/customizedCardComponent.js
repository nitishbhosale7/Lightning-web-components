import { LightningElement } from 'lwc';

export default class CustomizedCardComponent extends LightningElement {

    changeHandler() {
        const footer = this.template.querySelector('.slds-card__footer ')
        if (footer) {
            footer.classList.remove('slds-hide')
        }

    }
}