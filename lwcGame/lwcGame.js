import { LightningElement, api } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';

export default class LwcGame extends LightningElement {

    @api recordId
    isLoaded = false
    renderedCallback() {
        if (this.isLoaded) {
            return
        } else {
            loadStyle(this, fontawesome + "/fontawesome/css/font-awesome.min.css").then(() => { console.log("Library Loaded Succesfully") }).catch((error) => { console.log(error) })
            this.isLoaded = true;

        }


    }
}