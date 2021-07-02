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

        // testing Regex : (?<price>\d*\.\d*)(?:.+?)(?<times>(?<=x)\d*) not working so far
        "shampoo 2.50 x2\n" +
        "beer 11.20\n" +
        "toast 4.48 x2\n" +
        "bananas 1.34\n" +
        "milk 1.12"

    }

    // TODO: swap with not deprecated Method but how??? code below not working
    // browser.runtime.onMessage.addEventListener("change", (message)=>{
    browser.runtime.onMessage.addListener((message)=>{
        if (message.command === "calculate"){
            calculatePrice();
        }
    });

})();