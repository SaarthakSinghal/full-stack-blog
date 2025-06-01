const Navbar = () => {
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-lg md:text-xl font-semibold">
        <img src="/logo.png" alt="logo" className="w-8 h-8" />
        <span>lamalog</span>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden"></div>
      {/* DESKTOP MENU */}
      <div className="hidden md:flex"></div>
    </div>
  );
};

export default Navbar;
