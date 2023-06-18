import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import contactbg from "../utills/contact/contactbg.jpg"
import contact1 from "../utills/contact/contact1.jpg"

const Contact = () => {
    return (
        <Box mb={"20px"} w={"100%"}>
            <Flex
                direction="column"
                justifyContent="center"
                width="100%"
                height="70vh"
                bgImage={`linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)), url(${contact1})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                bgPos="center"
                color="white"
                tabIndex={-1}
            >
                <Box width="100%" padding="15%">
                    <Heading fontSize="50px">Contact us</Heading>
                </Box>
            </Flex>
            <Box width={"100%"} padding={"0% 10% 0% 10%"}>
                <Box>
                    <Heading color={"blue"} fontWeight={"semibold"} textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'} transform={'perspective(500px) rotateX(0deg)'} mt={"20px"} >Hours & appointments</Heading >
                </Box>
                <hr style={{ borderBottom: "1px solid blue", marginBottom: "40px", marginTop: "20px" }} />
                <Box
                    border="1px solid #e2e8f0"
                    borderRadius="md"
                    padding="4"
                    width="300px"
                    textAlign="center"
                    boxShadow="md"
                    margin={"auto"}
                >
                    <Text fontSize="lg" fontWeight="bold" marginBottom="4">
                        Book an Appointment
                    </Text>
                    <Text fontWeight="bold">Call or Email:</Text>
                    <Text>
                        Phone: 7300319741
                        <br />
                        Email: chaitanyakumargaen@gmail.com
                    </Text>
                    <Text fontWeight="bold" marginTop="4">Opening Hours:</Text>
                    <Text>
                        Monday - Wednesday: 9 a.m. - 6 p.m.
                        <br />
                        Thursday - Friday: 9 a.m. - 8 p.m.
                        <br />
                        Saturday: 9 a.m. - 6 p.m.
                        <br />
                        Closed on Sundays
                    </Text>
                </Box>
                <Box>
                    <Heading color={"blue"} fontWeight={"semibold"} textShadow={'2px 2px 4px rgba(0, 0, 0, 0.5)'} transform={'perspective(500px) rotateX(0deg)'} mt={"20px"} >Visit us</Heading >
                </Box>
                <hr style={{ borderBottom: "1px solid blue", marginBottom: "40px", marginTop: "20px" }} />
                <Flex bgColor={"blue"} color={"red"} fontWeight={"semibold"} boxShadow={"0px 4px 8px rgba(0, 0, 0, 0.2)"} borderRadius={8} paddingBottom={"20px"}>
                    <Image src={contact1} alt="contact1" borderRadius={8} />
                </Flex>
            </Box>
        </Box>
    )
}

export default Contact