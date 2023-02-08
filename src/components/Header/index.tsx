import { Box } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import Image from "next/image";

export function Header() {
  return (
    <header>
      <Box
        bg="Background"
        display="flex"
        alignItems="center"
        justifyContent="center"
        h={200}
      >
        <Image src={logo as string} alt="Logo" />
      </Box>
    </header>
  );
}
