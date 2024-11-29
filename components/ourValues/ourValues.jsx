import { storyblokEditable } from "@storyblok/react/rsc";



const ourValues = ({ blok }) => (
  <div className="bg-[#002626] bg-cover bg-center h-[600px]" style={{ backgroundImage: `url(${blok.ourValues_achtergrond.filename})`,  }}{...storyblokEditable(blok)}>
    <div className="container lg:mx-auto">
      <div className="text-3lg">
        <h2 style={{ color: "#A8FF1A" }}>Human</h2>
        <h2 style={{ color: "#EAFFBD" }} >Concise</h2>
      </div>
      <div>
        <h2 style={{ color: "#FFFFFF" }}>Simple</h2>
        <h2 style={{ color: "#F4C5FF" }}>Friendly</h2>
      </div>
    </div>
  </div>
);
 
 
export default ourValues;

