/*
 * Complete the simpleArraySum function below.
 */
function simpleArraySum(ar) {
    let sum = 0;
    ar.forEach(integer => {
        sum = sum + integer;
        //sum += integer
    });
    return sum;
}
