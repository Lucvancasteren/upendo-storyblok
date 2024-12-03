import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Training_OurOptions = ({ blok }) => (
  <div className="bg-[#002626] mt-20" {...storyblokEditable(blok)}>
    <h1 className="mb-8 text-4xl font-bold text-white flex justify-center">Our Options</h1>
    <div className="container flex justify-center">
      <div className="flex flex-col justify-around h-[700px] bg-[#EAFFBD] w-[80%] p-5 rounded-3xl">

        <div className="flex justify-around items-center bg-white h-[100px] p-5 rounded-3xl">
          <div className="w-[20%] ">
            <img src={blok.TrainingOption1_Image.filename} />
          </div>
          <div className="w-[60%] ">
            <p>{blok.TrainingOption1_text}</p>
          </div>
          <div className="w-[15%]  flex justify-center">
            <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
          </div>
        </div>

        <div className="flex justify-around items-center bg-white h-[100px] p-5   rounded-3xl">
          <div className="w-[20%]">
            <img src={blok.TrainingOption2_Image.filename} />
          </div>
          <div className="w-[60%] ">
            <p>{blok.TrainingOption2_text}</p>
          </div>
          <div className="w-[15%] flex justify-center">
            <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
          </div>
        </div>

        <div className="flex justify-around items-center bg-white h-[100px] p-5 rounded-3xl">
          <div className="w-[20%]">
            <img src={blok.TrainingOption3_Image.filename} />
          </div>
          <div className="w-[60%]">
            <p>{blok.TrainingOption3_text}</p>
          </div>
          <div className="w-[15%] flex justify-center">
            <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
          </div>
        </div>

        <div className="flex justify-around items-center bg-white h-[100px] p-5 rounded-3xl">
          <div className="w-[20%]">
            <img src={blok.TrainingOption4_Image.filename} />
          </div>
          <div className="w-[60%]">
            <p>{blok.TrainingOption4_text}</p>
          </div>
          <div className="w-[15%] flex justify-center">
            <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
          </div>
        </div>

        <div className="flex justify-around items-center bg-white h-[100px] p-5 rounded-3xl">
          <div className="w-[20%]">
            <img src={blok.TrainingOption5_Image.filename} />
          </div>
          <div className="w-[60%]">
            <p>{blok.TrainingOption5_text}</p>
          </div>
          <div className="w-[15%] flex justify-center">
            <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Get in Touch</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
 
 
export default Training_OurOptions;