import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';
export default class PubSubComponentB extends LightningElement {

    message;
    connectedCallback(){
        this.subscribe();
    }

    subscribe(){
        pubSub.subscribe('sendData',(message)=>{
            console.log('Messsage from A'+message);
            this.message=message;
        })
    }
}