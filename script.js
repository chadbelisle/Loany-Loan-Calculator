

// resest form
    function resetForm(){
        document.getElementById('submission').reset();
        document.getElementById('result').innerHTML="";
        document.getElementById('total').innerHTML="";
        
    };

// reset totals
    function resetTotals(){
        document.getElementById('total').innerHTML = ""
    }


// store loans as objects in global array
loans = []



//store object infromation into an object and do calculation
function submitForm(){

if (document.getElementsByName('principle')[0].value <= 0) {
    alert("Principle value greater than 0 must be entered");
    return

}

else if(document.getElementsByName('interest')[0].value <= 0) {
    alert("Interest value greater than 0 must be entered");
    return

}

else if(document.getElementsByName('payment')[0].value <= 0) {
    alert("Monthly payment value greater than 0 must be entered");
    return
}

else{


    // retrieve current loan in form
loan = {
        name: document.getElementsByName('name')[0].value,    
        principle: document.getElementsByName('principle')[0].value,
        annualInterest: document.getElementsByName('interest')[0].value,
        monthlyPayment: document.getElementsByName('payment')[0].value

};

// push loan to array storage for later
loans.push(loan);


// variables 
interestPaid = 0;
paymentsMade = 0;
principle = loan.principle;
annualInterest = loan.annualInterest;
monthlyPayment = loan.monthlyPayment;
paymentPeriod = loan.paymentPeriod;


// loop while principle balance >= 0

for (i= 0; principle >= 0; i++ ){

    monthlyInterest = (principle * annualInterest)/12/100;
    principlePaid = monthlyPayment - monthlyInterest;
    principle -= principlePaid;
    interestPaid += monthlyInterest;
    paymentsMade += 1;
}; 





// add total interest paid to initial principle
totalRepayment = parseInt(loan.principle) + interestPaid;

years = paymentsMade/12;
months = paymentsMade % 12;



// print message to DOM
document.getElementById('result').innerHTML = "The loan of $" + loan.principle + " at " + annualInterest + "% interest, would take " + Math.floor(years) + " years " + months + " months to pay back, making monthly payments of $" + monthlyPayment + ". The total repayment would be $" + totalRepayment.toFixed(2);



}}




// totals monthly loan payments and 



    intitialValue = 0;

    // retrieves monthly totals from stored object information
    function total (){

    document.getElementById('total').innerHTML = "Total Monthly Payments: $" + loans.reduce(function totalObjects(total, num){
    
        return total + parseInt(num.monthlyPayment);
    }, intitialValue) 
    
}
