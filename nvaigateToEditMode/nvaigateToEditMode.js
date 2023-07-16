import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NvaigateToEditMode extends NavigationMixin(LightningElement) {
    editHandle() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: "Account",
                recordId: "0015j000008H6S2AAK",
                actionName: 'edit'
            }
        })
    }

    viewHandle() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: "Account",
                recordId: "0015j000008H6S2AAK",
                actionName: 'view'
            }
        })
    }
}