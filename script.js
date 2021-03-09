
//Dynamic Output for number scroller
function rateUpdate(){
    document.getElementById('displayRate').innerHTML = document.getElementById('rate').value;
}
//Validate form against 0, negative numbers, NaN, and null
function validateForm() {
  amountField = parseInt(document.getElementById('principal').value);
  if (amountField.toString() == 'NaN' || amountField == '') {
    alert('Please enter an amount!');
    setTimeout(function(){
        document.getElementById('principal').focus();
    }, 1);
    return false
  } else if (amountField <= 0) {
    alert('Please enter a positive number!');
    setTimeout(function(){
        document.getElementById('principal').focus();
    }, 1);
    return false  
  } else {
    compute()
  }
// Form result function
    function compute(){
// Get HTML elements
        principle = document.getElementById ('principal').value;
        years = document.getElementById ('years').value;
        rate = document.getElementById ('rate').value;
// Calcultions
        interest = parseFloat((principle*years*rate)/100 ).toFixed(2);
        amount = (principle*Math.pow((1 +rate/100),years )).toFixed(2);
// Find current year and add input of years
        year = new Date().getFullYear()
        loanGradDate = parseInt(year) + parseInt(years);
// Display result in "result" span
        document.getElementById ('result').innerHTML =
        `<br /><br />If you deposit <mark>$${principle}</mark>,<br />
        at an interest rate of <mark>${rate}%</mark>.<br />
        You will receive an amount of <mark>$${interest}</mark>,<br />
        in the year <mark>${loanGradDate}</mark> for a total of <mark>$${amount}</mark>.`
    }
  }
 

