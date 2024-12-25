export const Home = () => {
  return (
    <>
      <main className="container flex flex-col items-center mt-6 w-full">
        <section className="section-one flex flex-col items-center">
          <h1 className="text-2xl text-zinc-300 text-center">
            Movie<span className="text-zinc-50 font-bold">Trail</span>
          </h1>
          <p className="text-zinc-200 text-xl mt-3 text-center mb-6">
            Follow the trail to your next{" "}
            <span className="text-zinc-50 font-bold">must-watch</span> movie -
            explore and discover.
          </p>
          <form className="search-group flex mt-6">
            <input
              type="text"
              placeholder="Search movies..."
              className="input input-bordered input-info w-full max-w-xs"
            />
            <button type="submit" className="btn btn-active btn-primary mx-3">
              Search
            </button>
          </form>
        </section>
        <section className="section-two mt-10">
          <h1 className="text-zinc-200 text-2xl">
            Most <span className="text-zinc-50 font-bold">Popular</span> Movies
          </h1>
        </section>
      </main>
    </>
  );
};
