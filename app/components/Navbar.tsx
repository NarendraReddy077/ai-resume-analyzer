import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-20 px-3">
      <nav className="max-w-6xl mx-auto my-3 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/80 backdrop-blur px-6 py-3 shadow-lg">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-sm font-semibold text-white">
            R
          </div>
          <span className="text-lg font-semibold tracking-tight text-slate-100">
            Resu<span className="text-indigo-400">mind</span>
          </span>
        </Link>

        <div className="flex items-center gap-3">
        <Link
            to="/upload"
            className="inline-flex items-center gap-1.5 rounded-full
                    border border-white/10
                    px-5 py-2 text-sm font-medium
                    text-slate-100
                    hover:bg-purple-500/15 hover:text-indigo-200
                    transition-colors duration-300"
        >
            Upload Resume
        </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
