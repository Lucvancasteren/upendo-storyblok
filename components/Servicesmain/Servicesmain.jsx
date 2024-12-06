import { storyblokEditable } from "@storyblok/react/rsc";

const Servicesmain = ({ blok }) => (
  <div className="bg-[#002626] mt-8 mb-8" {...storyblokEditable(blok)}>
    <div className="w-[100%]">
      <div className="boven flex ">
        {/*1*/}
        <div className="w-[50%] bg-[#003a47]">
          <div className="bg-[#003A47] flex flex-col justify-between text-left p-10 space-y-4">
            <div className="flex justify-center">
              <img src={blok.Servicesmain_Image1.filename} alt="Service Main 1" className="w-[72%] h-auto"/>
            </div>
            <div className=" w-[90%] flex flex-col items-center">
              <div className="flex justify-start w-[70%]">
                <h2 className=" text-[#EAFFBD] text-3xl mb-2 font-bold">{blok.Servicesmain_Titel1}</h2>
              </div>
                <div className="ml-2 w-[72%]">
                  <p className=" text-white text-sm">{blok.Servicesmain_Tekst1}</p>
                </div>
                <div className="flex justify-start w-[70%] mt-4">
                  <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Discover</button>
                </div>
            </div>
          </div>
        </div>
        {/*2*/}
        <div className="w-[50%] bg-[#002626]">
          <div className="bg-[#002626] flex flex-col justify-between text-left p-10 space-y-4">
            <div className="flex justify-center">
              <img src={blok.Servicesmain_Image2.filename} alt="Service Main 1" className="w-[72%] h-auto"/>
            </div>
            <div className=" w-[90%] flex flex-col items-center">
              <div className="flex justify-start w-[70%]">
                <h2 className=" text-[#EAFFBD] text-3xl mb-2 font-bold">{blok.Servicesmain_Titel2}</h2>
              </div>
                <div className="ml-2 w-[72%]">
                  <p className=" text-white text-sm">{blok.Servicesmain_Tekst2}</p>
                </div>
                <div className="flex justify-start w-[70%] mt-4">
                  <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Discover</button>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="onder flex">
        {/*3*/}
        <div className="w-[50%] bg-[#002626]">
          <div className="bg-[#002626] flex flex-col justify-between text-left p-10 space-y-4">
            <div className="flex justify-center">
              <img src={blok.Servicesmain_Image3.filename} alt="Service Main 1" className="w-[72%] h-auto"/>
            </div>
            <div className=" w-[90%] flex flex-col items-center">
              <div className="flex justify-start w-[70%]">
                <h2 className=" text-[#EAFFBD] text-3xl mb-2 font-bold">{blok.Servicesmain_Titel3}</h2>
              </div>
                <div className="ml-2 w-[72%]">
                  <p className=" text-white text-sm">{blok.Servicesmain_Tekst3}</p>
                </div>
                <div className="flex justify-start w-[70%] mt-4">
                  <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Discover</button>
                </div>
            </div>
          </div>
        </div>
        {/*4*/}
        <div className="w-[50%] bg-[#003a47]">
          <div className="bg-[#003A47] flex flex-col justify-between text-left p-10 space-y-4">
            <div className="flex justify-center">
              <img src={blok.Servicesmain_Image4.filename} alt="Service Main 1" className="w-[72%] h-auto"/>
            </div>
            <div className=" w-[90%] flex flex-col items-center">
              <div className="flex justify-start w-[70%]">
                <h2 className=" text-[#EAFFBD] text-3xl mb-2 font-bold">{blok.Servicesmain_Titel4}</h2>
              </div>
                <div className="ml-2 w-[72%]">
                  <p className=" text-white text-sm">{blok.Servicesmain_Tekst4}</p>
                </div>
                <div className="flex justify-start w-[70%] mt-4">
                  <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Discover</button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Servicesmain;
