export class CalculateSqrtWithoutUsingSqrt {
    constructor (value : number) {
        let i = 0.01;
        let count = 0;
        for(i ; i*i < value ; i+=0.1);

        console.log('squar-root of '+value + " is : "+ i.toFixed(2));
    }
}

new CalculateSqrtWithoutUsingSqrt(81);
//Output : squar-root of 81 is : 9.01
