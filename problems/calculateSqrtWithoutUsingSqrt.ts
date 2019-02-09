export  class CalculateSqrtWithoutUsingSqrt {
    constructor (value : number) {
        let i = 0.01;
        for(i ; i*i < value ; i+=0.1);
        console.log('squar-root of '+value + " is : "+ i.toFixed(2));
    }
}

new CalculateSqrtWithoutUsingSqrt(49);
