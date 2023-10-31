'use strict';
const parsValue = (value) =>{
    try {
        return JSON.parse(value);
    }catch (exception){
        return value;
    }
}

module.exports = { parsValue }
