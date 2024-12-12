import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";


const CallToAction_1 = ({ blok }) => (
  <div className="mb-20 bg-[#002626] flex justify-center"{...storyblokEditable(blok)}>
    <div className=" flex justify-around w-[90%] mt-25">
      <img src={blok.calltoaction_image.filename}/>

      <div className="flex flex-col justify-around font-medium ml-5 ">
        <div className="text-3xl w-[90%]">
          {render(blok.calltoaction_text)}
        </div>
        <div>
          <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
        </div>
      </div>
    </div>
  </div>
);
 
 
export default CallToAction_1;