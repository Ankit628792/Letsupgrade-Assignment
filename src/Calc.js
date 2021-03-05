import React from 'react'



const silence = "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.";

const lupt = "Haunted by disturbing visions, a workaholic takes a vacation with his family, but a detour leads them to an unsettling stranger and chilling events.";

const thnd = `In this Hindi version of "Aval," a young couple's relationship is shaken to its core when a mysterious and troubled family moves into the neighborhood.`;

const ouija = "When their friend mysteriously dies, grieving teens seek connection via an antique ouija board that conjures up a nightmare from the other side.";

const toh = "Following a tragedy, a mother and her teen son move to a relative's vacant vacation home, where eerie and unexplained forces conspire against them.";


const Sdata = {
     sname: ["The Silence","Lupt", "The House Next Door", "Ouija","The Open House"],
    imgsrc:[
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZA9V67VsyU2s-oWLVCMFlrmUv2sq6FGhWf2jeNtuqFcD83ffUax0YwrZEsTrCdFeI0LnrXkKaqkd3dX92SV8ZQ2FcWY.jpg?r=945",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_5xMhpfPIBwJ04cWeMl7iM40qe_X2-tDeCDeYuVpbJ0E-OcIPIUcQ7rQ23kWp3e74heMA1qN33Ru3njRfo0SDYOUO5.jpg?r=597",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaeBMKCt2OlSXxoga4xIjYi7SrJDjsPdalrgtzm_zwLT8d1Ut1ZfGPhsHOyRy0TLHUN8-YgWeOZBzEa_s3ddqvOMVz2v.jpg?r=831",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTvXrZE6tSiRmrijNkKxjV3J06muVwEd6dHtHXAHfS4sdgWFrszMEB2pInjNWCQMOhPMowcHgEbrHS6my3GivVAksfVR.jpg?r=d09",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZkj66u-jo32uVVH_llUEDpp5KuoJdzEtU41JTDTibXtoq_dRiOIejqlR3-1B1MWB2ts-YwRpIaZ1MLWGxPtFN4lZtO6.jpg?r=5eb"
    ],
    desc: [silence,lupt, thnd,ouija,toh],
    links: ["https://www.netflix.com/in/title/81021447?source=35","https://www.netflix.com/in/title/81086435?source=35","https://www.netflix.com/in/title/80233024?source=35","https://www.netflix.com/in/title/70305901?source=35","https://www.netflix.com/in/title/80198661?source=35"]
}



function calc() {
    return Sdata;
}

export default calc
export {Sdata}
