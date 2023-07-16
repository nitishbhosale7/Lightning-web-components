import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler() {
        const closeevent = new CustomEvent('close', {
            detail: {
                msg: "Hello DATA from child",
                number: 20
            }
        });
        this.dispatchEvent(closeevent)
    }
}