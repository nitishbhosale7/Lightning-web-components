import { LightningElement, api } from 'lwc';

export default class LwcAuraCommunication extends LightningElement {
    @api title;
    handlechange() {
        const msgevent = new CustomEvent('sendmsg', {
            detail: {
                "msg": "hello from LWc"

            }

        })

        this.dispatchEvent(msgevent);
    }



}