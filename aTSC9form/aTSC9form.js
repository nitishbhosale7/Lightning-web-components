import { LightningElement, track } from 'lwc';

export default class ATSC9form extends LightningElement {

    get acceptedFormats() {
        return ['.pdf', '.png'];
    }


    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        alert('No. of files uploaded : ' + uploadedFiles.length);
    }


}