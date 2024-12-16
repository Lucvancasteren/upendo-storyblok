import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Home_reviews = ({ blok }) => (
  <div className="bg-[#002626] mb-10  flex flex-col justify-center items-center" {...storyblokEditable(blok)}>
    <div className="text-[#A8FF1A] mb-4"  style={{
                fontFamily: "Area, sans-serif",
                fontWeight: "500",
                fontSize: "60px",
              }}>
      {render(blok.review_header)}
    </div>
 
    <img className="" src={blok.revieuw_image.filename} />
  </div>
);
 
 
export default Home_reviews;