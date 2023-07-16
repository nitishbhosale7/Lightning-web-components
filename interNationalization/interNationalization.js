import { LightningElement } from 'lwc';
import Locale from "@salesforce/i18n/locale";
import Currency from "@salesforce/i18n/currency";

export default class InterNationalization extends LightningElement {

    number = 4395840.87;
    formattedNumber = new Int1.NumberFormat(Locale, {
        style: 'currency',
        currency: Currency,
        cuurencyDisplay: 'symbol'

    }).format(this.number)
}