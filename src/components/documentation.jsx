import {
  Button,
  Flex,
  Image,
  Text,
  IconButton,
  useBreakpointValue,
  Box,
  Stack,
  Heading,
  Container,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import logo from "../assets/logo.png";
import WA from "../assets/WA P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import D4 from "../assets/D4.jpg";
import D5 from "../assets/D5.jpg";
import D6 from "../assets/D6.jpg";
import D7 from "../assets/D7.jpg";
import D8 from "../assets/D8.jpg";
import React from "react";

import Slider from "react-slick";
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Documentation() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const data = [
    {
      image: [D1],
      caption: ["sadadasdasd"],
    },
    { image: [D2], caption: ["dsasdasdasdasd"] },
    { image: [D3], caption: ["dasdasdasdasd"] },
    { image: [D4], caption: ["asdasdasdasd"] },
  ];
  return (
    <>
      {besar ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="14px"
          py="114px"
          id="documentation"
        >
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="60px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="70px"
          >
            Documentation
          </Flex>
          <Center>
            <Box
              position={"relative"}
              py="10px"
              height={"524px"}
              width={"1321px"}
              overflow={"hidden"}
            >
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {/* Left Icon */}
              <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt />
              </IconButton>
              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt />
              </IconButton>
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {/* {data?.map((product, index) => (
                <>
                  <Flex flexDir={"column"}>
                    <Box
                      key={index}
                      position="relative"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      backgroundImage={product.image}
                      height={"524px"}
                      width={"1321px"}
                    />
                    <Center padding={"10px"} color="black" fontSize={"50px"}>
                      {product.caption}
                    </Center>
                  </Flex>
                </>
              ))} */}
                {data.map((card, index) => (
                  <Box
                    key={index}
                    height={"6xl"}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                  >
                    {/* This is the block you need to change, to customize the caption */}
                    <Container
                      size="container.lg"
                      height="600px"
                      position="relative"
                    >
                      <Stack
                        spacing={6}
                        w={"full"}
                        maxW={"lg"}
                        position="absolute"
                        top="50%"
                        transform="translate(0, -50%)"
                      >
                        <Heading
                          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        >
                          {card.caption}
                        </Heading>
                        {/* <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color="GrayText"
                      >
                        {card.text}
                      </Text> */}
                      </Stack>
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Center>
        </Flex>
      ) : medium ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="14px"
          py="114px"
          id="documentation"
        >
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="70px"
          >
            Documentation
          </Flex>
          <Center>
            <Box position={"relative"} w="655px" h="335px" overflow={"hidden"}>
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {/* Left Icon */}
              <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt />
              </IconButton>
              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt />
              </IconButton>
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {/* {data?.map((product, index) => (
                <>
                  <Flex flexDir={"column"}>
                    <Box
                      key={index}
                      position="relative"
                      backgroundPosition="center"
                      backgroundRepeat="no-repeat"
                      backgroundSize="cover"
                      backgroundImage={product.image}
                      height={"524px"}
                      width={"1321px"}
                    />
                    <Center padding={"10px"} color="black" fontSize={"50px"}>
                      {product.caption}
                    </Center>
                  </Flex>
                </>
              ))} */}
                {data.map((card, index) => (
                  <Box
                    key={index}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    w="655px"
                    h="335px"
                    backgroundImage={`url(${card.image})`}
                  >
                    {/* This is the block you need to change, to customize the caption */}
                    <Container
                      size="container.lg"
                      height="600px"
                      position="relative"
                    >
                      <Stack
                        spacing={6}
                        w={"full"}
                        maxW={"lg"}
                        position="absolute"
                        top="50%"
                        transform="translate(0, -50%)"
                      >
                        <Heading
                          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        >
                          {card.caption}
                        </Heading>
                        {/* <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color="GrayText"
                      >
                        {card.text}
                      </Text> */}
                      </Stack>
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Center>
        </Flex>
      ) : kecil ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="14px"
          id="documentation"
        >
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="12px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="70px"
          >
            Documentation
          </Flex>
          <Center>
            <Box
              position={"relative"}
              py="10px"
              height={"154px"}
              width={"274px"}
              overflow={"hidden"}
            >
              {/* CSS files for react-slick */}
              <link
                rel="stylesheet"
                type="text/css"
                charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
              />
              <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
              />
              {/* Left Icon */}
              <IconButton
                aria-label="left-arrow"
                colorScheme="messenger"
                borderRadius="100%"
                position="absolute"
                left={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickPrev()}
              >
                <BiLeftArrowAlt />
              </IconButton>
              {/* Right Icon */}
              <IconButton
                aria-label="right-arrow"
                colorScheme="messenger"
                borderRadius="full"
                position="absolute"
                right={side}
                top={top}
                transform={"translate(0%, -50%)"}
                zIndex={2}
                onClick={() => slider?.slickNext()}
              >
                <BiRightArrowAlt />
              </IconButton>
              {/* Slider */}
              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {data.map((card, index) => (
                  <Box
                    key={index}
                    position="relative"
                    h="154px"
                    w="274px"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    backgroundImage={`url(${card.image})`}
                  >
                    {/* This is the block you need to change, to customize the caption */}
                    <Container
                      size="container.lg"
                      height="100px"
                      position="relative"
                    >
                      <Stack
                        spacing={6}
                        w={"full"}
                        maxW={"lg"}
                        position="absolute"
                        top="50%"
                        transform="translate(0, -50%)"
                      >
                        <Heading
                          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                        >
                          {card.caption}
                        </Heading>
                        {/* <Text
                        fontSize={{ base: "md", lg: "lg" }}
                        color="GrayText"
                      >
                        {card.text}
                      </Text> */}
                      </Stack>
                    </Container>
                  </Box>
                ))}
              </Slider>
            </Box>
          </Center>
        </Flex>
      ) : null}
    </>
  );
}
