import React, { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
const testimonials = [
  {
    id: 1,
    title: "Tech wid, Bd",
    body: "Pastry shortbread muffin sesame snaps icing marzipan. Brownie sesame snaps candy canes chocolate cake donut bonbon powder cotton candy. Jelly sesame snaps gummies pudding cotton candy. Sesame snaps danish muffin sweet roll cheesecake cake wafer pastry. Icing fruitcake cookie cupcake cake muffin cheesecake bonbon pie. Wafer marshmallow gummi bears wafer halvah. Croissant jelly-o croissant gummi bears cake. Gingerbread icing dessert toffee lemon drops sweet roll jelly beans.",
    img: "https://images.unsplash.com/photo-1615921511258-0aa98c84d400?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY1fHxsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    title: "Apple pie gummi",
    body: "Apple pie apple pie gummi bears shortbread liquorice shortbread gummi bears jujubes sugar plum. Sweet roll biscuit tiramisu muffin sesame snaps lollipop. Sweet lemon drops fruitcake apple pie bonbon topping tiramisu cupcake chocolate. Cake caramels bonbon sugar plum candy canes macaroon. Jelly marzipan cupcake pudding candy. Candy cotton candy gingerbread chocolate cookie gingerbread bear claw.",
    img: "https://images.unsplash.com/photo-1554730501-8dd4db2b18cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nzd8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    title: "Pudding biscuit pastry",
    body: "Pudding biscuit pastry gingerbread sugar plum jelly sweet roll soufflé. Caramels shortbread gingerbread gummies gingerbread dessert muffin danish caramels. Candy apple pie carrot cake cake ice cream chocolate cake muffin. Sesame snaps lemon drops muffin muffin wafer danish. Topping icing gummi bears dragée wafer danish.",
    img: "https://images.unsplash.com/photo-1579509330413-8a7e4addc442?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTZ8fGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
function Testimonials() {
  const [id, setId] = useState(1);
  const [testimonial, setTestimonial] = useState({});

  useEffect(() => {
    const findTestimonial = testimonials?.find(
      (testimonial) => testimonial?.id === id
    );
    setTestimonial(findTestimonial);
  }, [id]);

  return (
    <>
      <div className="bg-[#20231f] py-6 lg:py-8 px-6">
        <Testimonial
          testimonial={testimonial}
          totolTestimonial={testimonials?.length}
          setId={setId}
        />
      </div>
    </>
  );
}

export default Testimonials;
