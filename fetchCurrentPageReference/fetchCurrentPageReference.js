import {
    LightningElement,
    wire
} from 'lwc';
import { CurrentReferencePage } from 'lightning/navigation';

export default class FetchCurrentPageReference extends LightningElement {
    @wire(CurrentReferencePage) pageRef

    get currentpageinfo() {
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : '';
    }
}