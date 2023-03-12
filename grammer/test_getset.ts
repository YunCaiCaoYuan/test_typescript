// 属性寄存器
class Person {
    _hp:number = 100;

    // 取值
    get hp() {
        return this._hp;
    }

    // 赋值
    set hp(value) {
        if (value < 0) {
            this._hp = 0;
        } else {
            this._hp = value;
        }
    }
}

let a=new Person();
a.hp -= 180;
document.write(a.hp + "")