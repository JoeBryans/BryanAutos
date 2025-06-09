import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function SideNave({ Links }) {
  console.log("Links", Links);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={"cursor-pointer"} variant="outline">
          <AlignJustify />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription> */}
        </SheetHeader>
        <div className="flex flex-col gap-5 items-start px-5 py-4 ">
          {Links.map((link, i) => (
            <Link
              href={link.href}
              className="tex-zinc-600 hover:text-zinc-800 transition-all ease-in-out "
            >
              {link.name}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
