import { LightningElement, api } from 'lwc';

export default class PhotoUpload extends LightningElement {
    @api
    myRecordId;
    @api recordId;

    get acceptedFormats() {
        return ['.png', '.jpg', '.jpeg'];
    }
    img

    // handleUploadFinished(event) {
    //     // Get the list of uploaded files
    //     const uploadedFiles = event.detail.files;
    //     alert('No. of files uploaded : ' + uploadedFiles.length);
    //     img = uploadedFiles[0].title
    //     console.log(img)

    // }

    fileData
    openfileUpload(event) {
        console.log('0')
        const file = event.target.files[0]
        this.img = file;


        console.log(file)

    }



}