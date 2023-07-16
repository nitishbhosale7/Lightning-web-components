import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToAuraComponent extends NavigationMixin(LightningElement) {

    clickHandler() {

        this[NavigationMixin.Navigate]({
            type: 'standard__component',

            attributes: {
                componentName: 'c__auraTarget'
            },
            state: {
                'c__id': "9857349857"
            }
        })
    }
}