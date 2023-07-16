import { LightningElement, wire } from 'lwc';
import sampleLMC from "@salesforce/messageChannel/sampleChannel__c";
import {
    publish,
    MessageContext
} from 'lightning/messageService'

export default class LmcComponentA extends LightningElement {

    msg

    @wire(MessageContext)
    context

    inputHandle(event) {
        this.msg = event.target.value

        console.log(this.msg)
    }

    handleChange() {

        const message = {
            recordData: {
                value: this.msg
            }
        }

        publish(this.context, sampleLMC,
            message
        )

        console.log('publish executed')


    }

    handleChange1() {
        window.alert("Button is pressed")
        this.handleChange()
    }

}