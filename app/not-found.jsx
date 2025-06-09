import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] w-full ">
      <h2 className="text-3xl font-bold text-zinc-800">Not Found</h2>
      <p className="text-xl font-bold text-zinc-600">
        Could not find requested resource
      </p>
      <Link href="/">
        <Button className="bg-[#0A1931] mt-4 hover:bg-[#0A1931]/80 cursor-pointer">
          <ChevronLeft />
          Return Home
        </Button>
      </Link>
    </div>
  );
}
