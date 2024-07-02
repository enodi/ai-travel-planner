import { Fragment } from "react";
import { Icon, useDisclosure } from "@chakra-ui/react";
import { CiShoppingCart } from "react-icons/ci";

import Drawer from "@/src/components/common/drawer/Drawer";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <nav className="p-4 flex justify-between">
        <h1 className="text-2xl text-black font-bold text-center">
          AI Travel Planner
        </h1>
        <Icon as={CiShoppingCart} boxSize={10} onClick={onOpen} />
      </nav>
      <Drawer onClose={onClose} isOpen={isOpen}></Drawer>
    </Fragment>
  );
}

export default Header;
