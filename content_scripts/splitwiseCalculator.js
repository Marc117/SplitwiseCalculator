(function() {

    // make sure content script gets only injected once into the active tab
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function calculatePrice(){
        // maybe remove entered Price before inserting new price?

        // get string of the text field
        var inputString = document.querySelectorAll("textarea")[1].value;

        var test = inputString.split("\n");

        console.log(test);

        var calculatorReg = '[\\d\\+\\/\\*\\.\\,\\- \\(\\)]*';

        // testing Regex : (?<price>\d*\.\d*)(?:.+?)(?<times>(?<=x)\d*) not working so far
        var test = "shampoo 2.50 *2\n" +
            "beer 11.20\n" +
            "toast 4.48 *2\n" +
            "bananas 1.34\n" +
            "milk 1.12"

        var myArray = calculatorReg.exec(test);
        console.log(myArray);

        var test = "shampoo 2.50 *2\n" +
            "beer 11.20\n" +
            "toast 4.48 *2\n" +
            "bananas 1.34\n" +
            "milk 1.12";


        var priceArray = test.match(regex);


        // calculate price for each row

        var testRow =  " 2.50 *2";

        var testRow = testRow.replace(/\s/g, "");

        var test2 = testRow.split(/([\+\/\*\- \(\)])/gm);

        test2.forEach(element =>{

            var zahl = parseFloat(element);

            // use math js to calcualte whole string as math expression
            console.log(zahl);

        })


    }

    // TODO: swap with not deprecated Method but how??? code below not working
    // browser.runtime.onMessage.addEventListener("change", (message)=>{
    browser.runtime.onMessage.addListener((message)=>{
        if (message.command === "calculate"){
            calculatePrice();
        }
    });

})();