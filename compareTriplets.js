// Complete the compareTriplets function below.
function compareTriplets(a, b) {
    let aliceScore = 0;
    let bobScore = 0;

    for(let i = 0; i < a.length; i++){
        if(a[i] > b[i]){
            aliceScore += 1; // aliceScore = aliceScore + 1; aliceScore++;
        }  
        if(a[i] < b[i]){
            bobScore += 1; // bobScore = bobScore + 1, bobScore++;
        }
        //if(a[i] == b[i]){
            //No code, useless if
        //}
    }

    // let i = 0;
    // while(i < a.length){
    //     if(a[i] > b[i]){
    //         aliceScore += 1; // aliceScore = aliceScore + 1; aliceScore++;
    //     }  
    //     if(a[i] < b[i]){
    //         bobScore += 1; // bobScore = bobScore + 1, bobScore++;
    //     }
    //     i++;
    // }

    return [aliceScore, bobScore];
