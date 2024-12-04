import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const Servicesmain = ({ blok }) => (
  <div className="bg-[#002626] py-10 px-4" {...storyblokEditable(blok)}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Servicesmain 1 */}
      <div className="bg-[#003A47] text-center space-y-4">
        <img src={blok.Servicesmain_Image1.filename} alt="Service Main 1" className="max-w-full h-auto"/>
        <h2 className="text-[#EAFFBD] text-lg">
          {blok.Servicesmain_Titel1}
        </h2>
        <p className="text-white text-sm">{blok.Servicesmain_Tekst1}</p>
      </div>
      {/* Servicesmain 2 */}
      <div className="text-center space-y-4 my-10">
        <img src={blok.Servicesmain_Image2.filename} alt="Service Main 2" className="max-w-full h-auto"/>
        <h2 className="text-[#EAFFBD] text-lg">
          {blok.Servicesmain_Titel2}
        </h2>
        <p className="text-white text-sm">{blok.Servicesmain_Tekst2}</p>
      </div>
      {/* Servicesmain 3 */}
      <div className="text-center space-y-4">
        <img src={blok.Servicesmain_Image3.filename} alt="Service Main 3" className="max-w-full h-auto"/>
        <h2 className="text-[#EAFFBD] text-lg">
          {blok.Servicesmain_Titel3}
        </h2>
        <p className="text-white text-sm">{blok.Servicesmain_Tekst3}</p>
      </div>
      {/* Servicesmain 4 */}
      <div className="bg-[#003A47] text-center space-y-4 my-10">
        <img src={blok.Servicesmain_Image4.filename} alt="Service Main 4" className="max-w-full h-auto"/>
        <h2 className="text-[#EAFFBD] text-lg">
          {blok.Servicesmain_Titel4}
        </h2>
        <p className="text-white text-sm">{blok.Servicesmain_Tekst4}</p>
      </div>
    </div>
  </div>
);

export default Servicesmain;
