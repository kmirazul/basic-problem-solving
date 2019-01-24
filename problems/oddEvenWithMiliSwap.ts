// Defination : Give the list of number and make separate all odd number in left and even in right with minimum number of swapping.
// Example :
// input : [ 1,2,3,4,5,6 ]
// output: [ 1,5,3,4,2,6] and swaping : 1



class OddEvenWithMiliSwap {

    private swapCount : number = 0;

    getSwapOddEvenData(listOfElement : number[]) : number[]{
        for(let i = 0 ; i < listOfElement.length ; i++) {

            if( listOfElement[i] % 2 == 0 ) {
                for( let j = listOfElement.length - 1; j > i ; j--) {
                    if( listOfElement[j] % 2 != 0) {
                        this.swap(listOfElement, i , j );
                        break;
                    }
                }
            }
        }
        return listOfElement;
    }

    private swap(listOfElement: number[], i: number, j: number) {
        let temp = listOfElement[i];
        listOfElement[i] = listOfElement[j];
        listOfElement[j] = temp;
        this.swapCount++;
    }

    public getSwapCount() : number {
        return this.swapCount;
    }
}

let listOfElemet = [1,2,3,4,5,6,7,8];
let oddEvenWithMiliSwap = new OddEvenWithMiliSwap();
console.log(oddEvenWithMiliSwap.getSwapOddEvenData(listOfElemet));
console.log('number swaping happend : ' + oddEvenWithMiliSwap.getSwapCount());

// input : 1 2 3 4 5 6 7 8
// output :
// [ 1, 7, 3, 5, 4, 6, 2, 8 ]
// number swaping happend : 2
