import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const AboutUs_hero = ({ blok }) => (
  <div className="bg-[#002626]" {...storyblokEditable(blok)}>
    <div className="mt-10 flex justify-center text-4xl">
      {render(blok.AboutUs_titel)}  
    </div>

    <div className="flex flex-col justify-center mt-20">
      <div className="flex justify-center ">
        <div className="flex flex-row justify-between w-[1150px]">
          <img src={blok.AboutUs_hero_image1.filename}/>
            <div className="flex justify-center w-[400px] ">
              {render(blok.AboutUs_inleiding)} 
            </div> 
          <img src={blok.AboutUs_hero_image3.filename}/>
        </div>
      </div>
      <div className="w-[100%] flex justify-center">
        <div className="w-[700px] h-[350px] bg-white rounded-b-full overflow-hidden">
          <img src={blok.AboutUs_hero_image2.filename} className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>

  </div>
 
);
 
 
export default AboutUs_hero;