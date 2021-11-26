export default class List{

    constructor(){
        this._start = null;
    }

    AddBase(base){
        if(!this._start){
            this._start = base;
            this._start.setPrev(this._start);
            this._start.setNext(this._start);
            return true;
        }
        
        let exist = this._search(base.getName());
        let last = this._start.prev;
        if(!exist){
            last.setNext(base);
            base.setPrev(last);
            base.setNext(this._start);
            this._start.setPrev(base);
            return true;
        }

        return false;
    }

    _search(name){
        if(this._start.getName() == name){
            return true;
        }
        let temp = this._start;
        while(temp.next != this._start){
            if(temp.getName() == name){
                return true;
            }
            temp = temp.next;
        }

        return false;
    }
}