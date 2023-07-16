import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    showModal = false;
    showModal1 = false
    msg
    no
    handleChange() {
        this.showModal = true;
        this.showModal1 = true;
    }

    closeAll(event) {
        this.showModal = false;

        this.msg = event.detail.msg;
        this.no = event.detail.number;
    }



}