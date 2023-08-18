import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import WA from "../assets/WA P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO1.jpg";
import HERO2 from "../assets/HERO2.jpg";
export default function Hero() {
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      {besar ? (
        <Flex
          display="flex"
          p="120px 120px"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap="10px"
        >
          <Center
            width="100%"
            maxW={"1200px"}
            height="726px"
            bgImage={HERO}
            borderRadius={"50px"}
          >
            <Center
              display="flex"
              w="100%"
              height="396px"
              padding="20px 50px"
              flexDirection="column"
              alignItems="flex-start"
              gap="18px"
              background={"rgba(255, 250, 215, 0.50)"}
            >
              <Flex
                color="#1C2C5A"
                fontSize="60px"
                fontWeight="600"
                lineHeight="70px"
              >
                An access to tools and knowledges
              </Flex>
              <Flex
                fontSize="18px"
                fontStyle="normal"
                lineHeight="28px"
                gap="0px"
              >
                Berdiri sejak 2019
              </Flex>

              <Button
                display="flex"
                padding="18px 32px"
                alignItems="center"
                gap="10px"
                w={["71px", "107px", "158px"]}
                h={["28px", "40px", "64px"]}
                borderRadius="12px"
                background="#1C2C5A"
                fontSize={["8px", "12px", "18px"]}
                color={"white"}
                _hover={{
                  bgColor: "#F0D411",
                  color: "black",
                }}
              >
                <Image
                  src={WA}
                  w={["14px", "18px", "21px"]}
                  h={["14px", "18px", "21px"]}
                  _hover={{
                    color: "black",
                  }}
                ></Image>
                Ask Me
              </Button>
            </Center>
          </Center>
        </Flex>
      ) : medium ? (
        <Flex
          display="flex"
          p={["10px", "20px", "120px 120px"]}
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap="10px"
        >
          <Center
            width="100%"
            maxW={"1200px"}
            height={["266px", "444px", "726px"]}
            bgImage={HERO}
            borderRadius={"50px"}
          >
            <Center
              display="flex"
              w="100%"
              height={["123px", "210px", "396px"]}
              padding={["10px 15px", "20px 50px", "20px 50px"]}
              flexDirection="column"
              alignItems="flex-start"
              gap={["10px", "15px", "18px"]}
              background={"rgba(255, 250, 215, 0.50)"}
            >
              <Flex
                color="#1C2C5A"
                fontSize={["18px", "28px", "60px"]}
                fontWeight="600"
                lineHeight="70px"
              >
                An access to tools and knowledges
              </Flex>
              <Flex
                fontSize="18px"
                fontStyle="normal"
                lineHeight="28px"
                gap="0px"
              >
                Berdiri sejak 2019
              </Flex>

              <Button
                display="flex"
                padding="18px 32px"
                alignItems="center"
                gap="10px"
                w={["71px", "107px", "158px"]}
                h={["28px", "40px", "64px"]}
                borderRadius="12px"
                background="#1C2C5A"
                fontSize={["8px", "12px", "18px"]}
                color={"white"}
                _hover={{
                  bgColor: "#F0D411",
                  color: "black",
                }}
              >
                <Image
                  src={WA}
                  w={["14px", "18px", "21px"]}
                  h={["14px", "18px", "21px"]}
                  _hover={{
                    color: "black",
                  }}
                ></Image>
                Ask Me
              </Button>
            </Center>
          </Center>
        </Flex>
      ) : kecil ? (
        <Flex
          display="flex"
          p={["10px"]}
          w="100%"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          gap="10px"
          flexShrink={"0"}
        >
          <Center
            maxW="300px"
            w="100%"
            height={["178px"]}
            bgImage={HERO2}
            borderRadius={"25px"}
          >
            <Flex
              display="flex"
              w="100%"
              height="89px"
              padding="5px 25px"
              flexDirection="column"
              alignItems="flex-start"
              gap="5px"
              background={"rgba(255, 250, 215, 0.50)"}
            >
              <Flex
                color="#1C2C5A"
                fontSize={["14px"]}
                fontWeight="600"
                lineHeight="70px"
              >
                An access to tools and knowledges
              </Flex>
              <Flex fontSize="10px" fontStyle="normal" lineHeight="28px">
                Berdiri sejak 2019
              </Flex>

              <Flex
                display="flex"
                alignItems="center"
                justifyContent={"center"}
                gap="10px"
                w="47px"
                h="17px"
                borderRadius="5px"
                background="#1C2C5A"
                color={"white"}
                _hover={{
                  bgColor: "#F0D411",
                  color: "black",
                }}
              >
                <Image
                  src={WA}
                  w="8px"
                  h="8px"
                  _hover={{
                    color: "black",
                  }}
                ></Image>
                <Flex fontSize={"6px"}>Ask Me</Flex>
              </Flex>
            </Flex>
          </Center>
        </Flex>
      ) : null}
    </>
  );
}
