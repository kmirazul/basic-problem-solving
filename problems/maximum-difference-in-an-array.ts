/*
You are given an array of integers and must compute the maximum difference between any item and any lower indexed smaller item for all possible
pairs, i.e., for a given array a find the maximum value of a[j] - a[i] for all i,j where 0 <= i < j < n and a[i] < a[j]. If no item has a smaller item
with a lower index then return -1.

input : [ 2 , 3 , 10 , 2 , 4 , 8 , 1 ]
output : 8

Explanation :
n = 7 , a = [2,3,10,2,4,8,1]
Differences are calculated as :
 3 - [2] = [1]
 10 - [3,2] = [7,8]
 4 - [2,3,2] = [2,1,2]
 8 - [4,2,3,2] = [4,6,5,6]

 The maximum is found at 10 - 2 = 8
*/
