
import './App.css';
import Card from "./Card";



const silence = "With the world under attack by deadly creatures who hunt by sound, a teen and her family seek refuge outside the city and encounter a mysterious cult.";

const lupt = "Haunted by disturbing visions, a workaholic takes a vacation with his family, but a detour leads them to an unsettling stranger and chilling events.";

const thnd = `In this Hindi version of "Aval," a young couple's relationship is shaken to its core when a mysterious and troubled family moves into the neighborhood.`;

const ouija = "When their friend mysteriously dies, grieving teens seek connection via an antique ouija board that conjures up a nightmare from the other side.";

const toh = "Following a tragedy, a mother and her teen son move to a relative's vacant vacation home, where eerie and unexplained forces conspire against them.";

const regression = "A sexual assault perpetrated by a man with no memory of the crime leads a detective and a psychologist down a dark path of hidden, repressed evil.";

const Sdata = {
     sname: ["The Silence","Lupt", "The House Next Door", "Ouija","The Open House", "Regression"],
    imgsrc:[
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZA9V67VsyU2s-oWLVCMFlrmUv2sq6FGhWf2jeNtuqFcD83ffUax0YwrZEsTrCdFeI0LnrXkKaqkd3dX92SV8ZQ2FcWY.jpg?r=945",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABT_5xMhpfPIBwJ04cWeMl7iM40qe_X2-tDeCDeYuVpbJ0E-OcIPIUcQ7rQ23kWp3e74heMA1qN33Ru3njRfo0SDYOUO5.jpg?r=597",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABaeBMKCt2OlSXxoga4xIjYi7SrJDjsPdalrgtzm_zwLT8d1Ut1ZfGPhsHOyRy0TLHUN8-YgWeOZBzEa_s3ddqvOMVz2v.jpg?r=831",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTvXrZE6tSiRmrijNkKxjV3J06muVwEd6dHtHXAHfS4sdgWFrszMEB2pInjNWCQMOhPMowcHgEbrHS6my3GivVAksfVR.jpg?r=d09",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABZkj66u-jo32uVVH_llUEDpp5KuoJdzEtU41JTDTibXtoq_dRiOIejqlR3-1B1MWB2ts-YwRpIaZ1MLWGxPtFN4lZtO6.jpg?r=5eb",
    "https://occ-0-3752-3646.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABbjjgVsWCecdfCRxjJRLUYkzr6fKkHR-fhhXF9l0PAPp_vvAsy5eB9Bz0IfQL_81nvcOBMqQH9-j9S1zlKKY0pZZoAB6.jpg?r=b1b"
    ],
    desc: [silence,lupt, thnd,ouija,toh, regression],
    links: ["https://www.netflix.com/in/title/81021447?source=35","https://www.netflix.com/in/title/81086435?source=35","https://www.netflix.com/in/title/80233024?source=35","https://www.netflix.com/in/title/70305901?source=35","https://www.netflix.com/in/title/80198661?source=35","https://www.netflix.com/in/title/80044537?source=35"]
}


function App() {
  return (
    <div className="App">

      <Card sname={Sdata.sname[0]} imgsrc={Sdata.imgsrc[0]} desc={Sdata.desc[0]} links={Sdata.links[0]}  />
      <Card sname={Sdata.sname[1]} imgsrc={Sdata.imgsrc[1]} desc={Sdata.desc[1]} links={Sdata.links[1]}  />
      <Card sname={Sdata.sname[2]} imgsrc={Sdata.imgsrc[2]} desc={Sdata.desc[2]} links={Sdata.links[2]}  />
      <Card sname={Sdata.sname[3]} imgsrc={Sdata.imgsrc[3]} desc={Sdata.desc[3]} links={Sdata.links[3]}  />
      <Card sname={Sdata.sname[4]} imgsrc={Sdata.imgsrc[4]} desc={Sdata.desc[4]} links={Sdata.links[4]}  />
      <Card sname={Sdata.sname[5]} imgsrc={Sdata.imgsrc[5]} desc={Sdata.desc[5]} links={Sdata.links[5]}  />
     
    </div>
  );
}

export default App;
