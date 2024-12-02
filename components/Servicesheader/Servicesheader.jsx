import { storyblokEditable } from "@storyblok/react/rsc";
 
const Servicesheader = ({ blok }) => (
  <div className="bg-[#002626]" {...storyblokEditable(blok)}>
    <div className="flex item-center justify-center">
        <div className="flex flex-col item-center justify-center">
        <h3 className="text-[#F4C5FF]">{blok.Servicesheader_Titel1}</h3>
        <h1 className="text-[#FFFFFF]">{blok.Servicesheader_Titel2}</h1>
        <h3 className="text-[#EAFFBD]">{blok.Servicesheader_Titel3}</h3>
        </div>
    <img src={blok.Servicesheader_Image.filename}/>
    </div>
  </div>
 
);
 
export default Servicesheader;