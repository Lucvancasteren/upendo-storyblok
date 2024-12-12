import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";



const Configuaration_body = ({ blok }) => (
  <div {...storyblokEditable(blok)}>
    <div className="flex justify-center items-center bg-[#003A47] rounded-3xl mt-20">
      <div className="text-white w-[37%]"style={{
                fontFamily: "Area, sans-serif",
                fontWeight: "500",
                fontSize: "50px",
              }}>{render(blok.config_bodyHeader)}</div>
    </div>

<div className="flex justify-end w-[100%] h-[500px] ">
    <div className="flex  mt-20 w-[90%] bg-[#003A47]">
        <img src={blok.config_bodyImage1.filename}/>

        <div className="w-[100%] flex justify-center">
          <div className="text-white flex flex-col justify-center w-[70%] bg-[#003A47] p-5" style={{ fontSize: "16px" }}>
            <div className="mb-7">
              {blok.config_bodytext1}
            </div>
            <div>
            {blok.config_bodytext1}
            </div>
          </div>
        </div>
    </div>
</div>

<div className="flex  w-[100%] ">
    <div className="flex  mt-20 w-[90%]  bg-[#003A47]">
        <div className="w-[100%] flex justify-center">
          <div className="text-white flex flex-col justify-center w-[70%] bg-[#003A47] p-5" style={{ fontSize: "16px" }}>
            <div className="mb-7">
              {blok.config_bodytext2}
            </div>
            <div>
            {blok.config_bodytext2}
            </div>
          </div>
        </div>
        <img src={blok.config_bodyImage2.filename}/>
    </div>
</div>

<div className="flex justify-center mt-10">
  <button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Book Now</button>
</div>

</div>

);

export default Configuaration_body;
