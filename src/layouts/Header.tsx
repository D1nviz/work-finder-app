import { Link, useLocation } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Logo from "@/assets/logo.png";
import SearchDialog from "@/components/search-button";
import UserMenu from "@/components/user-menu";

const authRoutes = ["/login", "/register"];

export default function Header() {
  const location = useLocation();

  if (authRoutes.includes(location.pathname)) {
    return null;
  }
  return (
    <header className="bg-white shadow-md py-3 ">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link to="/">
          <img className="w-11 h-11" src={Logo} alt="logo" />
        </Link>

        <SearchDialog />
        <UserMenu />
      </MaxWidthWrapper>
    </header>
  );
}
