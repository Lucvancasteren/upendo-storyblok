import { storyblokEditable } from "@storyblok/react/rsc";

const Servicesheader = ({ blok }) => {
  const words = blok.Servicesheader_Titel2.split(" ");
  const lastWord = words.pop();
  const restOfText = words.join(" ");

  return (
    <div className="bg-[#002626]" {...storyblokEditable(blok)}>
      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="
           pl-16">
            <h3 className="text-[#F4C5FF] text-lg">{blok.Servicesheader_Titel1}</h3>
            <h1 className="text-[#FFFFFF] text-2xl font-bold"> {restOfText}{" "} <span className="text-[#A8FF1A]">{lastWord}</span> </h1>
            <h3 className="text-[#EAFFBD] text-lg">{blok.Servicesheader_Titel3}</h3>
          </div>
          <div className="flex justify-center">
            <img src={blok.Servicesheader_Image.filename} alt="Service Header" className="max-w-full h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesheader;
