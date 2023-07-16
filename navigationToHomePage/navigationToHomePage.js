import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationToHomePage extends NavigationMixin(LightningElement) {
    @api recordId;
    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        })
    }


    NavigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }

        })

    }

    NavigatetoStandard(pageType, objectName, actionName) {

    }

    NavigateToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage', // everything will be in lowercase in type of the page 
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        })
    }


    NavigateToListView() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        })
    }

    NavigateToFiles() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        })
    }







}