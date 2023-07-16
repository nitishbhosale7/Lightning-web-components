import { LightningElement, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
import Account from '@salesforce/schema/Account';

export default class GetObjectInfo extends LightningElement {
    defaultRecordTypeId
    objectName
    // @wire(getObjectInfo, { objectApiName: Account }) wiredData(data, error) {
    //     if (data) {
    //         console.log(data);
    //         this.defaultRecordTypeId = data.defaultRecordTypeId;
    //         this.objectName = data.apiName;
    //     }
    //     if (error) {
    //         console.log(error);
    //     }
    // }

    @wire(getObjectInfo, { objectApiName: Account }) wiredData
}