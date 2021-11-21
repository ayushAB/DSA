// Geek created a random series and given a 
//  name geek-onacci series. Given four 
// integers A, B, C, N. A, B, C represents the first three 
//numbers of geek-onacci series. Find the Nth number of the series. 
// The nth number of geek-onacci series is a sum of 
// the last three numbers (summation of N-1th, N-2th, and N-3th geek-onacci numbers)

const geekonaccinumber = (a,b,c,n) => {
    if(n==3){
        return c;
    }else {
       return geekonaccinumber(b,c,a+b+c,n-1);
    }
}
console.log(geekonaccinumber(1,3,2,4)); //6
console.log(geekonaccinumber(1,3,2,5)); //11
console.log(geekonaccinumber(1,3,2,6)); //19
console.log(geekonaccinumber(1,3,2,50)); //19