import { storyblokEditable } from "@storyblok/react/rsc";

const Servicesheader = ({ blok }) => {
  const words = blok.Servicesheader_Titel2.split(" ");
  const lastWord = words.pop();
  const restOfText = words.join(" ");

  return (
    <div className="bg-[#002626]" {...storyblokEditable(blok)}>
      <div className="mx-auto max-w-[1220px] px-6 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-left">
            <h3 className="text-[#F4C5FF] text-4xl mb-2">
              {blok.Servicesheader_Titel1}
            </h3>
            <h1 className="text-[#FFFFFF] text-6xl font-bold mb-4">
              {restOfText}{" "}
              <span className="text-[#A8FF1A]">{lastWord}</span>
            </h1>
            <h3 className="text-[#EAFFBD] text-3xl">
              {blok.Servicesheader_Titel3}
            </h3>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src={blok.Servicesheader_Image.filename} alt="Service Header" className="max-w-full h-auto"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicesheader;
