import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Training_CallToAction = ({ blok }) => (
  <div className="bg-[#002626] flex justify-center mt-20 mb-20" {...storyblokEditable(blok)}>
    <div className="w-[60%]">
      <div>
        <h1 className="text-white" style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "100",
                fontSize: "32px",
              }}>{blok.CTA_titel}</h1>
      </div>
      <div>
        <input
          className="w-full bg-transparent border-2 p-3 border-[#A8FF1A] rounded-3xl text-white placeholder-gray-400 mt-5"
          type="text"
          placeholder="Leave a message here..."
        />
      </div>
      <div className="flex justify-end mt-5">
      <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Submit</button>
      </div>
    </div>
  </div>
);
 
 
export default Training_CallToAction;