/*
Given integers k, d1, d2 and an integer array arr[]. Starting from no. k you are allowed to make jumps of size d1 and d2.
i.e. all the possible moves from k are:
-> k + d1 ad k - d1
-> k + d2 ad k - d2
The task is to find which of the numbers from the array are reachable from k making any number of jumps and
 any given jump is either of size d1 or d2. For every number print 1 if is reachable else print 0.

example:
input  : k = 10, d1 = 4, d2 = 6, arr[] = [10,15,20]
output : 1 0 1
* */

import {GcdRecursive} from "../concepts/gcd/gcd-recursive";

class ReachValueByJumpOfGivenLength {
    static reachTheNums (nums : number[], k : number, d1 : number, d2 : number ) : number[]{

        let gcd = GcdRecursive.getGCD(d1, d2);
        let arr :number[] = [];
        for( let i = 0; i < nums.length; i++ ) {
            let distanceCoveredLeft = nums[i] - k;

            if(distanceCoveredLeft % gcd == 0)
                arr.push(1);
            else
                arr.push(0);
        }
        return arr;
    }
}

console.log(ReachValueByJumpOfGivenLength.reachTheNums([10,15,20], 10, 4, 6));
// input  : k = 10, d1 = 4, d2 = 6, arr[] = [10,15,20]
// output : [ 1, 0, 1 ]
