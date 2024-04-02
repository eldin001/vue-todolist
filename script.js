import { topics } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            topics: topics,
        }
    }
}).mount('#app')

