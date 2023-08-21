import {
  Flex,
  Center,
  Image,
  Link,
  useMediaQuery,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import WA from "../assets/WA.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";

export default function Navbar() {
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };
  return (
    <>
      {besar ? (
        <Center
          className={`navbar ${stickyClass}`}
          w="100%"
          p={"0px 60px"}
          alignItems="center"
          justifyContent={"space-between"}
          display="flex"
          fontFamily={"Plus Jakarta Sans"}
          zIndex={30}
          bgColor={"white"}
        >
          <Image src={logo} w={"273px"} h={"74px"}></Image>

          <Center
            display="flex"
            justifyContent="center"
            alignItems="center"
            flex="1 0 0"
            p={"0px 60px"}
            gap={"36px"}
          >
            <Flex
              color="#38466F"
              fontFamily="Plus Jakarta Sans"
              fontSize={"15px"}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink smooth to="/#aboutme" exact activeClassName="is-active">
                About Me
              </HashLink>
            </Flex>

            <Flex
              color="#38466F"
              fontFamily="Plus Jakarta Sans"
              fontSize={"15px"}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#products"
                exact
                activeClassName="is-active"
              >
                Product & Services
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontFamily="Plus Jakarta Sans"
              fontSize={"15px"}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#facilities"
                exact
                activeClassName="is-active"
              >
                Facilities
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontFamily="Plus Jakarta Sans"
              fontSize={"15px"}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink smooth to="/#faq" exact activeClassName="is-active">
                FAQ
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontFamily="Plus Jakarta Sans"
              fontSize={"15px"}
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#documentation"
                exact
                activeClassName="is-active"
              >
                Documentation
              </HashLink>
            </Flex>
          </Center>
          <Flex
            display={"flex"}
            justifyContent="center"
            alignItems="center"
            gap={"36px"}
          >
            <Link
              to="https://api.whatsapp.com/send/?phone=6287855476158&text&type=phone_number&app_absent=0"
              as={ReachLink}
            >
              <Image src={WA} w={"24px"} h="24px" />
            </Link>
            <Link
              to="https://www.instagram.com/substitute.makerspace/?hl=en"
              as={ReachLink}
            >
              <Image src={IG} w={"24px"} h={"24px"} />
            </Link>
            <Link
              to="https://www.facebook.com/substitutemakerspace.sub/"
              as={ReachLink}
            >
              <Image src={FB} w={"24px"} h={"24px"} />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCIIUT6oYIe9rVNJScXi83NA"
              as={ReachLink}
            >
              <Image src={YTB} w={"24px"} h={"24px"} />
            </Link>
          </Flex>
        </Center>
      ) : medium ? (
        <Center
          className={`navbar ${stickyClass}`}
          w="100%"
          p={"20px 25px"}
          alignItems="center"
          justifyContent={"center"}
          display="flex"
          fontFamily={"Plus Jakarta Sans"}
          zIndex={30}
          gap="20px"
          bgColor={"white"}
        >
          <Image src={logo} w={"181px"} h={["49px"]}></Image>

          <Center
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flex="1 0 0"
            p={"0px 5px"}
            fontSize="10px"
          >
            <Flex
              color="#38466F"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink smooth to="/#aboutme" exact activeClassName="is-active">
                About Me
              </HashLink>
            </Flex>

            <Flex
              color="#38466F"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#products"
                exact
                activeClassName="is-active"
              >
                Product & Services
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#facilities"
                exact
                activeClassName="is-active"
              >
                Facilities
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink smooth to="/#faq" exact activeClassName="is-active">
                FAQ
              </HashLink>
            </Flex>
            <Flex
              color="#38466F"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              bgColor={"white"}
              _hover={{
                color: "#1C2C5A",
                borderBottom: "3px solid #1C2C5A",
              }}
            >
              <HashLink
                smooth
                to="/#documentation"
                exact
                activeClassName="is-active"
              >
                Documentation
              </HashLink>
            </Flex>
          </Center>
          <Flex
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="15px"
          >
            <Link
              to="https://api.whatsapp.com/send/?phone=6287855476158&text&type=phone_number&app_absent=0"
              as={ReachLink}
            >
              <Image src={WA} w={"12px"} h={"12px"} />
            </Link>
            <Link
              to="https://www.instagram.com/substitute.makerspace/?hl=en"
              as={ReachLink}
            >
              <Image src={IG} w={"12px"} h={"12px"} />
            </Link>
            <Link
              to="https://www.facebook.com/substitutemakerspace.sub/"
              as={ReachLink}
            >
              <Image src={FB} w={"12px"} h={"12px"} />
            </Link>
            <Link
              to="https://www.youtube.com/channel/UCIIUT6oYIe9rVNJScXi83NA"
              as={ReachLink}
            >
              <Image src={YTB} w={"12px"} h={"12px"} />
            </Link>
          </Flex>
        </Center>
      ) : kecil ? (
        <Flex
          className={`navbar ${stickyClass}`}
          w="100%"
          h="47px"
          p={"20px 10px"}
          alignItems="center"
          justifyContent="center"
          display="flex"
          flex-shrink="0"
          fontFamily={"Plus Jakarta Sans"}
          zIndex={30}
          bgColor={"white"}
        >
          <Flex
            w="100%"
            p={"0px 10px"}
            alignItems="center"
            display="flex"
            flex-shrink="0"
            fontFamily={"Plus Jakarta Sans"}
            zIndex={30}
            gap="10px"
            bgColor={"white"}
          >
            <Image src={logo} w={"82px"} h={"19px"}></Image>

            <Center
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flex="1 0 0"
              fontSize={"5px"}
              p={"0px 5px"}
            >
              <Flex
                color="#38466F"
                fontFamily="Plus Jakarta Sans"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="10px"
                bgColor={"white"}
                _hover={{
                  color: "#1C2C5A",
                  borderBottom: "3px solid #1C2C5A",
                }}
              >
                <HashLink
                  smooth
                  to="/#aboutme"
                  exact
                  activeClassName="is-active"
                >
                  About Me
                </HashLink>
              </Flex>

              <Flex
                color="#38466F"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="10px"
                bgColor={"white"}
                _hover={{
                  color: "#1C2C5A",
                  borderBottom: "3px solid #1C2C5A",
                }}
              >
                <HashLink
                  smooth
                  to="/#products"
                  exact
                  activeClassName="is-active"
                >
                  Product & Services
                </HashLink>
              </Flex>
              <Flex
                color="#38466F"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
                bgColor={"white"}
                _hover={{
                  color: "#1C2C5A",
                  borderBottom: "3px solid #1C2C5A",
                }}
              >
                <HashLink
                  smooth
                  to="/#facilities"
                  exact
                  activeClassName="is-active"
                >
                  Facilities
                </HashLink>
              </Flex>
              <Flex
                color="#38466F"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="10px"
                bgColor={"white"}
                _hover={{
                  color: "#1C2C5A",
                  borderBottom: "3px solid #1C2C5A",
                }}
              >
                <HashLink smooth to="/#faq" exact activeClassName="is-active">
                  FAQ
                </HashLink>
              </Flex>
              <Flex
                color="#38466F"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="10px"
                bgColor={"white"}
                _hover={{
                  color: "#1C2C5A",
                  borderBottom: "3px solid #1C2C5A",
                }}
              >
                <HashLink
                  smooth
                  to="/#documentation"
                  exact
                  activeClassName="is-active"
                >
                  Documentation
                </HashLink>
              </Flex>
            </Center>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
}
