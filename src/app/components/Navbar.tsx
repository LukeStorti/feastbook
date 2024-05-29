import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import logo from "../../../public/logo.png";
import Image from "next/image";
import SearchFilter from "./SearchFilter";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky z-50 h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="hidden md:flex font-medium text-2xl italic  items-center gap-2 text-primary"
          >
            <Image src={logo} width={30} height={30} alt="logo" />
            Feast<span className="-ml-2 text-black">book</span>
          </Link>

          <SearchFilter />

          <div className="hidden md:flex items-center justify-between gap-2 ">
            <Button>Login</Button>

            <Button variant={"outline"}>Sign Up</Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
