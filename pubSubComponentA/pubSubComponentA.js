import { LightningElement } from 'lwc';
import pubSub from 'c/pubSub';

export default class PubSubComponentA extends LightningElement {

    message;
    handleChange(event){
        this.message = event.target.value;
        console.log("message",this.message);
    }

    handleClick(event){
        console.log('clicked'+this.message);
        pubSub.publish('sendData',this.message).then(()=>{
            console.log('published');
        }).catch((error)=>{
            console.log('error while publishing',error)
        });
        
    }

}