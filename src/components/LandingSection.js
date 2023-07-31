import React from "react";
import { VStack, Box, Heading, Text, Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import heroImage from "../images/photo3.jpg";

const LandingSection = () => {
  return (
    <FullScreenSection isDarkBackground backgroundColor="#14532d" spacing={8}>
      <VStack w="90%" py={16} alignItems="center">
        {/* Hero Image */}
        <Image src={heroImage} height="60vmin" alt="Hero Image" />

        {/* Hero Title */}
        <Heading as="h1" fontSize="6vw" textAlign="center" mt={8}>
          Unleash Your Digital Journey with Our Photo Gallery
        </Heading>

        {/* Hero Text */}
        <Text fontSize="4vmin" textAlign="center" mt={8}>
          Welcome to the Photo Gallery, where photographers can showcase their
          masterpieces, connect with a global audience, and turn their passion
          into a profitable venture. Empowering photographers to share,
          monetize, and expand their creative horizons, one snapshot at a time.
          Capture the world, and let it capture you.
        </Text>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
