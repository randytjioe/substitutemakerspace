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
import WA from "../assets/WA-P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";
import D1 from "../assets/D1.jpg";
import D2 from "../assets/D2.jpg";
import D3 from "../assets/D3.jpg";
import D4 from "../assets/D4.jpg";
import D5 from "../assets/D5.jpg";

import D7 from "../assets/D7.jpg";
import D8 from "../assets/D8.jpg";
import D9 from "../assets/D9.JPG";
import D10 from "../assets/D10.JPG";
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
      caption: [
        "Zero Waste Fashion w/ Aryani Widagdo Creativity Nest tahun 2019",
      ],
    },
    { image: [D9], caption: ["Creative Hub Academy tahun 2019"] },
    {
      image: [D10],
      caption: [
        "Pelatihan Menjahit Popok Bayi bersama Muslimat NU - Fatayat tahun 2021",
      ],
    },
    { image: [D2], caption: ["BOSCH Launching Product tahun 2022"] },
    { image: [D3], caption: ["Shibori tahun 2021"] },
    { image: [D4], caption: ["Pottery Painting Workshop tahun 2022"] },
    { image: [D5], caption: ["Linocut Workshop tahun 2023"] },
    {
      image: [D8],
      caption: ["Program Surabaya Ramah Pesepeda bekerjasama dengan ITDP"],
    },
    {
      image: [D11],
      caption: ["Carpentrip tahun 2019"],
    },
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
            color="#807D8A"
            textAlign="center"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="26px"
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

              <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {data.map((card, index) => (
                  <Box
                    key={index}
                    position="relative"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    backgroundSize="cover"
                    height={"524px"}
                    width={"1321px"}
                    backgroundImage={`url(${card.image})`}
                  >
                    <Center
                      display="flex"
                      height={"524px"}
                      width={"1321px"}
                      alignItems="flex-end"
                      py="50px"
                    >
                      <Heading
                        fontSize={"24px"}
                        color="#1C2C5A"
                        backgroundColor={"white"}
                        px="10px"
                        py="5px"
                      >
                        {card.caption}
                      </Heading>
                    </Center>
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
                    <Center
                      display="flex"
                      w="655px"
                      h="335px"
                      alignItems="flex-end"
                      py="50px"
                    >
                      <Heading
                        fontSize={"14px"}
                        color="#1C2C5A"
                        backgroundColor={"white"}
                        px="10px"
                        py="5px"
                      >
                        {card.caption}
                      </Heading>
                    </Center>
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
                <BiLeftArrowAlt w="5px" h="5px" />
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
                    <Center
                      display="flex"
                      h="154px"
                      w="274px"
                      alignItems="flex-end"
                      py="50px"
                    >
                      <Heading
                        fontSize={"6px"}
                        color="#1C2C5A"
                        backgroundColor={"white"}
                        px="10px"
                        py="5px"
                      >
                        {card.caption}
                      </Heading>
                    </Center>
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
