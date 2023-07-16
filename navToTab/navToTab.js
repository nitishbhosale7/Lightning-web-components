import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavToTab extends NavigationMixin(LightningElement) {
    openTab() {
        this[NavigationMixin.Navigate]({
            type: "standard__navItempage",
            attributes: {
                apiName: 'TraineeForm'
            }
        })

    }

    get options() {
        return [
            { label: 'Salesforce resources', value: 'SalesforceResources' },
            { label: 'Component', value: 'Components' },
        ];
    }




}