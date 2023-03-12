namespace aa {
    export class Person {
        name:string;
    }
}

namespace bb {
    export class Person {
        //
    }
}

let person = new aa.Person();
let person2 = new bb.Person();