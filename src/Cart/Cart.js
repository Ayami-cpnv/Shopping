"use strict";

const EmptyCartException = require("../Cart/EmptyCartException");
const UpdateCartException = require("../Cart/UpdateCartException");

module.exports = class Cart {

    //region private attributes
    #items = [];
    //endregion private attributes

    //region public methods
    constructor(items = null) {
        throw new Error();
    }

    get items() {
        throw new Error();
    }

    get total(){
        throw new Error();
    }

    count(distinct = false){
        throw new Error();
    }

    add(items){
        throw new Error();
    }
    //endregion public methods

    //region private methods
    //endregion private methods
}