import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  useMediaQuery,
} from "@chakra-ui/react";
import logo from "../assets/logo.png";
import WA from "../assets/WA-P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";
import F1 from "../assets/F1.jpg";
import KF1 from "../assets/KF1.png";
import F2 from "../assets/F2.jpg";
import F3 from "../assets/F3.jpg";
import F4 from "../assets/F4.jpg";
import F5 from "../assets/F5.jpg";
import F6 from "../assets/F6.jpg";
export default function Facilities() {
  const [kecil] = useMediaQuery("(min-width: 320px)");
  const [medium] = useMediaQuery("(min-width: 767px)");
  const [besar] = useMediaQuery("(min-width: 1440px)");
  return (
    <>
      {besar ? (
        <Center
          display="flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="86px"
          id="facilities"
          py="115px"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="24px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Facilities
            </Flex>
            <Flex
              color="#1C2C5A"
              textAlign="center"
              fontSize="25px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="70px"
            >
              Kami menyediakan berbagai fasilitas yang bisa menunjang
              kreativitasmu{" "}
            </Flex>
          </Flex>

          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="101px"
          >
            <Flex
              display="flex"
              width="1314px"
              justifyContent="center"
              alignItems="center"
              gap="180px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F1}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Woodworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan berbagai macam
                        peralatan dan kebutuhan untuk kegiatan kerajinan kayu,
                        seperti gergaji, palu, pahat kayu, mesin serut kayu,
                        mesin profil pahat, dan lain-lain.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F2}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Metalworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan peralatan dan
                        fasilitas yang diperlukan untuk memotong, membentuk,
                        mengelas, dan mengolah logam.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F3}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Art Supplies
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Segala jenis bahan dan peralatan yang bisa dimanfaatkan
                        untuk menciptakan karya seni, baik lukisan, gambar,
                        patung, kerajinan, maupun bentuk kreativitas visual
                        lainnya.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              width="1314px"
              justifyContent="center"
              alignItems="center"
              gap="180px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F4}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Sewing
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Berbagai macam peralatan menjahit yang bisa digunakan
                        sesuai kebutuhanmu, mulai dari alat jahit pokok hingga
                        alat jahit penunjang.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F5}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Business Incubators
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Kami menawarkan berbagai program khusus yang dapat
                        mendukung penggiat ekonomi kreatif dalam mengembangkan
                        usaha melalui dukungan modal, pelatihan, bimbingan, dan
                        banyak lagi.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F6}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Makers Consultation
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Layanan konsultasi yang dirancang khusus untuk mendukung
                        penggiat kreatif dan inovator dalam mengembangkan ide,
                        merancang produk, dan mengatasi tantangan dengan panduan
                        dari para ahli di berbagai bidang.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : medium ? (
        <Center
          display="flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="86px"
          id="facilities"
          py="115px"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="24px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Facilities
            </Flex>
            <Flex
              color="#1C2C5A"
              textAlign="center"
              fontSize="18px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="70px"
            >
              Kami menyediakan berbagai fasilitas yang bisa menunjang
              kreativitasmu{" "}
            </Flex>
          </Flex>

          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="101px"
          >
            <Flex
              display="flex"
              width="760px"
              justifyContent="center"
              alignItems="center"
              gap="180px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F1}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Woodworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan berbagai macam
                        peralatan dan kebutuhan untuk kegiatan kerajinan kayu,
                        seperti gergaji, palu, pahat kayu, mesin serut kayu,
                        mesin profil pahat, dan lain-lain.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>

              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F2}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Metalworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan peralatan dan
                        fasilitas yang diperlukan untuk memotong, membentuk,
                        mengelas, dan mengolah logam.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              display="flex"
              width="760px"
              justifyContent="center"
              alignItems="center"
              gap="180px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F5}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Business Incubators
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Kami menawarkan berbagai program khusus yang dapat
                        mendukung penggiat ekonomi kreatif dalam mengembangkan
                        usaha melalui dukungan modal, pelatihan, bimbingan, dan
                        banyak lagi.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>

              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F6}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Makers Consultation
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Layanan konsultasi yang dirancang khusus untuk mendukung
                        penggiat kreatif dan inovator dalam mengembangkan ide,
                        merancang produk, dan mengatasi tantangan dengan panduan
                        dari para ahli di berbagai bidang.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>

            <Flex
              display="flex"
              flexDirection="column"
              alignItems="center"
              gap="28px"
            >
              <Flex
                display="flex"
                width="760px"
                justifyContent="center"
                alignItems="center"
                gap="180px"
              >
                {" "}
                <Flex
                  display="flex"
                  alignItems="center"
                  gap="28px"
                  flexDir={"column"}
                >
                  <Image src={F3}></Image>
                  <Flex
                    color="#1C2C5A"
                    textAlign="center"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    <Popover placement="bottom">
                      <PopoverTrigger>
                        <Button
                          bgColor={"white"}
                          _hover={{
                            bgColor: "#1C2C5A",
                            color: "white",
                          }}
                        >
                          Art Supplies
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader
                          fontWeight="semibold"
                          bgColor={"#1C2C5A"}
                          color={"white"}
                        >
                          Description
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton
                          color={"white"}
                          bgColor={"red"}
                          borderRadius={"100%"}
                        />
                        <PopoverBody textAlign={"left"}>
                          Segala jenis bahan dan peralatan yang bisa
                          dimanfaatkan untuk menciptakan karya seni, baik
                          lukisan, gambar, patung, kerajinan, maupun bentuk
                          kreativitas visual lainnya.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
                <Flex
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  gap="28px"
                >
                  <Image src={F4}></Image>
                  <Flex
                    color="#1C2C5A"
                    textAlign="center"
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="500"
                    lineHeight="28px"
                    textTransform="capitalize"
                  >
                    <Popover placement="bottom">
                      <PopoverTrigger>
                        <Button
                          bgColor={"white"}
                          _hover={{
                            bgColor: "#1C2C5A",
                            color: "white",
                          }}
                        >
                          Sewing
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader
                          fontWeight="semibold"
                          bgColor={"#1C2C5A"}
                          color={"white"}
                        >
                          Description
                        </PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton
                          color={"white"}
                          bgColor={"red"}
                          borderRadius={"100%"}
                        />
                        <PopoverBody textAlign={"left"}>
                          Berbagai macam peralatan menjahit yang bisa digunakan
                          sesuai kebutuhanmu, mulai dari alat jahit pokok hingga
                          alat jahit penunjang.
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : kecil ? (
        <Center
          display="flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="86px"
          id="facilities"
          py="115px"
        >
          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="24px"
          >
            <Flex
              color="#807D8A"
              textAlign="center"
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="26px"
            >
              Facilities
            </Flex>
            <Flex
              color="#1C2C5A"
              w="280px"
              textAlign="center"
              fontSize="10px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="25px"
            >
              Kami menyediakan berbagai fasilitas yang bisa menunjang
              kreativitasmu{" "}
            </Flex>
          </Flex>

          <Flex
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap="50px"
          >
            <Flex
              display="flex"
              width="300px"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gap="50px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F1}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Woodworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan berbagai macam
                        peralatan dan kebutuhan untuk kegiatan kerajinan kayu,
                        seperti gergaji, palu, pahat kayu, mesin serut kayu,
                        mesin profil pahat, dan lain-lain.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F2}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Metalworking
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Bengkel kerja yang dilengkapi dengan peralatan dan
                        fasilitas yang diperlukan untuk memotong, membentuk,
                        mengelas, dan mengolah logam.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F3}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Art Supplies
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Segala jenis bahan dan peralatan yang bisa dimanfaatkan
                        untuk menciptakan karya seni, baik lukisan, gambar,
                        patung, kerajinan, maupun bentuk kreativitas visual
                        lainnya.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
            <Flex
              display="flex"
              width="280px"
              justifyContent="center"
              flexDirection="column"
              alignItems="center"
              gap="50px"
            >
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F4}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Sewing
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Berbagai macam peralatan menjahit yang bisa digunakan
                        sesuai kebutuhanmu, mulai dari alat jahit pokok hingga
                        alat jahit penunjang.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F5}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Business Incubators
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Kami menawarkan berbagai program khusus yang dapat
                        mendukung penggiat ekonomi kreatif dalam mengembangkan
                        usaha melalui dukungan modal, pelatihan, bimbingan, dan
                        banyak lagi.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
              <Flex
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="28px"
              >
                <Image src={F6}></Image>
                <Flex
                  color="#1C2C5A"
                  textAlign="center"
                  fontSize="20px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="28px"
                  textTransform="capitalize"
                >
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button
                        bgColor={"white"}
                        _hover={{
                          bgColor: "#1C2C5A",
                          color: "white",
                        }}
                      >
                        Makers Consultation
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader
                        fontWeight="semibold"
                        bgColor={"#1C2C5A"}
                        color={"white"}
                      >
                        Description
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton
                        color={"white"}
                        bgColor={"red"}
                        borderRadius={"100%"}
                      />
                      <PopoverBody textAlign={"left"}>
                        Layanan konsultasi yang dirancang khusus untuk mendukung
                        penggiat kreatif dan inovator dalam mengembangkan ide,
                        merancang produk, dan mengatasi tantangan dengan panduan
                        dari para ahli di berbagai bidang.
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Center>
      ) : null}
    </>
  );
}
