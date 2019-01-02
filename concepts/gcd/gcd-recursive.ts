
export class GcdRecursive {

    static getGCD(value1 : number, value2: number) {

        if( value2 == 0)
            return value1;

        return this.getGCD(value2, value1  % value2);
    }
}

