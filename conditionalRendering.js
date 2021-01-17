import { LightningElement } from 'lwc';

export default class App extends LightningElement {
   greeting ='';
   boolValue = false;
   handlerMethod(event){
       this.greeting = event.target.value;
       console.log('Current value of greeting'+this.greeting);
   } 
   checkboxHandler(event){
       this.boolValue = event.target.checked;
       console.log('Boolean value is : '+this.boolValue);
   }   
}
