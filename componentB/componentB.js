import { LightningElement } from 'lwc';
import pubsub from 'c/pubSub'

export default class ComponentB extends LightningElement {
    message;
    connectedCallback() {
        this.callSubscriber()
        console.log('Component B' + this.message);
    }

    callSubscriber() {

        pubsub.subscribe('Component A', (message) => {
            this.message = message
        })

    }

}