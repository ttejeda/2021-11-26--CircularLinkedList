export default class Base{

    constructor(name, min){
        this._name = name;
        this._min = min;
        this.prev = null;
        this.next = null;
    }

    getName(){
        return this._name;
    }

    getMin(){
        return this._min;
    }

    showInfo(){
        return `${this._name} (en ${this._min} minutos).`;
    }

    setPrev(base){
        this.prev = base;
    }

    setNext(base){
        this.next = base;
    }
}