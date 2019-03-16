// Definatoin:
// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.

export class  FindTheValueWhichGivesSumFromArray {
    constructor(private array: number[] = []) {}

    getValuesWhoseSumIsNumber( value : number) : boolean {
        for (let i = 0 ; i < this.array.length; i++) {
            for( let j = 0 ; j < this.array.length ; j++) {
                if(j == i)
                    continue;
                if((this.array[i]+this.array[j]) == value){
                    return true;
                }
            }
        }
        return false;
    }

    hasArrayTwoCandidate(value : number) : boolean {

        let leftIndex: number = 0,rightIndex:number = this.array.length-1, array: number[] = this.array;
        array.sort((a,b) => {return a-b });
        console.log(array);
        while(leftIndex != rightIndex) {

            if((array[leftIndex] + array[rightIndex]) == value){
                return true;
            }
            else if((array[leftIndex]+ array[rightIndex]) > value){
                rightIndex--;
            }else {
                leftIndex++;
            }

        }
        return false;
    }
}
// O(n^2)
console.log(new FindTheValueWhichGivesSumFromArray([1,15,3,7]).getValuesWhoseSumIsNumber(10));

// 0(n)
console.log(new FindTheValueWhichGivesSumFromArray([1,15,3,7]).hasArrayTwoCandidate(10));
