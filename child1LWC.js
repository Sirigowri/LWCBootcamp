import { LightningElement,api,track } from 'lwc';

export default class Child1LWC extends LightningElement {
    @api parVar;
    @track childVar=12;
    @track result;
    connectedCallback(){
        this.result = parseInt(this.parVar)+parseInt(this.childVar);
        console.log('result='+this.result);
        console.log(`result= $this.result`);
    }
}