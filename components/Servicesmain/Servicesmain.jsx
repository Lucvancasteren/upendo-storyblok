import { storyblokEditable } from "@storyblok/react/rsc";

const Servicesmain = ({ blok }) => (
  <div className="bg-[#002626] py-10 px-4" {...storyblokEditable(blok)}>
    <div className="mx-auto max-w-[1220px] px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {/*servicesmain 1*/}
        <div className="bg-[#003A47] -ml-44 flex flex-col justify-between text-left p-4 space-y-4">
          <img src={blok.Servicesmain_Image1.filename} alt="Service Main 1" className="max-w-full h-auto ml-44"/>
          <div>
            <h2 className="ml-44 text-[#EAFFBD] text-lg">{blok.Servicesmain_Titel1}</h2>
            <p className="ml-44 text-white text-sm">{blok.Servicesmain_Tekst1}</p>
            <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl ml-44 mt-3">Discover</button>
          </div>
        </div>
        {/*servicesmain 2*/}
        <div className="flex flex-col justify-between text-left p-4 space-y-4">
          <img src={blok.Servicesmain_Image2.filename} alt="Service Main 2" className="max-w-full h-auto pt-32"/>
          <div>
            <h2 className="text-[#EAFFBD] text-lg">{blok.Servicesmain_Titel2}</h2>
            <p className="text-white text-sm">{blok.Servicesmain_Tekst2}</p>
            <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl mt-3">Discover</button>
          </div>
        </div>
        {/*servicesmain 3*/}
        <div className="flex flex-col justify-between text-left p-4 space-y-4">
          <img src={blok.Servicesmain_Image3.filename} alt="Service Main 3" className="max-w-full h-auto"/>
          <div>
            <h2 className="text-[#EAFFBD] text-lg">{blok.Servicesmain_Titel3}</h2>
            <p className="text-white text-sm">{blok.Servicesmain_Tekst3}</p>
            <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl mt-3">Discover</button>
          </div>
        </div>
        {/*servicesmain 4*/}
        <div className="bg-[#003A47] -mr-44 flex flex-col justify-between text-left p-4 space-y-4">
          <img src={blok.Servicesmain_Image4.filename} alt="Service Main 4" className="max-w-full h-auto mr-44"/>
          <div>
            <h2 className="text-[#EAFFBD] mr-44 text-lg">{blok.Servicesmain_Titel4}</h2>
            <p className="text-white text-sm mr-44">{blok.Servicesmain_Tekst4}</p>
            <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl mt-3">Discover</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Servicesmain;
