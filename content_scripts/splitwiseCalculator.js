(function() {

    // make sure content script gets only injected once into the active tab
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    function calculatePrice(){
        // maybe remove entered Price before inserting new price?

        // get string of the text field

        console.log("HALLOOO");

    }

    browser.runtime.onMessage.addEventListener((message)=>{
        if (message.command == "calculate"){
            calculatePrice();
            console.log("Test2");
        }
    })

})();