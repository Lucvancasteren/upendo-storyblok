import { storyblokEditable } from "@storyblok/react/rsc";
import { Mail, Lock } from "lucide-react";

const Register = ({ blok }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#002626]" {...storyblokEditable(blok ?? {})}>
            <img src={blok.Bar2.filename} className="w-full object-cover" />
            <div className="flex flex-col items-center w-full px-4 py-8">
                <button
                    className="self-start text-white hover:bg-[#7A9F92] transition-all p-2"
                    onClick={() => window.location.href = '/'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <div className="text-center text-white mb-12 max-w-lg">
                    <h1 className="text-2xl md:text-6xl font-bold mb-2">
                        Register to
                    </h1>
                    <h1 className="text-2xl md:text-6xl font-bold mb-4">
                        Upendo
                    </h1>
                    <p className="text-sm md:text-xl text-[#98B5AB]">
                         the Upendo Network: Let’s Grow Your Business Together!
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center bg-[#003838] rounded-2xl p-8 w-full max-w-4xl md:pb-12 pb-4">
                    <div className="hidden md:flex md:w-7/12 justify-center md:justify-start mb-8 md:mb-0 mr-8">
                        <img
                            src={blok.animatie.filename}
                            alt="Login animation"
                            className="object-cover rounded-lg max-w-full md:max-h-full"
                        />
                    </div>

                    <div className="w-full md:w-5/12 flex flex-col gap-6  ">
                        <h2 className="text-lg md:text-2xl font-bold text-white mb-1">Register</h2>

                        <div className="w-full max-w-md mb-4 flex flex-col gap-2 relative">
                            <img
                                src={blok.border.filename}
                                alt="Email Border"
                                className="w-full h-auto"
                            />
                            <div className="flex items-center w-full px-4 py-4 border-2 border-transparent absolute -top-2 ">
                                <Mail className="text-[#98B5AB] h-6 w-6 mr-3" />
                                <input
                                    type="email"
                                    placeholder="Name & last Name"
                                    className="w-full bg-transparent text-white text-base placeholder:text-[#98B5AB] focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-md mb-4 flex flex-col gap-2 relative">
                            <img
                                src={blok.border.filename}
                                alt="Email Border"
                                className="w-full h-auto"
                            />
                            <div className="flex items-center w-full px-4 py-4 border-2 border-transparent absolute -top-2 ">
                                <Mail className="text-[#98B5AB] h-6 w-6 mr-3" />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent text-white text-base placeholder:text-[#98B5AB] focus:outline-none"
                                />
                            </div>
                        </div>


                        <div className="w-full max-w-md mb-4 flex flex-col gap-2 relative">
                            <img
                                src={blok.border.filename}
                                alt="Password Border"
                                className="w-full h-auto"
                            />
                            <div className="flex items-center w-full px-4 py-4 border-2 border-transparent absolute -top-2">
                                <Lock className="text-[#98B5AB] h-6 w-6 mr-3" />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    className="w-full bg-transparent text-white text-base placeholder:text-[#98B5AB] focus:outline-none"
                                />
                            </div>
                        </div>
                        <div className="w-full max-w-md mb-4 flex flex-col gap-2 relative">
                            <img
                                src={blok.border.filename}
                                alt="Password Border"
                                className="w-full h-auto"
                            />
                            <div className="flex items-center w-full px-4 py-4 border-2 border-transparent absolute -top-2">
                                <Lock className="text-[#98B5AB] h-6 w-6 mr-3" />
                                <input
                                    type="password"
                                    placeholder=" Confirm password"
                                    className="w-full bg-transparent text-white text-base placeholder:text-[#98B5AB] focus:outline-none"
                                />
                            </div>
                        </div>

                        <button
                            className="w-full py-3 text-sm md:text-lg font-medium bg-gradient-to-r from-[#F8FFE5] to-[#FFC0CB] text-black hover:opacity-90 transition-opacity rounded-full"
                            onClick={() => window.location.href = '/'}
                        >
                            Register {'>'}
                        </button>

                    

                       
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;
