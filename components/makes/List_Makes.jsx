import { getByMake } from "@/action/action";
import { CarMakes } from "./BrowseMake";

export default async function ListMakes() {
  // const [selected, setSelected] = React.useState(null);
  async function handleClick(make) {
    "use server";
    // async function FetchMake(make) {
    //   console.log("make", make);
    // }
    // FetchMake();
    // selected = make;
  }
  // let selected = "";

  const res = await getByMake("Bmw");
  return (
    <div className="w-full   flex flex-col items-center justify-center gap-10 px-5 py-20 md:px-20">
      <h1 className="text-center font-bold text-4xl  text-zinc-800 relative z-20">
        Browse By Make
      </h1>
      <span className="text-center mt-2 font-semibold text-xl  text-zinc-800 relative z-20">
        Check out our hand-picked selection of new arrivals and special offers.
      </span>
      <div className="max-w-7xl w-[95%] flex flex-col items-center ">
        <CarMakes handleClick={handleClick} />
      </div>
      <div className="flex flex-wrap gap-5 items-center justify-center">
        {/* <Make selected={selected} /> */}
      </div>
    </div>
  );
}
