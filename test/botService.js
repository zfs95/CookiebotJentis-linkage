
function acceptAll(){
    if(window.jentis){
        jentis.consent.engine.AcceptAll()
    }

    if(window.Cookiebot){
        window.Cookiebot.submitCustomConsent(true, true, true);
    }
}

function denyAll(){
    if(window.jentis){
        jentis.consent.engine.DenyAll()
    }

    if(window.Cookiebot){
        this.Cookiebot.submitCustomConsent(false, false, false);
    }
}

function acceptGa(obj ={"ga"  : true, "fb"  : true}){

    if(window.jentis){
        jentis.consent.engine.setNewVendorConsents(obj)
    }

    if(window.Cookiebot){
        const oVendorInfo = jentis.consent.engine.getVendorFullData();

        let consents = {}
        for(vendor in oVendorInfo){
            if(consents[vendor["purpose"]["id"]] === undefined){
                consents[vendor["purpose"]["id"] = vendor["status"]]
            }
        }
        Cookiebot.submitCustomConsent(consents["pref"] = false, consent["stat"], consent["mark"]);
    }
}

function MigrateOldConsent(){

    if(window.jentis){
        var aData = {
        consentid: "TESTTESTTEST",
        lastupdate: 100,
        vendors: {"ga":true,"fb":false,"adw":false}				
            };			
        var sJson = JSON.stringify(aData);

        //Now write it to the local storage
        localStorage.setItem("jentis.consent.data", sJson);	
    }

    if(window.Cookiebot){
        Cookiebot.runScripts();
    }
}

function MigrateInTimeConsent(){
    if(window.jentis){
        var aData = {
        consentid: "TESTTESTTEST",
        lastupdate: Date.now()-1000,
        vendors: {"ga":true,"fb":false,"adw":false}				
        };			
        var sJson = JSON.stringify(aData);

        //Now write it to the local storage
        localStorage.setItem("jentis.consent.data", sJson);		
    }

    if(window.Cookiebot){
        Cookiebot.runScripts();
    }
}

let acceptAllBtn = document.getElementById("accept-all");
let denyAllBtn = document.getElementById("deny-all");
let acceptGaBtn = document.getElementById("deny-ga");
let migrateOldBtn = document.getElementById("migrate-old");
let migrateInTimeBtn = document.getElementById("migrate-in-time");

acceptAllBtn.addEventListener("click", acceptAll(),false);
denyAllBtn.addEventListener("click", denyAll(),false);
acceptGaBtn.addEventListener("click" , acceptGa(), false);
migrateOldBtn.addEventListener("click", MigrateOldConsent(),false);
migrateInTimeBtn.addEventListener("click", MigrateInTimeConsent(),false);