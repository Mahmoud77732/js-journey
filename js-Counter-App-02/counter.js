
export default class Counter{
    constructor(){
        this.value = 0;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }

    reset() {
        this.value = 0;
    }

    getValue() {
        return this.value;
    }
}
