import { LightningElement } from 'lwc';
import signinTemplate from './signinTemplate.html';
import signupTemplate from './signupTemplate.html';
import renderTemplate from './rendorMethod.html';


export default class RendorMethod extends LightningElement {

    selectedbtn = ''

    render() {

        return this.selectedbtn === 'Sign in' ? signinTemplate : this.selectedbtn === 'Sign up' ? signupTemplate : renderTemplate
    }


    handleClick(event) {
        this.selectedbtn = event.target.label;
    }

    handleback(event) {
        this.selectedbtn = '';
    }

}