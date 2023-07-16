import { LightningElement, api, track, wire } from 'lwc';
import getFile from '@salesforce/apex/documentHandler.getFile'

export default class PhotoUpload1 extends LightningElement {
    @track lstAllFiles = [];
    @api recordId;
    contentBodyId;
    documentID;
    filename;
    url
    get acceptedFormats() {
        return ['.pdf', '.jpg', '.png'];
    }
    handleUploadFinished(event) {
        // Get the list of uploaded files
        const lstUploadedFiles = event.detail.files[0]
        console.log(lstUploadedFiles)
        this.documentID = lstUploadedFiles.documentID;
        this.filename = lstUploadedFiles.name;
        this.url = getFile(this.documentID)
        console.log(this.url)






    }





}