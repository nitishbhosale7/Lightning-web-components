import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateToLwc extends NavigationMixin(LightningElement) {

    NavigateToLwc() {


        var defination = {
            componentDef: "c:lwcGame",
            attributes: {
                recordId: '7686765894'
            }
        }

        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: 'one/one/app#' + btoa(JSON.stringify(defination))
            }
        })
    }

}