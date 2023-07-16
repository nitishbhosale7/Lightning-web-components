import { LightningElement } from 'lwc';
import Accobj from '@salesforce/schema/Account';

export default class LightningRecordViewForm extends LightningElement {

    Account = Accobj;
}