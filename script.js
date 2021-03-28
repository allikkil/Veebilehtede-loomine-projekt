let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {

    "use strict";


    let center = new Microsoft.Maps.Location(
        58.708046,
        25.8976879
    )
    let kuutsemae = new Microsoft.Maps.Location(
        58.03693,
        26.36241
    );

    let kivioli = new Microsoft.Maps.Location(
        59.36612,
        26.95305
    );
    let nomme = new Microsoft.Maps.Location(
        59.38863,
        24.66971
    );
    let viljandi = new Microsoft.Maps.Location(
        58.3537254,
        25.5913868
    );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: center,
        zoom: 7,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });

    let infobox = new Microsoft.Maps.Infobox(center, {
        visible: false
    });

    infobox.setMap(map);

    let pushpin = new Microsoft.Maps.Pushpin(kuutsemae);

    pushpin.metadata = {
        title: 'Kuutsemäe puhkekeskus',
        description: 'Arula-Pringi, Pringi, 67411 Valga maakond'
    };

   

    let pin = new Microsoft.Maps.Pushpin(kivioli);
    let nomme_pin = new Microsoft.Maps.Pushpin(nomme);
    let viljandi_pin = new Microsoft.Maps.Pushpin(viljandi);

    pin.metadata = {
        title: 'Kiviõli Seikluskeskus',
        description: 'Mäepealse tee 1, Kiviõli, 43125 Ida-Viru maakond'
    };
    nomme_pin.metadata = {
        title: 'Nõmme Lumepark',
        description: 'Vana-Mustamäe 16, 12611 Tallinn'
    };
    viljandi_pin.metadata = {
        title: 'Nõmme Lumepark',
        description: 'Viljandi, 71010 Viljandi maakond'
    };

    
    Microsoft.Maps.Events.addHandler(pushpin, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(nomme_pin, 'click', pushpinClicked);
    Microsoft.Maps.Events.addHandler(viljandi_pin, 'click', pushpinClicked);
    map.entities.push(pushpin);
    map.entities.push(pin);
    map.entities.push(nomme_pin);
    map.entities.push(viljandi_pin);

    function pushpinClicked(e) {
        
        if (e.target.metadata) {
            
            infobox.setOptions({
                location: e.target.getLocation(),
                title: e.target.metadata.title,
                description: e.target.metadata.description,
                visible: true
            });
        }
    }
}