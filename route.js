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

    listBases(){
        if(!this._start){
            return "No se ha registrado ninguna base.";
        }

        let temp = this._start;
        let result = "";
        let n = 1;
        do{
            result += ` <b>${n}</b>. ${temp.showInfo()}`;
            temp = temp.next;
            n++;
        } while(temp != this._start);
        return result;
    }

    createCard(name, timeStart, time, message){
        let exist = this._search(name);
        if(!exist || !this._start){
            return "No existe esa base.";
        }
        exist = exist.next;

        let min = exist.getMin();
        let msg = "";
        do{
            if(min >= 60){
                timeStart++;
                min -= 60;
            }
            msg += `${exist.getName()}: ${timeStart}:${min}.<br>`;
            exist = exist.next;
            time -= exist.getMin();
            min += exist.getMin();
        } while(exist.getMin() <= time);

        return message += msg;
    }

    _search(name){
        if(this._start == null){
            return null;
        }
        
        let temp = this._start;
        do{
            if(temp.getName() == name){
                return temp;
            }
            temp = temp.next;
        } while (temp != this._start);
        return null;
    }
}