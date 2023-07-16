import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {

    val = 50;

    handleclick(event) {
        this.val = event.target.value;
    }


    @api resetvalue() {
        this.val = 50
    }

}