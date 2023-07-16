import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    handleclick1() {
        this.template.querySelector('c-p2c-slider-component').resetvalue();
    }

}