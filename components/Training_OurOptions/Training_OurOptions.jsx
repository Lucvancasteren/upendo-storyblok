import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
import Link from "next/link";

const Training_OurOptions = ({ blok }) => (
  <div className="bg-[#002626] mt-20" {...storyblokEditable(blok)}>
    <h1 className="mb-10 text-5xl font-bold text-white flex justify-center">
      Our Options
    </h1>
    <div className="flex justify-center">
      <div className="flex flex-col justify-around h-[700px] bg-[#EAFFBD] w-[80%] p-5 rounded-3xl">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className="flex justify-around items-center bg-white h-[100px] p-5 rounded-3xl"
          >
            <div className="w-[20%]">
              <img
                src={blok[`TrainingOption${index}_Image`].filename}
                alt={`Training Option ${index}`}
              />
            </div>
            <div className="w-[55%]">
              <p>{blok[`TrainingOption${index}_text`]}</p>
            </div>
            <div className="w-[15%] flex justify-center">
              <Link href="/booking" passHref>
                <button className="bg-[#F4C5FF] px-6 py-2.5 rounded-2xl">
                  Book now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Training_OurOptions;
