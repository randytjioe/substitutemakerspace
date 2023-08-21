import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Link,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import WA from "../assets/WA P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";
import P1 from "../assets/P1.jpg";
import P2 from "../assets/P2.jpg";
import P3 from "../assets/P3.jpg";
import P4 from "../assets/P4.jpg";
import P5 from "../assets/P5.jpg";
import { Link as ReachLink } from "react-router-dom";
import Review from "../assets/Review.png";
import Cart from "../assets/CART.png";
import Cart1 from "../assets/cart1.png";
export default function Product() {
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
          gap="73px"
          background="#FFFCEA"
          id="products"
          py="115px"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Product & Services
            </Flex>
            <Flex
              color="#1C2C5A"
              textAlign="center"
              fontSize="25px"
              fontStyle="normal"
              fontWeight="600"
              width="1200px"
            >
              Kami membantu proses pengembangan kreativitasmu di tiga bidang
              utama, yaitu 3D printing, wood working, dan sewing (menjahit)
              dengan membuka beberapa layanan.
            </Flex>
          </Flex>

          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="flex-start"
            gap="50px"
          >
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P1}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Workshop and Seminar
              </Flex>
              <Flex
                color="#000"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="839px"
              >
                Layanan workshop dan sesi seminar informatif dirancang untuk
                memberikan manfaat nyata melalui kesempatan untuk belajar secara
                langsung, berkolaborasi dengan sesama peserta, dan mendapatkan
                pengalaman praktis mencakup berbagai topik untuk menciptakan
                lokakarya kreatif bersama ahli di bidangnya.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "white",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="flex-start"
            gap="50px"
          >
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P2}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Tools and Space for Rent
              </Flex>
              <Flex
                color="#000"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="839px"
              >
                Layanan ini akan memberikan solusi praktis bagi individu atau
                kelompok yang membutuhkan akses ke peralatan khusus dan ruang
                untuk mendukung mewujudkan proyek kreatif kamu.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    color="#FFF"
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="flex-start"
            gap="50px"
          >
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P3}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Markers Incubation
              </Flex>
              <Flex
                color="#000"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="839px"
              >
                Layanan yang dirancang untuk membantu pengembangan ide kreatif
                menjadi produk nyata.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    color="#FFF"
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="flex-start"
            gap="50px"
          >
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P4}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Materials Supplies
              </Flex>
              <Flex
                color="#000"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="839px"
              >
                Dalam layanan ini, kami akan menyediakan beragam jenis bahan,
                komponen, dan peralatan relevan dengan bidang kreatif yang
                sedang kamu tekuni. Layanan ini menjadi solusi lengkap untuk
                memenuhi kebutuhan material yang diperlukan dalam pembuatan
                produk.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    color="#FFF"
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="1440px"
            padding="0px 120px"
            alignItems="flex-start"
            gap="50px"
          >
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P5}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Material Library
              </Flex>
              <Flex
                color="#000"
                fontSize="20px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="839px"
              >
                dalam proses pengembangan
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Flex
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    color="#FFF"
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Flex>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : medium ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="73px"
          background="#FFFCEA"
          id="products"
          py="115px"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Product & Services
            </Flex>
            <Flex
              color="#1C2C5A"
              textAlign="center"
              fontSize="14px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="25px"
              width="700px"
            >
              Kami membantu proses pengembangan kreativitasmu di tiga bidang
              utama, yaitu 3D printing, wood working, dan sewing (menjahit)
              dengan membuka beberapa layanan.
            </Flex>
          </Flex>

          <Flex display="flex" width="720px" alignItems="flex-start" gap="50px">
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P1}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Workshop and Seminar
              </Flex>
              <Flex
                color="#000"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="414px"
              >
                Layanan workshop dan sesi seminar informatif dirancang untuk
                memberikan manfaat nyata melalui kesempatan untuk belajar secara
                langsung, berkolaborasi dengan sesama peserta, dan mendapatkan
                pengalaman praktis mencakup berbagai topik untuk menciptakan
                lokakarya kreatif bersama ahli di bidangnya.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex display="flex" width="720px" alignItems="flex-start" gap="50px">
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P2}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Tools and Space for Rent
              </Flex>
              <Flex
                color="#000"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="414px"
              >
                Layanan ini akan memberikan solusi praktis bagi individu atau
                kelompok yang membutuhkan akses ke peralatan khusus dan ruang
                untuk mendukung mewujudkan proyek kreatif kamu.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex display="flex" width="720px" alignItems="flex-start" gap="50px">
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P3}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Markers Incubation
              </Flex>
              <Flex
                color="#000"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="414px"
              >
                Layanan yang dirancang untuk membantu pengembangan ide kreatif
                menjadi produk nyata.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex display="flex" width="720px" alignItems="flex-start" gap="50px">
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P4}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Materials Supplies
              </Flex>
              <Flex
                color="#000"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="414px"
              >
                Dalam layanan ini, kami akan menyediakan beragam jenis bahan,
                komponen, dan peralatan relevan dengan bidang kreatif yang
                sedang kamu tekuni. Layanan ini menjadi solusi lengkap untuk
                memenuhi kebutuhan material yang diperlukan dalam pembuatan
                produk.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex display="flex" width="720px" alignItems="flex-start" gap="50px">
            <Flex width="313px" height="322px" flex-shrink="0" bgImage={P5}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="143px"
                h="28px"
                color="#D1CEDB"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="25px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Material Library
              </Flex>
              <Flex
                color="#000"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="414px"
              >
                dalam proses pengembangan
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 32px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="158px"
                  h="64px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart}></Image>
                  <Flex
                    textAlign="right"
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : kecil ? (
        <Flex
          display="inline-flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="73px"
          background="#FFFCEA"
          id="products"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="12px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Product & Services
            </Flex>
            <Flex
              color="#1C2C5A"
              textAlign="center"
              w="280px"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="600"
            >
              Kami membantu proses pengembangan kreativitasmu di tiga bidang
              utama, yaitu 3D printing, wood working, dan sewing (menjahit)
              dengan membuka beberapa layanan.
            </Flex>
          </Flex>

          <Flex
            display="flex"
            width="320px"
            alignItems="flex-start"
            flexDir={"column"}
            gap="19px"
          >
            <Flex width="256px" height="276px" flex-shrink="0" bgImage={P1}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="88px"
                h="20px"
                color="#D1CEDB"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Workshop and Seminar
              </Flex>
              <Flex
                color="#000"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="290px"
              >
                Layanan workshop dan sesi seminar informatif dirancang untuk
                memberikan manfaat nyata melalui kesempatan untuk belajar secara
                langsung, berkolaborasi dengan sesama peserta, dan mendapatkan
                pengalaman praktis mencakup berbagai topik untuk menciptakan
                lokakarya kreatif bersama ahli di bidangnya.
              </Flex>
              <Button
                display="flex"
                padding="18px 10px"
                alignItems="center"
                gap="10px"
                color="white"
                borderRadius="12px"
                background="#1C2C5A"
                w="106px"
                h="46px"
                _hover={{
                  bgColor: "#F0D411",
                  color: "black",
                }}
              >
                <Image src={Cart} w="24px" h="24px"></Image>
                <Flex
                  textAlign="right"
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="700"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  {" "}
                  Join Us
                </Flex>{" "}
              </Button>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="320px"
            alignItems="flex-start"
            flexDir={"column"}
            gap="19px"
          >
            <Flex width="256px" height="276px" flex-shrink="0" bgImage={P2}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="88px"
                h="20px"
                color="#D1CEDB"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Tools and Space for Rent
              </Flex>
              <Flex
                color="#000"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="290px"
              >
                Layanan ini akan memberikan solusi praktis bagi individu atau
                kelompok yang membutuhkan akses ke peralatan khusus dan ruang
                untuk mendukung mewujudkan proyek kreatif kamu.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 10px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="106px"
                  h="46px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "white",
                  }}
                >
                  <Image src={Cart} w="24px" h="24px"></Image>
                  <Flex
                    textAlign="right"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="320px"
            alignItems="flex-start"
            flexDir={"column"}
            gap="19px"
          >
            <Flex width="256px" height="276px" flex-shrink="0" bgImage={P3}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="88px"
                h="20px"
                color="#D1CEDB"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Markers Incubation
              </Flex>
              <Flex
                color="#000"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="290px"
              >
                Layanan yang dirancang untuk membantu pengembangan ide kreatif
                menjadi produk nyata.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 10px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="106px"
                  h="46px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "white",
                  }}
                >
                  <Image src={Cart} w="24px" h="24px"></Image>
                  <Flex
                    textAlign="right"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="320px"
            alignItems="flex-start"
            flexDir={"column"}
            gap="19px"
          >
            <Flex width="256px" height="276px" flex-shrink="0" bgImage={P4}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="88px"
                h="20px"
                color="#D1CEDB"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Materials Supplies
              </Flex>
              <Flex
                color="#000"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="290px"
              >
                Dalam layanan ini, kami akan menyediakan beragam jenis bahan,
                komponen, dan peralatan relevan dengan bidang kreatif yang
                sedang kamu tekuni. Layanan ini menjadi solusi lengkap untuk
                memenuhi kebutuhan material yang diperlukan dalam pembuatan
                produk.
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 10px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="106px"
                  h="46px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "black",
                  }}
                >
                  <Image src={Cart} w="24px" h="24px"></Image>
                  <Flex
                    textAlign="right"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
          <Flex
            display="flex"
            width="320px"
            alignItems="flex-start"
            flexDir={"column"}
            gap="19px"
          >
            <Flex width="256px" height="276px" flex-shrink="0" bgImage={P5}>
              <Flex
                display="flex"
                padding="2px 19px"
                justifyContent="center"
                alignItems="center"
                gap="10px"
                background={"#B02327"}
                w="88px"
                h="20px"
                color="#D1CEDB"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24px"
                margin="1rem"
              >
                Recommended
              </Flex>
            </Flex>
            <Flex
              display="flex"
              padding="20px 0px"
              flexDirection="column"
              alignItems="flex-start"
              gap="20px"
            >
              <Image src={Review}></Image>
              <Flex
                color="var(--grey-900, #28233C)"
                fontSize="14px"
                fontStyle="normal"
                fontWeight="800"
                lineHeight="28px"
              >
                Material Library
              </Flex>
              <Flex
                color="#000"
                fontSize="10px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="28px"
                width="290px"
              >
                dalam proses pengembangan
              </Flex>
              <Link
                to="https://api.whatsapp.com/send/?phone=6287855476158&text=Hallo,%20Saya%20mau%20mendaftar,%20Gimana%20caranya?&type=phone_number&app_absent=0"
                as={ReachLink}
              >
                <Button
                  display="flex"
                  padding="18px 10px"
                  alignItems="center"
                  gap="10px"
                  color="white"
                  borderRadius="12px"
                  background="#1C2C5A"
                  w="106px"
                  h="46px"
                  _hover={{
                    bgColor: "#F0D411",
                    color: "white",
                  }}
                >
                  <Image src={Cart} w="24px" h="24px"></Image>
                  <Flex
                    textAlign="right"
                    fontSize="12px"
                    fontStyle="normal"
                    fontWeight="700"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    {" "}
                    Join Us
                  </Flex>{" "}
                </Button>
              </Link>
            </Flex>
          </Flex>
        </Flex>
      ) : null}
    </>
  );
}
