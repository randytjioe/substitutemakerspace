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
import COMP from "../assets/company.png";
import ASK from "../assets/AboutMe.jpg";
import ASK1 from "../assets/AboutMe1.jpg";
import HERO from "../assets/HERO.png";
import CHECK from "../assets/check.svg";

export default function AboutMe() {
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      {besar ? (
        <Center
          display="flex"
          padding="50px 120px"
          flexDirection="column"
          alignItems="center"
          gap="29px"
          py="114px"
          id="aboutme"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="4px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontFamily="Plus Jakarta Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
              display="flex"
              width="1200px"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
            >
              About Me
            </Flex>
          </Flex>
          <Flex
            display="flex"
            justifyContent="center"
            padding={"10px"}
            w={"1200px"}
            h="470px"
            flexShrink={"0"}
            alignItems="center"
            gap="30px"
          >
            <Image src={ASK}></Image>
            <Flex
              display="flex"
              padding="25px 0px"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="42px"
            >
              <Flex
                display="flex"
                width="500px"
                flexDirection="column"
                gap="32px"
              >
                <Flex
                  color="#1C2C5A"
                  fontSize="28px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="28px"
                >
                  Substitute Makerspace
                </Flex>
                <Flex fontSize="18px">
                  merupakan wadah bagi para individu/kelompok kreatif untuk
                  mendapatkan kemudahan akses dan fasilitas lengkap dalam
                  menjangkau kegiatan, peralatan, hingga pengetahuan dalam
                  menciptakan berbagai jenis produk. 
                </Flex>
                <Flex fontSize="18px">
                  Visi kami adalah menjadi tempat kreatif yang menggabungkan
                  nilai-nilai seni, budaya, bisnis, dan teknologi untuk
                  membangkitkan inspirasi dalam memajukan ekonomi kreatif
                  melalui inovasi terbaru.
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : medium ? (
        <Center
          display="flex"
          padding="50px 10px"
          flexDirection="column"
          alignItems="center"
          gap="29px"
          h="724px"
          id="aboutme"
        >
          <Flex
            display="flex"
            width="767px"
            height="389px"
            flexDirection="column"
            alignItems="center"
            gap="30px"
            flexShrink="0"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontFamily="Plus Jakarta Sans"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
              display="flex"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
            >
              About Me
            </Flex>

            <Flex
              display="flex"
              justifyContent="center"
              padding={"10px"}
              w="767px"
              h="552px"
              flexShrink={"0"}
              alignItems="center"
              flexDir={"column"}
              gap="50px"
            >
              <Image src={ASK} width="442.5px" height="252px"></Image>

              <Flex
                color="#1C2C5A"
                fontSize="24px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
                textAlign={"center"}
              >
                Substitute Makerspace
              </Flex>
              <Flex fontSize="14px" w="600px" textAlign={"center"}>
                merupakan wadah bagi para individu/kelompok kreatif untuk
                mendapatkan kemudahan akses dan fasilitas lengkap dalam
                menjangkau kegiatan, peralatan, hingga pengetahuan dalam
                menciptakan berbagai jenis produk. 
              </Flex>
              <Flex fontSize="14px" w="600px" textAlign={"center"}>
                Visi kami adalah menjadi tempat kreatif yang menggabungkan
                nilai-nilai seni, budaya, bisnis, dan teknologi untuk
                membangkitkan inspirasi dalam memajukan ekonomi kreatif melalui
                inovasi terbaru.
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : kecil ? (
        <Center
          display="flex"
          padding="10px 25px"
          flexDirection="column"
          alignItems="center"
          gap="15px"
          py="120px"
          id="aboutme"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="4px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="15px"
              display="flex"
              padding="10px"
              justifyContent="center"
              alignItems="center"
              gap="10px"
            >
              About Me
            </Flex>
          </Flex>
          <Flex
            display="flex"
            justifyContent="center"
            flexShrink={"0"}
            alignItems="center"
            flexDir={"column"}
            gap="20px"
          >
            <Image src={ASK1}></Image>
            <Flex
              display="flex"
              padding="25px 0px"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="30px"
            >
              <Flex
                display="flex"
                width="100%"
                flexDirection="column"
                gap="15px"
                alignItems={"center"}
              >
                <Flex
                  color="#1C2C5A"
                  fontSize="18px"
                  fontStyle="normal"
                  fontWeight="800"
                  lineHeight="28px"
                >
                  Substitute Makerspace
                </Flex>
                <Flex fontSize="8px" alignItems={"center"}>
                  merupakan wadah bagi para individu/kelompok kreatif untuk
                  mendapatkan kemudahan akses dan fasilitas lengkap dalam
                  menjangkau kegiatan, peralatan, hingga pengetahuan dalam
                  menciptakan berbagai jenis produk. 
                </Flex>
                <Flex fontSize="8px" py="2px" alignItems={"center"}>
                  Visi kami adalah menjadi tempat kreatif yang menggabungkan
                  nilai-nilai seni, budaya, bisnis, dan teknologi untuk
                  membangkitkan inspirasi dalam memajukan ekonomi kreatif
                  melalui inovasi terbaru.
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : null}
    </>
  );
}
