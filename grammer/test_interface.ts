// 接口
class Person {
    name:string;
}

interface IWolf{
    attack();
}

interface IDog{
    eat();
}

class WolfMan extends Person implements IWolf, IDog {
    attack() {

    }
    eat() {

    }
}