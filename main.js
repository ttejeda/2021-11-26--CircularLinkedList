import Base from './base.js';
import Route from './route.js';

class App{

    constructor() {
        this._route = new Route();
        let btnAdd = document.getElementById("btnAdd");
        let btnDelete = document.getElementById("btnDelete");
        let btnList = document.getElementById("btnList");
        let btnCard = document.getElementById("btnCard");
        btnAdd.addEventListener("click", this._addBase);
        btnDelete.addEventListener("click", this._deleteBase);
        btnList.addEventListener("click", this._listBases);
        btnCard.addEventListener("click", this._createCard);
    }

    _addBase = () => {
        let base = this._readForm();

        if(!base){
            this._setMessage("Se deben de llenar todos los campos.");
            return;
        }

        let add = this._route.AddBase(base);
        if(!add){
            this._setMessage("Esta base ya fue agregada.");
            return;
        }
        this._setMessage("Agregado " + base.showInfo());
    }

    _deleteBase = () => {
        let name = this._readName();
        if(!name){
            this._setMessage("Ingresa un nombre.");
            return;
        }
        let result = this._route.deleteBase(name);
        if(!result){
            this._setMessage(result);
            return;
        }

        this._setMessage("Eliminado " + result.showInfo());
    }

    _listBases = () => {
        let result = this._route.listBases();
        this._setMessage(result);
    }

    _setMessage(message){
        this._console = document.getElementById("result");
        let action = document.createElement("p");
        action.innerHTML = `<p>${message}</p>`;
        this._console.appendChild(action);
    }

    _readName(){
        let inpName = document.getElementById("name");
        let name = inpName.value;
        inpName.value = "";
        return name;
    }

    _readForm(){
        let inpName = document.getElementById("name");
        let inpMin = document.getElementById("time");
        
        let name = inpName.value;
        let min = Number(inpMin.value);

        if(!name || !min){
            return false;
        }

        inpName.value = "";
        inpMin.value = "";
        return new Base(name, min);
    }
}

new App();