import { LightningElement } from 'lwc';
import CustomLabel from '@salesforce/label/c.NewLabel';
import CustomLabel1 from '@salesforce/label/c.NewLabel1';

export default class CustomLabels extends LightningElement {
    Label = {
        para1: CustomLabel,
        para2: CustomLabel1
    }
}