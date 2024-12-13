import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Configuaration_CTA = ({ blok }) => (
  <div className="bg-[#002626] my-20" {...storyblokEditable(blok)}>
    <div className="flex justify-center mb-10">
      <h1 className="text-5xl font-bold text-white mb-5">Other Options</h1>
    </div>

    <div className="flex justify-center">
      <div className="flex justify-between w-[85%]">
        <div className="flex flex-col items-center">
          <div><img src={blok.CTAImage1.filename}/></div>
          <div className="text-white my-3" style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "500",
                fontSize: "32px",
              }}>{blok.CTATitel1}</div>
          <div><button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Discover</button></div>
        </div>

        <div className="flex flex-col items-center">
          <div><img src={blok.CTAImage2.filename}/></div>
          <div className="text-white my-3" style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "500",
                fontSize: "32px",
              }}>{blok.CTATitel2}</div>
          <div><button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Discover</button></div>
        </div>

        <div className="flex flex-col items-center">
          <div><img src={blok.CTAImage3.filename}/></div>
          <div className="text-white my-3" style={{
                fontFamily: "Martian Mono, monospace",
                fontWeight: "500",
                fontSize: "32px",
              }}>{blok.CTATitel3}</div>
          <div><button className="bg-[#F4C5FF] px-5 py-2.5 rounded-2xl">Discover</button></div>
        </div>

      </div>
    </div>


  </div>
);


export default Configuaration_CTA;