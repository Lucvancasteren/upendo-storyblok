import { storyblokEditable } from "@storyblok/react/rsc";
import { Mail, Lock } from 'lucide-react';

const Login = ({ blok }) => {
    return (
        <div>
            <img src={blok.Bar.filename} />

            <div

                className="Login min-h-screen flex flex-col justify-center items-center py-8"
                style={{ backgroundColor: "#002626" }}

                {...storyblokEditable(blok ?? {})}
            >

                <button
                    className="absolute top-20 left-14 text-white   hover:bg-[#7A9F92] transition-all"
                    onClick={() => window.location.href = '/'}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="text-center text-white mb-12 px-4">
                    <h1 className="text-6xl font-bold mb-4">{blok.header.filename}Sign in to upendo</h1>
                    <p className="text-xl text-[#98B5AB]">{blok.Quote.filename}Join the Upendo Network: Lets Grow Your Business Together!</p>
                </div>


                <div className="container mx-auto px-4">
                    <div className="bg-[#003838] rounded-2xl p-8 flex items-center justify-between gap-8">
                        <div className="w-[50%] h-[500px] relative md:block hidden">

                            <img
                                src={blok.animatie.filename}
                                alt="Login animation"
                                className="object-cover rounded-lg"
                            />

                        </div>

                        <div className="w-1/2 md:w-full max-w-[400px] space-y-6">
                            <h2 className="text-2xl font-bold text-white mb-4">Log in</h2>

                            <div className="relative">
                                <img src={blok.border.filename} alt="background" className="w-full h-full object-cover" />


                                <div className="absolute inset-0 flex items-center pl-3 pr-4">
                                    <Mail className="text-[#98B5AB] h-5 w-5 mr-2" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="w-full bg-transparent text-white placeholder:text-[#98B5AB] py-3 rounded-full text-lg focus:outline-none"
                                    />
                                </div>
                            </div>
                            <div className="relative">
                                <img src={blok.border.filename} alt="background" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 flex items-center pl-3 pr-4">
                                    <Lock className="text-[#98B5AB] h-5 w-5 mr-2" />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full bg-transparent text-white placeholder:text-[#98B5AB] py-3 rounded-full text-lg focus:outline-none"
                                    />
                                </div>
                            </div>
                            <button
                                className="w-full py-3 text-lg font-medium bg-gradient-to-r from-[#F8FFE5] to-[#FFC0CB] text-black hover:opacity-90 transition-opacity rounded-full"
                            >
                                Sign in {'>'}
                            </button>
                            <button
                                variant="outline"
                                className="w-full py-3 text-lg font-medium bg-white text-black hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 rounded-full"
                            >
                                <img
                                    src="https://www.google.com/favicon.ico"
                                    alt="Google"
                                    className="w-5 h-5"
                                />
                                Log in with Google
                            </button>
                            <p className="text-center text-[#98B5AB]">
                                Don't have an account?
                                <a href="/signup" className="text-white ml-1 hover:underline">
                                    Sign up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;
