import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavigateToNewRecord extends NavigationMixin(LightningElement) {
    CreateNew() {

        const defaults = encodeDefaultFieldValues({
            Name: "Default",
            Phone: "26523756832576",
            AccountNumber: "dfhdafsjhdf"
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
            state: {
                defaultFieldvalues: defaults
            }
        })
    }
}