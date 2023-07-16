import { LightningElement } from 'lwc';

export default class ShadowDOM extends LightningElement {

    button = true;


    fetch() {

        const divs = this.template.querySelector('h1');
        window.alert(divs.innerText)
        divs.style.border = '1px solid red';


    }

    Players = ["Ronaldo", "Messi", "Rooney", "Ronaldhino", "Neymar", "Pogba", "Marcelo"];



    fetch1() {



        const lists = this.template.querySelectorAll('.footballers')

        Array.from(lists).forEach(item => {
            console.log(item.innerText)
            item.setAttribute('title', item.innerText)
            item.innerText = "Null"

            if (item.innerText == "null") {
                item.innerText = element;
            }
        })
    }









}