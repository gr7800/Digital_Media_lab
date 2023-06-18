import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import testomonialbg from "../utills/testomonial/testomonialbg.jpg"
import ourstyle1 from "../utills/testomonial/ourstyle1.jpg"
import ourstyle2 from "../utills/testomonial/ourstyle2.jpg"
import ourstyle3 from "../utills/testomonial/ourstyle3.jpg"
import ourstyle4 from "../utills/testomonial/ourstyle4.jpg"
import ourstyle5 from "../utills/testomonial/ourstyle5.png"
import ourstyle6 from "../utills/testomonial/ourstyle6.png"
import ourstyle7 from "../utills/testomonial/ourstyle7.png"
import ourstyle8 from "../utills/testomonial/ourstyle8.png"
import ourstyle9 from "../utills/testomonial/ourstyle9.png"

const Testimonials = () => {
    return (
        <Box mb={"20px"}>
            <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                height="70vh"
                bgImage={`linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${testomonialbg})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                color="white"
                tabIndex={-1}
            >
                <Box width="100%" padding="15%">
                    <Heading fontSize="50px">Gallery & testimonials</Heading>
                </Box>
            </Flex>
            <Box width={"100%"} padding={"0% 10% 0% 10%"}>

                <Box>
                    <Heading color={"blue"} fontWeight={"semibold"} textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'} transform={'perspective(500px) rotateX(0deg)'} mt={"20px"} >Testiomonial</Heading >
                </Box>
                <hr style={{ borderBottom: "1px solid blue", marginBottom: "40px", marginTop: "20px" }} />
                <Box display="flex" justifyContent={"space-evenly"} mb={8} color={"gray"}>
                    <Box>
                        <Box>Test1</Box>
                        <Box>{['name']}</Box>
                    </Box>
                    <Box>
                        <Box>Test1</Box>
                        <Box>{['name']}</Box>
                    </Box>
                    <Box>
                        <Box>Test1</Box>
                        <Box>{['name']}</Box>
                    </Box>
                </Box>
                <Box mb={8}>
                    <Heading color={"blue"} fontWeight={"semibold"} textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'} transform={'perspective(500px) rotateX(0deg)'} >Our Team</Heading >
                    <hr style={{ borderBottom: "1px solid blue", marginBottom: "40px", marginTop: "20px" }} />
                </Box>
                <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(325px, 1fr))"} gap={20}>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle1} alt="ourstyle1" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle2} alt="ourstyle2" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle3} alt="ourstyle3" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle4} alt="ourstyle4" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle5} alt="ourstyle5" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle6} alt="ourstyle6" borderRadius={8} />
                    </Flex>
                </Box>
                <Box mt={20} mb={20}>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle7} alt="ourstyle7" borderRadius={8} />
                    </Flex>
                </Box>
                <Box display={"grid"} gridTemplateColumns={"repeat(auto-fit, minmax(325px, 1fr))"} gap={20} p={4}>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle8} alt="ourstyle8" borderRadius={8} />
                    </Flex>
                    <Flex direction={"column"} bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                        <Image src={ourstyle9} alt="ourstyle9" borderRadius={8} />
                    </Flex>
                </Box>
            </Box>
        </Box >
    )
}

export default Testimonials