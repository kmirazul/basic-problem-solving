export class FindPrimeWithNormalAlgo {

    findPrimeOrNot( value : number ) : string {
        return this.isPrime(value) ? "It is prime" : "It is not prime number";
    }

    private isPrime(value : number) : boolean {
        let counter = 0;
        for(let i = 2 ; i < value/2 ; i++) {
            if( value % i == 0 ) {
                return false;
            }
        }
        return true;
    }
}

console.log(new FindPrimeWithNormalAlgo().findPrimeOrNot(17));
