import { LightningElement, api } from 'lwc';

export default class RichTextImageInput extends LightningElement {

    richtext

    handleChange(e) {
        this.richtext = e.detail.value;
        window.alert(this.richtext)
    }


    @api
    myRecordId;

    get acceptedFormats() {
        return ['.pdf', '.png', '.jpg', '.jpeg'];
    }

    handleUploadFinished(event) {
        // Get the list of uploaded files
        const uploadedFiles = event.detail.files;
        alert('No. of files uploaded : ' + uploadedFiles.length);
        console.log(uploadedFiles[0])
    }

}