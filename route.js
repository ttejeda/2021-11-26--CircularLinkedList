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

    deleteBase(name){
        let exist = this._search(name);
        if(!exist){
            return null;
        }

        let temp = this._start;
        if(this._start.getName() == name){
            if(this._start.next == this._start){
                this._start = null;
                return temp;
            } else {
                this._start = this._start.next;
                temp.prev.setNext(temp.next);
                temp.next.setPrev(temp.prev);
                temp.setPrev(null);
                temp.setNext(null);
                return temp;
            }
        }

        while(temp.getName() != name){
            temp = temp.next;
        }

        temp.prev.setNext(temp.next);
        temp.next.setPrev(temp.prev);
        temp.setPrev(null);
        temp.setNext(null);
        return temp;
    }

    _search(name){
        if(this._start == null){
            return false;
        }
        
        if(this._start.getName() == name){
            return true;
        }

        let temp = this._start.next;
        while(temp != this._start){
            if(temp.getName() == name){
                return true;
            }
            temp = temp.next;
        }
        return false;
    }
}