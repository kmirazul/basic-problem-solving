
export class GCD {

    static getGCD(value1 : number, value2 : number) {
        let n1 = value1, n2 = value2, gcd = 1, index = 1;

        while ( index <= n1 && index <= n2 ) {
           if(n1 % index == 0 && n2 % index == 0)
               gcd = index;
           index++;
        }
        return gcd;
    }
}