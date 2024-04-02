import { topics } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            topics: topics,
        }
    },
    methods: {
        toggleDone(id){
            const element = this.topics.find((el)=>{
                return el.id === id;
            })
            if(element) {
            element.done = !element.done;
        }
        }
    }
}).mount('#app')

