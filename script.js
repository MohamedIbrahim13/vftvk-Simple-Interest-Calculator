function compute() {
    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseInt(document.getElementById("years").value);
    const interest = principal * years * rate / 100;
    const yearInTheFuture = new Date().getFullYear() + years;
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + yearInTheFuture + "</mark>";

}


function getSliderValue() {
    document.getElementById("rateSpan").innerHTML = document.getElementById("rate").value;
}


function validateAmount() {
    const principal = document.getElementById("principal").value;
    const biggerThanZero = parseInt(principal) > 0;
    if (!biggerThanZero) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }

}
        
