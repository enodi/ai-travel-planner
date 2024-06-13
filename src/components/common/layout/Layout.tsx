import { PropsWithChildren } from "react";
import { VStack } from "@chakra-ui/react";

import Header from "@/src/components/common/header/Header";

type Props = PropsWithChildren<{}>;

function Layout({ children }: Props) {
  return (
    <div className="md:max-w-[1200px] max-w-[1000px] m-auto px-10">
      <VStack align="stretch">
        <Header />
        <main>{children}</main>
      </VStack>
    </div>
  );
}

export default Layout;
