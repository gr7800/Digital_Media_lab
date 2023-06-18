import React from 'react';
import homeheaderbg from "../utills/home/homeheaderbg.jpg";
import servicescontentwriting from "../utills/home/servicescontentwriting.jpg";
import servicesdigitalmarketing from "../utills/home/servicesdigitalmarketing.jpg";
import servicesemailmarketing from "../utills/home/servicesemailmarketing.jpg";
import servicesgirlimage from "../utills/home/servicesgirlimage.jpg";
import servicesgraphicdesign from "../utills/home/servicesgraphicdesign.jpg";
import servicesproductdevlopment from "../utills/home/servicesproductdevlopment.jpg";
import servicessoftwaredevlopment from "../utills/home/servicessoftwaredevlopment.jpg";
import servicesUiUxdesign from "../utills/home/servicesUiUxdesign.jpg";
import serviceswebdevoment from "../utills/home/serviceswebdevoment.jpg";
import servicetechnologywebview from "../utills/home/servicetechnologywebview.jpg";

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
const IndianFlagColors = ["#FF9933", "#FFFFFF", "#138808"]; // Orange, White, Green


const IndianFlagText = ({ children }) => (
  <Text
    fontSize={"25px"}
    style={{
      background: `linear-gradient(45deg, ${IndianFlagColors[0]} 33%, ${IndianFlagColors[1]} 33%, ${IndianFlagColors[1]} 66%, ${IndianFlagColors[2]} 66%)`,
      backgroundClip: "text",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
    fontWeight={"bold"}
    cursor={"pointer"}
  >
    {children}
  </Text>
);

const Home = () => {
  return (
    <Box>
      <Flex
        direction="column"
        justifyContent="center"
        width="100%"
        height="70vh"
        bgImage={`linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${homeheaderbg})`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPos="center"
        color="white"
        tabIndex={-1}
      >
        <Box width="100%" padding="15%">
          <Heading fontSize="50px">Let's Grow with Modern Tech</Heading>
          <Text fontSize="20px">The best services with the best styles.</Text>
        </Box>
      </Flex>

      <Box width={"100%"} padding={"0% 10% 0% 10%"}>
        <hr style={{ borderBottom: "1px solid gray", marginBottom: "40px", marginTop: "20px" }} />
        <Box mb={"20px"}>
          <Heading color={"blue"} fontSize={"40px"} >Our Services</Heading>
        </Box>
        <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"} gap={20}>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={serviceswebdevoment} alt="webdevlopment" />
            <IndianFlagText fontSize={"25px"}  >Web Development</IndianFlagText>
          </Flex>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicesdigitalmarketing} alt="servicesdigitalmarketing" />
            <IndianFlagText fontSize={"25px"}  >Digital Marketing</IndianFlagText>
          </Flex>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicesUiUxdesign} alt="servicesUiUxdesign" />
            <IndianFlagText fontSize={"25px"}  >UI/UX design</IndianFlagText>
          </Flex>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicescontentwriting} alt="servicescontentwriting" />
            <IndianFlagText fontSize={"25px"}  >Content Writing</IndianFlagText>
          </Flex>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicesgraphicdesign} alt="servicesgraphicdesign" />
            <IndianFlagText fontSize={"25px"}  >GraphicDesign</IndianFlagText>
          </Flex>
          <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicesemailmarketing} alt="servicesemailmarketing" />
            <IndianFlagText fontSize={"25px"}  >Email Marketing</IndianFlagText>
          </Flex>
        </Box>

        <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"} gap={20} mt={"30px"} mb={"30px"}>
          <Flex direction={"column"} justifyContent={"space-between"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicesproductdevlopment} alt="webdevlopment" />
            <Text fontSize={"25px"} cursor={"pointer"} color={"red"} >Product Development</Text>
          </Flex>
          <Flex direction={"column"} justifyContent={"space-between"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
            <Image src={servicessoftwaredevlopment} alt="servicessoftwaredevlopment" />
            <Text fontSize={"25px"} cursor={"pointer"} color={"red"} >Software Development</Text>
          </Flex>
        </Box>

        <Box color={"gray"}>
          <Box fontSize={"28px"} color={"gray"} fontWeight={"semibold"}>
            <Text>About Us</Text>
          </Box>
          <Flex direction={"column"} rowGap={"25px"} fontSize={"20px"} textAlign={"center"} p={"20px"}>
            <Text>
              At EdgeDigital, our goal is to make you shine like a star. We create flattering, contemporary looks, specialising in versatile styles. Whether you want the latest trends, a timeless style or something just for a special event, EdgeDigital has your answer.
            </Text>
            <Text>
              Our team of experts excels in various key areas, including SEO, web development, UI/UX design, and advertising. We understand the evolving landscape of digital marketing and strive to stay ahead of the curve.
            </Text>
          </Flex>
          <Flex direction={"column"} rowGap={"20px"} m={"20px"} fontSize={"28px"} color={"gray"} fontWeight={"semibold"}>
            <Text>Technologies We Deal in</Text>
            <Box width={"100%"}>
              <Image src={servicetechnologywebview} alt={"servicetechnologywebview"} w={"100%"}  />
            </Box>
          </Flex>
        </Box>
        <Box mb={"20px"} display={"grid"} gap={"20px"} rowGap={"20px"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"}>
          <Box>
            <iframe title='Contactform' src="https://docs.google.com/forms/d/e/1FAIpQLSchTi6rPeWLR9yv2k75cxrebRow3Uk_OWuBFpUkBrL2PAU7-A/viewform?embedded=true" width={"100%"} height="889" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Box>
          <Box>
            <Image src={servicesgirlimage} alt="servicesgirlimage" w={"100%"} />
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default Home;
