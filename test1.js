function myFunction() {
    var coins=[50,20,10,5,2,1]
    var res=[];
    var textVal = document.getElementById("txt");
    var value = parseInt(textVal.value);
    if(value >0) {
        for(let i=0; i <coins.length; i ++) {
            while (value >= coins[i]) {
                value -= coins[i];
                res.push(coins[i]);
            }
        }
        var counts = {};
        res.forEach(function(x) { counts[x] = (counts[x] || 0)+1; });
        console.log(JSON.stringify(counts))
        document.getElementById("out").innerHTML = JSON.stringify(counts);
    }else{
        alert('Please Enter the Number Amount');
    }
}