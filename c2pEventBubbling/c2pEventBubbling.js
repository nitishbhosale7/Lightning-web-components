import { LightningElement } from 'lwc';

export default class C2pEventBubbling extends LightningElement {
    val = 50;

    handleChange20() {
        this.val = 20;
    }

    handleChange60() {
        this.val = 60
    }

    handleChange100() {
        this.val = 100
    }

    handleChange(event) {
        this.val = event.target.value

        const valueChange = new CustomEvent('differ', {
            bubbles: true,
            detail: {
                value1: this.val
            }
        })

        this.dispatchEvent(valueChange)
    }


}