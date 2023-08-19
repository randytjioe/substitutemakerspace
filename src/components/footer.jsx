import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import { HashLink } from "react-router-hash-link";
import { Link as ReachLink } from "react-router-dom";
import logo from "../assets/logo.png";
import WA from "../assets/WA.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";
import location from "../assets/location.png";
export default function Footer() {
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      {besar ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="28px"
        >
          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="center"
            gap="100px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="44px"
            >
              <Image src={logo} />
              <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Image width="24px" height="24px" src={location} />
                <Flex
                  width="268px"
                  color="#1C2C5A"
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="26px"
                >
                  Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa Timur,
                  Indonesia 60297
                </Flex>
              </Flex>
              <Flex
                display="flex"
                width="302px"
                justifyContent="center"
                alignItems="center"
                gap="36px"
              >
                <Link
                  to="https://api.whatsapp.com/send/?phone=6287855476158&text&type=phone_number&app_absent=0"
                  as={ReachLink}
                >
                  <Image src={WA} w="24px" h="24px" />
                </Link>
                <Link
                  to="https://www.instagram.com/substitute.makerspace/?hl=en"
                  as={ReachLink}
                >
                  <Image src={IG} w="24px" h="24px" />
                </Link>
                <Link
                  to="https://www.facebook.com/substitutemakerspace.sub/"
                  as={ReachLink}
                >
                  <Image src={FB} width="21px" height="20.874px" />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCIIUT6oYIe9rVNJScXi83NA"
                  as={ReachLink}
                >
                  <Image src={YTB} width="23.997px" height="18px" />
                </Link>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              height="192px"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
            >
              <Flex
                color="#1C2C5A"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                <HashLink smooth to="/#aboutme">
                  About Me
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#products">
                  Product & Services
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#facilities">
                  Facilities
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#faq">
                  FAQ
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#documentation">
                  Documentation
                </HashLink>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              gap="50px"
              flexDir={"column"}
              width="527px"
            >
              <Text
                color="#F0D411"
                fontSize="50px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                {" "}
                Our vision
              </Text>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="18px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                textAlign={"center"}
              >
                {" "}
                is to become a creative space where arts, culture, business, and
                technology converge to inspire and encourage new forms of
                innovation to spur the creative economy
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : medium ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="28px"
        >
          <Flex
            display="flex"
            width="767px"
            padding="0px 35px"
            alignItems="center"
            gap="50px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="44px"
              w="263px"
            >
              <Image src={logo} w="219px" h="55px" />
              <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Image width="24px" height="24px" src={location} />
                <Flex
                  width="173px"
                  color="#1C2C5A"
                  fontSize="10px"
                  fontStyle="normal"
                  fontWeight="400"
                  textAlign={"center"}
                  lineHeight="26px"
                >
                  Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa Timur,
                  Indonesia 60297
                </Flex>
              </Flex>
              <Flex
                display="flex"
                width="236px"
                justifyContent="center"
                alignItems="center"
                gap="36px"
              >
                <Link
                  to="https://api.whatsapp.com/send/?phone=6287855476158&text&type=phone_number&app_absent=0"
                  as={ReachLink}
                >
                  <Image src={WA} w="24px" h="24px" />
                </Link>
                <Link
                  to="https://www.instagram.com/substitute.makerspace/?hl=en"
                  as={ReachLink}
                >
                  <Image src={IG} w="24px" h="24px" />
                </Link>
                <Link
                  to="https://www.facebook.com/substitutemakerspace.sub/"
                  as={ReachLink}
                >
                  <Image src={FB} width="21px" height="20.874px" />
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCIIUT6oYIe9rVNJScXi83NA"
                  as={ReachLink}
                >
                  <Image src={YTB} width="23.997px" height="18px" />
                </Link>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              height="192px"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
            >
              <Flex
                color="#1C2C5A"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="2px"
                textTransform="uppercase"
              >
                <HashLink smooth to="/#aboutme">
                  About Me
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#products">
                  Product & Services
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#facilities">
                  Facilities
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#faq">
                  FAQ
                </HashLink>
              </Flex>
              <Flex
                color="#9A95AE"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                <HashLink smooth to="/#documentation">
                  Documentation
                </HashLink>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              flexDir={"column"}
              gap="10px"
              width="250px"
            >
              <Text
                color="#F0D411"
                fontSize="50px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                {" "}
                Our vision
              </Text>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
              >
                {" "}
                is to become a creative space where arts, culture, business, and
                technology converge to inspire and encourage new forms of
                innovation to spur the creative economy
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      ) : kecil ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="50px"
        >
          <Flex
            display="flex"
            width="300px"
            padding="0px 35px"
            flexDirection="column"
            alignItems="center"
            gap="50px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="44px"
            >
              <Image src={logo} />
              <Flex
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap="10px"
              >
                <Image width="24px" height="24px" src={location} />
                <Flex
                  width="268px"
                  color="#1C2C5A"
                  fontSize="10px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="26px"
                >
                  Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa Timur,
                  Indonesia 60297
                </Flex>
              </Flex>
            </Flex>

            <Flex
              display="flex"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              flexDir={"column"}
              gap="10px"
              width="250px"
            >
              <Text
                color="#F0D411"
                fontSize="50px"
                textAlign={"center"}
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                {" "}
                Our vision
              </Text>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                textAlign={"center"}
                lineHeight="28px"
              >
                {" "}
                is to become a creative space where arts, culture, business, and
                technology converge to inspire and encourage new forms of
                innovation to spur the creative economy
              </Flex>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            height="192px"
            flexDirection="column"
            alignItems="center"
            gap="18px"
          >
            <Flex
              color="#1C2C5A"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="2px"
              textTransform="uppercase"
            >
              <HashLink smooth to="/#aboutme">
                About Me
              </HashLink>
            </Flex>
            <Flex
              color="#9A95AE"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              <HashLink smooth to="/#products">
                Product & Services
              </HashLink>
            </Flex>
            <Flex
              color="#9A95AE"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              <HashLink smooth to="/#facilities">
                Facilities
              </HashLink>
            </Flex>
            <Flex
              color="#9A95AE"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              <HashLink smooth to="/#faq">
                FAQ
              </HashLink>
            </Flex>
            <Flex
              color="#9A95AE"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
            >
              <HashLink smooth to="/#documentation">
                Documentation
              </HashLink>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="302px"
            justifyContent="center"
            alignItems="center"
            gap="36px"
          >
            <Link
              to="https://api.whatsapp.com/send/?phone=6287855476158&text&type=phone_number&app_absent=0"
              as={ReachLink}
            >
              <Image src={WA} w="24px" h="24px" />
            </Link>
            <Link
              to="https://www.instagram.com/substitute.makerspace/?hl=en"
              as={ReachLink}
            >
              <Image src={IG} w="24px" h="24px" />
            </Link>
            <Link
              to="https://www.facebook.com/substitutemakerspace.sub/"
              as={ReachLink}
            >
              <Image src={FB} width="21px" height="20.874px" />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCIIUT6oYIe9rVNJScXi83NA"
              as={ReachLink}
            >
              <Image src={YTB} width="23.997px" height="18px" />
            </Link>
          </Flex>
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="14px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="24px"
          >
            © Copyright 2023 | Randy
          </Flex>
        </Flex>
      ) : null}
    </>
  );
}
