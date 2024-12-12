import { storyblokEditable } from "@storyblok/react/rsc";
 
 
 
 
 
const Configurationheader = ({ blok }) => (
  <div className="Interviews_Intro" {...storyblokEditable(blok)}>
    <h1 className="interviews_titel">{blok.Interviews_titel}</h1>
  </div>
 
);
 
 
export default Configurationheader;