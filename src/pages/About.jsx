import React from 'react'
import aboutbg from "../utills/about/aboutbg.jpg";
import aboutbgbelow1 from "../utills/about/aboutbgbelow1.jpg";
import aboutbgbelow2 from "../utills/about/aboutbgbelow2.jpg";
import person1 from "../utills/about/person1.jpg";
import person2 from "../utills/about/person2.jpg";
import person3 from "../utills/about/person3.jpg";
import person4 from "../utills/about/person4.jpg";
import person5 from "../utills/about/person5.jpg";
import person6 from "../utills/about/person6.jpg";
import person7 from "../utills/about/person7.jpg";
import person8 from "../utills/about/person8.jpg";
import person9 from "../utills/about/person9.jpg";
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

const About = () => {
    return (
        <Box mb={"20px"}>
            <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                height="70vh"
                bgImage={`linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${aboutbg})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                color="white"
                tabIndex={-1}
            >
                <Box width="100%" padding="15%">
                    <Heading fontSize="50px">About Us</Heading>
                </Box>
            </Flex>
            <Box width={"100%"} padding={"0% 10% 0% 10%"}>
                <hr style={{ borderBottom: "1px solid gray", marginBottom: "40px", marginTop: "20px" }} />
                <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"} gap={20} mb={"30px"}>
                    <Box><Image src={aboutbgbelow1} alt='aboutbgbelo1' /></Box>
                    <Box><Image src={aboutbgbelow2} alt='aboutbgbelo2' /></Box>
                </Box>

                <Box display="flex" flexDirection="column" rowGap="20px" mb={8}>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Strategic Approach: We believe in the power of strategy. Our team takes a data-driven approach to analyze market trends, identify opportunities, and develop strategies that will maximize your online visibility and help you reach your target audience effectively.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Comprehensive Services: Our suite of digital marketing services covers all aspects of online marketing. From search engine optimization (SEO) to pay-per-click (PPC) advertising, social media management, content marketing, and more, we have the expertise to create a holistic digital marketing campaign that drives results.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Cutting-Edge Technology: We stay ahead of the curve by utilizing the latest tools and technologies in the industry. Our team leverages advanced analytics, automation, and tracking systems to monitor campaign performance, optimize strategies, and provide actionable insights to improve your ROI.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Creativity and Innovation: We understand the importance of standing out in a crowded digital landscape. Our creative team brings innovative ideas and designs to the table, ensuring your brand captivates your audience and leaves a lasting impression.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Transparent Communication: Communication is key to a successful partnership. We maintain open and transparent communication throughout the entire process, keeping you informed about the progress of your campaigns, sharing insights, and addressing any questions or concerns you may have.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Results-Driven Approach: We are committed to delivering measurable results. Our team constantly monitors and analyzes campaign performance, making data-driven adjustments to optimize your marketing efforts and maximize your return on investment.</Text>
                    </Box>
                    <Box color={"gray"} pb={4} borderRadius="md">
                        <Text>Client-Centric Focus: Our clients are at the heart of everything we do. We take the time to understand your business objectives, challenges, and target audience, allowing us to develop strategies that align with your goals and deliver real value.</Text>
                    </Box>
                </Box>
                <Box mb={8}>
                    <hr style={{ borderBottom: "1px solid gray", marginBottom: "40px", marginTop: "20px" }} />
                    <Heading color={"blue"} fontWeight={"semibold"} textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'} transform={'perspective(500px) rotateX(30deg)'} >Our Team</Heading >
            </Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(300px, 1fr))"} gap={20}>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person1} alt="person1" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person2} alt="person2" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"} </IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person3} alt="person3" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person4} alt="person4" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"} </IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person5} alt="person5" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person6} alt="person6" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person7} alt="person7" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"} </IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person8} alt="person8" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
                <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={person9} alt="person9" borderRadius={8} />
                    <IndianFlagText fontSize={"25px"}  >{"[name]"}</IndianFlagText>
                </Flex>
            </Box>
        </Box>
        </Box >
    );
}

export default About