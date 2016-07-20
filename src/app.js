'use strict';

class Test {
    hello = whom => "Hello " + whom;

    constructor() {
        console.log(this.hello('World'));
    }
}

let test = new Test();
