import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub'

export default class ComponentA extends LightningElement {
    message

    inputHandle(event) {
        this.message = event.target.value;
    }

    handleChange() {
        pubsub.publish('Component A', this.message)
        console.log(this.message)

    }


}