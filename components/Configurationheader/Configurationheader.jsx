import { storyblokEditable } from "@storyblok/react/rsc";
 
 
 
 
 
const Configurationheader = ({ blok }) => (
  <div className="bg-[#002626]" {...storyblokEditable(blok)}>
    <div className="mx-auto max-w-[1220px] px-6 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left">
          <h3 className="text-[#F4C5FF] text-4xl mb-2">
            {blok.Configurationheader_Titel1}
          </h3>
          <h1 className="text-[#A8FF1A] text-6xl font-bold mb-4">
            {blok.Configurationheader_Titel2}
          </h1>
          <button className="bg-[#F4C5FF] px-6 py-2 mt-2 rounded-2xl">Book it Now</button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src={blok.Configurationheader_Image.filename} alt="Configuration Header" className="max-w-full h-auto"/>
        </div>
      </div>
    </div>
  </div>
 
);
 
 
export default Configurationheader;