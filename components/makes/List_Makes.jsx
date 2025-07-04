import Make from "./BrowseMake";

export default function ListMakes() {
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-10 px-5 py-20 md:px-20">
      <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
        Browse By Make
      </h1>
      <span className="text-center mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
        Check out our hand-picked selection of new arrivals and special offers.
      </span>
    
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <Make  />
      </div>
    </div>
  );
}
