import React from "react";
import FAQ from "../common/FAQ/FAQ";
// fake data
const data = {
  title:
    "Tart danish lollipop croissant jujubes shortbread shortbread toffee lemon drops. Cake tootsie roll lemon drops marzipan ice cream tiramisu. Liquorice cheesecake tootsie roll candy gummi bears candy tart wafer. Jelly-o fruitcake halvah candy canes apple pie. Caramels tootsie roll croissant brownie.",
  faq: [
    {
      id: 1,
      question: "Brownie oat cake jelly-o topping pudding?",
      ans: "Macaroon shortbread liquorice topping cake gingerbread. Gummies tiramisu gummies jelly beans dragée toffee cupcake bonbon. Marshmallow cookie apple pie pastry cake oat cake macaroon dragée jujubes. Chupa chups cake gingerbread tart marzipan chocolate pie dragée. Toffee cake pastry icing oat cake jelly. Marzipan jelly beans gummi bears marzipan croissant. Bonbon apple pie dragée cupcake pie oat cake shortbread. Fruitcake soufflé soufflé apple pie ice cream lollipop jelly-o. Sweet roll chupa chups tart croissant icing cake pastry brownie jelly-o",
      question_type: "Product",
    },
    {
      id: 2,
      question: "Candy canes carrot cake muffin tiramisu?",
      ans: " Candy canes carrot cake muffin tiramisu jelly beans sesame snaps biscuit. Powder lollipop powder cake sweet. Ice cream pastry wafer carrot cake tart jelly croissant brownie chupa chups. Sugar plum tiramisu lollipop cotton candy gummies powder chocolate bar. Toffee jelly-o carrot cake donut bonbon lemon drops. Gummi bears bonbon liquorice tiramisu ice cream tiramisu cupcake dessert. Halvah marzipan candy canes bonbon halvah muffin muffin.",
      question_type: "Peoduct",
    },
    {
      id: 3,
      question: "Cheesecake jelly-o apple pie dessert?",
      ans: "Cheesecake jelly-o apple pie dessert liquorice gummi bears tart. Shortbread ice cream chocolate bar liquorice chocolate bar sugar plum cheesecake gingerbread. Marshmallow candy canes jelly jujubes carrot cake cheesecake chocolate cupcake. Donut danish cheesecake carrot cake pastry gummies. Marshmallow marshmallow wafer gingerbread sweet. Wafer toffee cupcake caramels biscuit chupa chups powder sesame snaps. Marshmallow bonbon wafer chocolate cake tart pie.",
      question_type: "Development",
    },
  ],
};

function ProductFAQ() {
  return (
    <>
      <FAQ data={data} />
    </>
  );
}

export default ProductFAQ;
