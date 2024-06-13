import { Icon } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <nav className="p-4 flex justify-between">
      <h1 className="text-2xl text-black font-bold text-center">
        AI Travel Planner
      </h1>
      <Icon as={CiShoppingCart} boxSize={10} />
    </nav>
  );
}

export default Header;
