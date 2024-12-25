export const Navbar = () => {
  return (
    <>
      <nav className="wrapper flex items-center justify-around p-3 text-zinc-300 text-xl">
        <a href="/">
          Movie<span className="text-zinc-50 font-bold">Trail</span>
        </a>
        <div className="links">
          <ul className="flex mx-3" style={{ gap: "18px" }}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/favorites">Favorites</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
