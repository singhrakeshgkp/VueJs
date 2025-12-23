import { ref } from "vue";

//export default function useCounter(){
export default function useCounter(initialValue=0,steps=1){
    const count = ref(initialValue)
    function incrementCount(){
        count.value += steps
    }
    return{
        count,
        incrementCount
    }
}