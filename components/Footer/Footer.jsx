import { storyblokEditable } from "@storyblok/react/rsc";


const Footer = ({ blok }) => (
  <div className="bg-[#002626] bg-cover bg-center" style={{ backgroundImage: `url(${blok.footer_achtegrond.filename})` }}{...storyblokEditable(blok)}>
      <img className="w-[100vw] mt-5"
          src={blok.footer_lijn.filename}
        />
        
    <div className="container lg:mx-auto p-6">
          <img className="h-9"
            src={blok.footer_logo.filename}
          />

        <div className=" w-[125px] flex justify-between mt-1">
          <img className="" src={blok.footer_socials_F.filename}/>
          <img className="" src={blok.footer_socials_X.filename}/>
          <img className="" src={blok.footer_socials_L.filename}/>
          <img className="" src={blok.footer_socials_I.filename}/>
        </div>

        <div className="flex justify-between mt-10 w-[40%]">
  <div className="h-[125px] flex flex-col justify-between text-[#EAFFBD]">
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      About us
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Services
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Pricing
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Training
    </h4>
  </div>

  <div className="h-[125px] flex flex-col justify-between text-[#EAFFBD]">
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Configuration
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Visualisation
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Optimalization
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Analysis
    </h4>
  </div>

  <div className="h-[125px] flex flex-col justify-between text-[#EAFFBD]">
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Contact us
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Our team
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Support
    </h4>
    <h4 className="hover:text-[#F4C5FF] cursor-pointer transition duration-300">
      Careers
    </h4>
  </div>
</div>

    </div>

    <div className="flex justify-center text-[#EAFFBD] mt-[80px]">
      <p>© 2024 Upendo. Alle rechten voorbehouden</p>
    </div>
  </div>
 
);
 
 
export default Footer;
