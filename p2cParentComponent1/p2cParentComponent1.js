import { LightningElement } from 'lwc';

export default class P2cParentComponent1 extends LightningElement {

    pvalue
    handleclick(event) {

        this.pvalue = event.target.value;

    }
}