import { Plane } from "lucide-react";

const Logo = () => {
  return (
    <header className="w-full py-8 text-center bg-gradient-to-r from-blue-900 via-slate-800 to-blue-900 shadow-lg">
      <h1 className="flex items-center justify-center gap-4 text-4xl md:text-6xl font-monoton tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400 drop-shadow-md">
        <Plane className="h-10 w-10 md:h-16 md:w-16 text-blue-400 rotate-[-10deg]" /> 
        FAR AWAY 
        <Plane className="h-10 w-10 md:h-16 md:w-16 text-indigo-400 rotate-[0deg] scale-x-[-1]" />
      </h1>
      <p className="mt-2 text-slate-400 font-quicksand font-medium text-sm md:text-base tracking-widest uppercase">
        Premium Travel Companion
      </p>
    </header>
  );
};

export default Logo;
