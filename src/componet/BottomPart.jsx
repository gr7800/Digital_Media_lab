import { Box, Flex, Text, Link } from "@chakra-ui/react";

const BottomPart = () => {
  const phoneNumber = "7300319741";
  const emailAddress = "chaitanyakumargaen@gmail.com";

  return (
    <Flex justify="center" align="center" bg="gray.200" p={4} bgColor="#212121" color="white">
      <Text mr={2}>Call or email to book an appointment:</Text>
      <Box fontWeight="bold" mr={2}>{phoneNumber}</Box>
      <Text>or email address at:</Text>
      <Link href={`mailto:${emailAddress}`} ml={2} fontWeight="bold">
        {emailAddress}
      </Link>
    </Flex>
  );
};

export default BottomPart;
