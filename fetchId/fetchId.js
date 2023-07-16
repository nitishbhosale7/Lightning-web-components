import { LightningElement, api } from 'lwc';

export default class FetchId extends LightningElement {
    @api recordId;
    @api objectApiName;
}