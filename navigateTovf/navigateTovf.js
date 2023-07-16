import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateTovf extends NavigationMixin(LightningElement) {
    handleClick() {
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: "/apex/navigateTovf"

            }
        }).then((generatedUrl) => {
            console.log("printed succesfully");
            window.alert(generatedUrl, "printedSuccesfully");
        })
    }
}