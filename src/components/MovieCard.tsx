type MovieCardProps = {
  poster: any;
  title: string;
  genre: string;
  release_date: number;
};

export const MovieCard = ({
  poster,
  title,
  genre,
  release_date,
}: MovieCardProps) => {
  return (
    <>
      <div className="bg-blue-950 p-4 rounded shadow-md">
        <img
          src={poster}
          alt={title}
          className="w-full h-56 object-cover rounded"
        />
        <h2 className="text-lg font-semibold text-blue-200 mt-4">{title}</h2>
        <p className="text-blue-400">{genre}</p>
        <p className="text-blue-400 font-bold mt-5">{release_date}</p>
      </div>
    </>
  );
};
