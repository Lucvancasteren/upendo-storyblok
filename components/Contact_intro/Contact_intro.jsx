
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Contact_intro = ({ blok }) => (
  <div className="bg-[#002626] mb-20" {...storyblokEditable(blok)}>
    <div className="flex justify-around mt-10 ">
      <div className="flex flex-col justify-center w-[40%]">
        <div>
          <h1 className="text-[#F4C5FF] mb-2"  style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "500",
                fontSize: "32px",
              }}>{blok.pagina_sectie}</h1>
        </div>
        <div>
          <h1 className="text-[#A8FF1A] mb-4"  style={{
                fontFamily: "Area, sans-serif",
                fontWeight: "500",
                fontSize: "60px",
              }}>{blok.Contact_titel}</h1>
        </div>
        <div className="w-[100%]">
          <h1 className="text-[#EAFFBD] mb-6" style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "26px",
              }}>{blok.Contact_inleiding}</h1>
        </div>
      </div>
      <div>
        <img className="h-[400px]" src={blok.Contact_introafbeelding.filename} />
      </div>
    </div>
  </div>
);
 
 
export default Contact_intro;