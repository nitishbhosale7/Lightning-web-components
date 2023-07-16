import { LightningElement } from 'lwc';

export default class DynamcCss extends LightningElement {
    percentage = 10;

    changeHandler(event) {
        this.percentage = event.target.value;
    }

    get widthchange() {
        return `width: ${this.percentage}%`;

    }
}