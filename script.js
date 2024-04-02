import { topics } from "./data.js";

const {createApp} = Vue;

createApp({
    data(){
        return{
            topics: topics,
            itemText: '',
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
        },
        removeItem(id) {
            const i = this.topics.findIndex((el)=> el.id === id);
            if(i !== -1) {
                this.topics.splice(i,1);
            }
            
        },
        addTodo() {
            const newObj = {
                id: null,
                text: this.itemText,
                done: false
            }
            let nextId = 0;
            this.topics.forEach((el)=>{
                if(nextId < el.id) {
                    nextId = el.id;
                }
            });
            newObj.id = nextId +1;
            this.topics.push(newObj)
            
        }
    }
}).mount('#app')

