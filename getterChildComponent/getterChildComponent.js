import { LightningElement, api } from 'lwc';

export default class GetterChildComponent extends LightningElement {
    userdata
    @api get detail() {
        return this.userdata
    }

    set detail(data) {
        this.userdata = {...data, "state": "maharashtra" }
        this.userdata.age = data.age * 2;
    }
}