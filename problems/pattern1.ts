// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21

// suppose user given input = 17 then output is :

// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

class Pattern1 {

    constructor ( public upto : number ) {
        this.printPattern(upto);       
    }

    private printPattern(upto: number) {

        let output: string , counter = 0;

        for ( let i = 0 ; ; i++) {
            output = "";
            for ( let j = 0 ; j <= i ; j++) {
                output += " " + ++counter;
            }
            console.log(output);

            let expectedIndex = (counter+1) + i;
            if(counter <= upto && expectedIndex >= upto) {
                break;
            }
        }
    }
}

new Pattern1(17);
