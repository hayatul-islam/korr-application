import React from "react";
import FAQ from "../common/FAQ/FAQ";
// fake data
const data = {
  title:
    "Etsy retro slow-carb artisan. Celiac vinyl kickstarter aute man bun ennui raclette fanny pack craft beer occaecat fingerstache chambray umami snackwave hoodie. Kogi enim hammock, listicle umami green juice pariatur reprehenderit bushwick enamel pin ennui chartreuse viral vaporware polaroid.",
  faq: [
    {
      id: 1,
      question: "Cornhole quinoa coloring book, art party?",
      ans: "Cornhole quinoa coloring book, art party jianbing bitters distillery whatever la croix literally. Shabby chic leggings irony, stumptown actually in wolf try-hard biodiesel prism. In sartorial everyday carry kombucha pitchfork ethical anim aesthetic. Kickstarter cred coloring book umami. Aliquip cliche mustache, nulla actually affogato chicharrones helvetica humblebrag thundercats banjo organic cornhole live-edge. Ullamco vinyl irure twee listicle, esse sint fit pitchfork aesthetic try-hard copper mug.",
      question_type: "Product",
    },
    {
      id: 2,
      question: "Excepteur lomo mukbang typewriter?",
      ans: " Excepteur lomo mukbang typewriter. Tbh lumbersexual laborum vape vegan esse. Church-key polaroid ut austin bicycle rights nisi, bodega boys bespoke put a bird on it authentic deep v elit palo santo vaporware. Narwhal meditation austin unicorn letterpress glossier. Locavore bushwick photo booth, commodo cray letterpress fingerstache mollit vibecession gatekeep truffaut VHS.",
      question_type: "Team",
    },
    {
      id: 3,
      question: "Banh mi whatever food truck vape esse?",
      ans: "Banh mi whatever food truck vape esse, taiyaki letterpress in hammock XOXO. Nostrud viral put a bird on it man braid, mixtape swag officia deep v. Sunt yr raw denim, hexagon hell of 90's hella Brooklyn meditation DIY artisan. Brooklyn air plant everyday carry PBR&B, DIY pitchfork food truck hot chicken pickled. VHS yuccie woke paleo meditation normcore lo-fi hoodie enamel pin scenester ex etsy umami. Freegan aliquip forage prism 90's fixie.",
      question_type: "Development",
    },
    {
      id: 4,
      question: "Vexillologist adipisicing quis, try-hard?",
      ans: "Vexillologist adipisicing quis, try-hard pour-over butcher meditation JOMO ut fingerstache kale chips tofu poutine kombucha air plant. Copper mug dolore bodega boys kickstarter adaptogen hella excepteur sriracha lomo anim fam lyft blue bottle. Biodiesel franzen humblebrag, JOMO enamel pin neutra tumeric truffaut crucifix. XOXO hashtag skateboard palo santo pour-over labore aliquip green juice adipisicing chillwave paleo helvetica tumeric craft beer roof party. Portland fashion axe vibecession, freegan deserunt pug hot chicken palo santo retro et sunt flannel typewriter. Readymade chillwave bruh selfies art party, plaid sunt squid farm-to-table synth adipisicing godard. Tousled aliqua id tattooed brunch chia velit paleo.",
      question_type: "Product",
    },
  ],
};

function MissionFAQ() {
  return (
    <>
      <FAQ data={data} />
    </>
  );
}

export default MissionFAQ;
