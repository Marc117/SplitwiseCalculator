function listenForClicks(){
    document.addEventListener("click", (e) => {


        function calculate(tabs){
            browser.tabs.sendMessage(tabs[0].id,{
                command: "calculate",
            });
        }

        function reportError(error) {
            console.error(`Error: ${error}`);
        }

        if (e.target.classList.contains("calculate")){
            browser.tabs.query({active:true, currentWindow: true})
                .then(calculate)
                .catch(reportError)
        }

    });
}

function reportExecuteScriptError(error) {
    document.querySelector("#popup-content").classList.add("hidden");
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Error ${error.message}`);
}

browser.tabs.executeScript({file: "/content_scripts/splitwiseCalculator.js"})
    .then(listenForClicks)
    .catch(reportExecuteScriptError);