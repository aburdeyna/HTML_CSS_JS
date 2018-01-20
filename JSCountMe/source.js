(function(){
    var itemName = document.getElementById('name');
    var itemBuyDate = document.getElementById('buy');
    var itemPrice = document.getElementById('price');
    var itemUseTimes = document.getElementById('price-use');
    var calculateButton = document.getElementById('calculate');
    
    function checkInputs() {
        var isDateInFuture = new Date(itemBuyDate.value).getTime() > Date.now();
        if(itemName.value == '' || itemPrice.value == '' ||
            isDateInFuture ||
            itemPrice.value < 0 || itemUseTimes.value < 0
          ){
            console.log('fill in data');
            return false;
        } 
        return true;   
    }
    
    function calcButton(){
        if(itemUseTimes.value == ''){
            var useDates = function() {
                var oneDay = 24*60*60*1000,
                    timeMSec = new Date(itemBuyDate.value).getTime();
                return Math.round(Math.abs((Date.now() - timeMSec)/(oneDay)));
            }
            var UseTimes = Math.round(itemPrice.value / useDates());
            return UseTimes;
        } 
            
        return Math.round(itemPrice.value / itemUseTimes.value);
    }
    
    function insert(priceF) {
        var d1 = document.getElementById('one');
        d1.insertAdjacentHTML('afterend', '<tr><td>' + 
            itemName.value + '</td><td>' + 
            itemBuyDate.value + '</td><td>' + 
            itemPrice.value + '</td><td>'+ 
            priceF + '</td></tr>');   
    }
    
    document.getElementById("itemForm").addEventListener("submit", function(event){
        event.preventDefault();
        if(!checkInputs()){
            return false;
        }
        
    
        insert(calcButton());
    
        document.getElementById("itemForm").reset();
    });
    
        
})();