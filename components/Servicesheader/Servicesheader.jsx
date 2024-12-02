import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Servicesheader = ({ blok }) => (
  <div className="bg-[#002626]" {...storyblokEditable(blok)}>
    <div className="flex item-center justify-center">
        <div className="flex flex-col item-center justify-center">
        {render(blok.Servicesheader_Titel1)}
        {render(blok.Servicesheader_Titel2)}
        {render(blok.Servicesheader_Titel3)}
        </div>
    
    <img src={blok.Servicesheader_Image.filename} />
    </div>
    
  </div>
 
);
 
export default Servicesheader;