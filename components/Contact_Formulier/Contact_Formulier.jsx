
import { storyblokEditable } from "@storyblok/react/rsc";
import { render } from "storyblok-rich-text-react-renderer";
 
const Contact_Formulier = ({ blok }) => (
  <div className="bg-[#002626] mb-20" {...storyblokEditable(blok)}>
     <div className="flex justify-center">
      <div className="flex flex-col justify-around bg-[#003A47] w-[80%] p-5 rounded-3xl">
        <h1 className="mb-8 text-6xl font-bold text-white flex justify-center">Contact us</h1>

          <div className="flex flex-col justify-center items-center mt-5">
            <div className="flex justify-start mb-2 w-[69%]">
              <h1 className="text-white" style={{
                      fontFamily: "Martian Mono, monospace",
                      fontWeight: "100",
                      fontSize: "20px",
                    }}>Name (First & Last Name)</h1>
            </div>
              <div className="w-[70%]">
                <input
                  className="w-full bg-transparent border-2 p-2 border-[#A8FF1A] rounded-2xl text-white placeholder-[#F4C5FF]"
                  type="text"
                  placeholder="Your name here..."
                  />
              </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex justify-start mb-2 w-[69%]">
            <h1 className="text-white" style={{
                    fontFamily: "Martian Mono, monospace",
                    fontWeight: "100",
                    fontSize: "20px",
                  }}>Phone Number</h1>
          </div>
              <div className="w-[70%]">
                <input
                  className="w-full bg-transparent border-2 p-2 border-[#A8FF1A] rounded-2xl text-white placeholder-[#F4C5FF]"
                  type="text"
                  placeholder="Your number here..."
                  />
              </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex justify-start mb-2 w-[69%]">
            <h1 className="text-white" style={{
                    fontFamily: "Martian Mono, monospace",
                    fontWeight: "100",
                    fontSize: "20px",
                  }}>E-mail Address</h1>
          </div>
              <div className="w-[70%]">
                <input
                  className="w-full bg-transparent border-2 p-2 border-[#A8FF1A] rounded-2xl text-white placeholder-[#F4C5FF]"
                  type="text"
                  placeholder="Your address here..."
                  />
              </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-5">
          <div className="flex justify-start mb-2 w-[69%]">
            <h1 className="text-white" style={{
                    fontFamily: "Martian Mono, monospace",
                    fontWeight: "100",
                    fontSize: "20px",
                  }}>Notes (Not Required)</h1>
          </div>
              <div className="w-[70%]">
                  <textarea className="w-full bg-transparent border-2 p-2 border-[#A8FF1A] rounded-2xl text-white placeholder-[#F4C5FF]" placeholder="Leave a message here...">
                  </textarea>
              </div>

              <div className="flex justify-end mt-5 mb-10 w-[70%]">
                <button className="bg-[#F4C5FF] px-6 py-2 rounded-2xl">Submit</button>
              </div>
        </div>
      </div>
    </div>
  </div>
);
 
 
export default Contact_Formulier;