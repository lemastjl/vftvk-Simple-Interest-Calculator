

function rateUpdate(){
    document.getElementById('displayRate').innerHTML = document.getElementById('rate').value;
}
function validateForm() {
  amountField = parseInt(document.getElementById('principal').value);
  if (amountField <= 0) {
    alert('Enter a positive number!');
    setTimeout(function(){
        document.getElementById('principal').focus();
    }, 1);
    return false
  }else{
    compute()
  }
// Form submit function
    function compute(){
// Get HTML Elements
        principle = document.getElementById ('principal').value;
        years = document.getElementById ('years').value;
        rate = document.getElementById ('rate').value;
// Calcultions
        interest = parseFloat((principle*years*rate)/100 ).toFixed(2);
        amount = (principle*Math.pow((1 +rate/100),years )).toFixed(2);
// Find Current Year and Add Input of Years
        d = new Date();
        year = d.getFullYear();
        loanGradDate = parseInt(year) + parseInt(years);
// Display result in result span
        document.getElementById ('result').innerHTML =
        `If you deposit <mark>$${principle}</mark>,<br />
        at an interest rate of <mark>${rate}%</mark>.<br />
        You will receive an amount of <mark>$${interest}</mark>,<br />
        in the year <mark>${loanGradDate}</mark>`
    }
  }
