import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Training_intro = ({ blok }) => (
  <div className="bg-[#002626]" {...storyblokEditable(blok)}>
    <div className="flex justify-around mt-10 ">
      <div className="flex flex-col justify-center">
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
              }}>{blok.Training_titel}</h1>
        </div>
        <div className="w-[70%]">
          <h1 className="text-[#EAFFBD] mb-6" style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "500",
                fontSize: "26px",
              }}>{blok.Training_inleiding}</h1>
        </div>
      </div>
      <div>
        <img className="h-[400px]" src={blok.Training_introafbeelding.filename} />
      </div>
    </div>

    <div className="flex justify-center mt-20 ">
      <div className="flex justify-between  w-[80%]">
        <div>
          <img className="w-[475px]" src={blok.Training_introafbeelding2.filename} />
        </div>

        <div className="flex flex-col justify-center w-[40%]">
            <h1 className="text-[#EAFFBD]  mb-3" style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: "500",
                  fontSize: "26px",
                }}>{blok.Training_titel2}</h1>
            <p className="text-white  w-[70%]">{blok.Training_inleiding2}</p>
        </div>
      </div>
    </div>
  </div>
);
 
 
export default Training_intro;