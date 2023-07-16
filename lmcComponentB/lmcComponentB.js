import { LightningElement, wire } from 'lwc';
import sampleLMC from "@salesforce/messageChannel/sampleChannel__c";
import { subscribe, unsubscribe, MessageContext, APPLICATION_SCOPE }
from 'lightning/messageService';

export default class LmcComponentB extends LightningElement {
    receivedMsg
    connectedCallback() {
        this.subscribeMessage()
        console.log('subscribe executed')
    }

    @wire(MessageContext) context

    subscribeMessage() {
        subscribe(this.context, sampleLMC, (message) => { this.handleMessage(message) }, { scope: APPLICATION_SCOPE })
        console.log('subscribe executed')
    }

    handleMessage() {
        this.receivedMsg = message.recordData.value ? message.recordData.value : "No message Published"
        console.log("handleMessage Executed")

    }
}