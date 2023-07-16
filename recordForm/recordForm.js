import { LightningElement } from 'lwc';
import Accobj from '@salesforce/schema/Account';
import Name from '@salesforce/schema/Account.Name';
import Type from '@salesforce/schema/Account.Type';
import Phone from '@salesforce/schema/Account.Phone';
import Industry from '@salesforce/schema/Account.Industry';

export default class RecordForm extends LightningElement {
    object = Accobj;
    accName = Name;
    AccType = Type;
    Accphone = Phone;
    AccIndustry = Industry;


    handleReset() {
        const fields = this.template.querySelectorAll('lightning-input-field');

        if (fields) {
            Array.from(fields).forEach(field => {
                field.reset();
            })
        }
    }

}