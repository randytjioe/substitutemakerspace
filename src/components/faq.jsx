import {
  Button,
  Center,
  Flex,
  Image,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  UnorderedList,
  useMediaQuery,
} from "@chakra-ui/react";
import { AiOutlineMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import logo from "../assets/logo.png";
import WA from "../assets/WA P.png";
import YTB from "../assets/YTB.png";
import IG from "../assets/IG.png";
import FB from "../assets/FB.png";
import HERO from "../assets/HERO.png";

export default function FAQ() {
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
          gap="76px"
          py="114px"
          background="#FFFCEA"
          id="faq"
        >
          <Flex
            color="#807D8A"
            textAlign="center"
            fontSize="16px"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="26px"
          >
            Frequently asked questions
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            alignOtems="flex-start"
            gap="18px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="26px"
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Apa itu Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    Substitute Makerspace merupakan wadah bagi para
                    individu/kelompok kreatif untuk mendapatkan kemudahan akses
                    dan fasilitas lengkap dalam menjangkau kegiatan, peralatan,
                    hingga pengetahuan dalam menciptakan berbagai jenis produk.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Apa sih fokus utama kami?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    <UnorderedList>
                      <ListItem>Mengenalkan marker movement</ListItem>
                      <ListItem>
                        Membangun ekosistem yang kreatif dan berkelanjutan{" "}
                      </ListItem>{" "}
                      <ListItem>
                        Menggunakan nilai seni dan kerajinan sebagai media
                        pengembangan sumber daya manusia{" "}
                      </ListItem>
                      <ListItem>
                        Memberikan akses yang lebih mudah untuk menjangkau tools
                        dan pengetahuan bagi masyarakat/komunitas terbelakang
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Gimana sih kalau mau daftar?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    Hubungin WhatsApp kami +62 878-5547-6158, atau bisa chat
                    admin Instagram kami @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Gimana sih lihat event terupdate?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    Bisa kunjungi Instagram kami di akun @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Jika ada yang saya ingin tanyakan , saya bisa hubungi
                        siapa?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    Hubungin WhatsApp kami di nomor +62 878-5547-6158
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="768px">
                        Dimana sih kantor Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="768px">
                    Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa
                    Timur, Indonesia 60297
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Center>
      ) : medium ? (
        <Center
          display="flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="76px"
          py="114px"
          background="#FFFCEA"
          id="faq"
        >
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="16px"
            font-style="normal"
            font-weight="600"
            line-height="70px"
          >
            Frequently asked questions
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            alignOtems="flex-start"
            gap="18px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="26px"
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Apa itu Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px">
                    Substitute Makerspace merupakan wadah bagi para
                    individu/kelompok kreatif untuk mendapatkan kemudahan akses
                    dan fasilitas lengkap dalam menjangkau kegiatan, peralatan,
                    hingga pengetahuan dalam menciptakan berbagai jenis produk.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Apa sih fokus utama kami?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px" fontSize={"18px"}>
                    <UnorderedList>
                      <ListItem>Mengenalkan marker movement</ListItem>
                      <ListItem>
                        Membangun ekosistem yang kreatif dan berkelanjutan{" "}
                      </ListItem>{" "}
                      <ListItem>
                        Menggunakan nilai seni dan kerajinan sebagai media
                        pengembangan sumber daya manusia{" "}
                      </ListItem>
                      <ListItem>
                        Memberikan akses yang lebih mudah untuk menjangkau tools
                        dan pengetahuan bagi masyarakat/komunitas terbelakang
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Gimana sih kalau mau daftar?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px">
                    Hubungin WhatsApp kami +62 878-5547-6158, atau bisa chat
                    admin Instagram kami @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Gimana sih lihat event terupdate?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px">
                    Bisa kunjungi Instagram kami di akun @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Jika ada yang saya ingin tanyakan , saya bisa hubungi
                        siapa?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px">
                    Hubungin WhatsApp kami di nomor +62 878-5547-6158
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box
                        as="span"
                        flex="1"
                        textAlign="left"
                        w="700px"
                        fontSize={"18px"}
                      >
                        Dimana sih kantor Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="700px">
                    Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa
                    Timur, Indonesia 60297
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Center>
      ) : kecil ? (
        <Center
          display="flex"
          padding="50px 0px"
          flexDirection="column"
          alignItems="center"
          gap="76px"
          background="#FFFCEA"
          id="faq"
        >
          <Flex
            color="#1C2C5A"
            textAlign="center"
            fontSize="12px"
            font-style="normal"
            font-weight="600"
            line-height="70px"
          >
            Frequently asked questions
          </Flex>
          <Flex
            display="flex"
            flexDirection="column"
            alignOtems="flex-start"
            gap="18px"
          >
            <Flex
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              gap="26px"
            >
              <Accordion allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Apa itu Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    Substitute Makerspace merupakan wadah bagi para
                    individu/kelompok kreatif untuk mendapatkan kemudahan akses
                    dan fasilitas lengkap dalam menjangkau kegiatan, peralatan,
                    hingga pengetahuan dalam menciptakan berbagai jenis produk.
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Apa sih fokus utama kami?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    <UnorderedList>
                      <ListItem>Mengenalkan marker movement</ListItem>
                      <ListItem>
                        Membangun ekosistem yang kreatif dan berkelanjutan{" "}
                      </ListItem>{" "}
                      <ListItem>
                        Menggunakan nilai seni dan kerajinan sebagai media
                        pengembangan sumber daya manusia{" "}
                      </ListItem>
                      <ListItem>
                        Memberikan akses yang lebih mudah untuk menjangkau tools
                        dan pengetahuan bagi masyarakat/komunitas terbelakang
                      </ListItem>
                    </UnorderedList>
                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Gimana sih kalau mau daftar?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    Hubungin WhatsApp kami +62 878-5547-6158, atau bisa chat
                    admin Instagram kami @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Gimana sih lihat event terupdate?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    Bisa kunjungi Instagram kami di akun @substitute.makerspace
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Jika ada yang saya ingin tanyakan , saya bisa hubungi
                        siapa?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    Hubungin WhatsApp kami di nomor +62 878-5547-6158
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left" w="200px">
                        Dimana sih kantor Substitute Makerspace?
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} w="200px">
                    Jl. Pandugo Baru XIII, Penjaringan Sari, Surabaya, Jawa
                    Timur, Indonesia 60297
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>
          </Flex>
        </Center>
      ) : null}
    </>
  );
}
