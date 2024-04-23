import {
  Text,
  Heading,
  Card,
  Avatar,
  Flex,
  Divider

} from "@chakra-ui/react";

function App() {
  return (
        <Flex gap="10" justify={"center"} wrap={"wrap"}>
          <Avatar
            name="Aderemi Oje"
            src="https://avatars.githubusercontent.com/u/147947090?v=4" 
            w={"200px"}
            h={"200px"}
            border={"1px solid black"}
          ></Avatar>
          <Card display={'flex'} flexDirection={'column'} variant={'outline'} p={5} textAlign={"left"}>
            <Heading as={'h1'} fontSize='35' textAlign={"left"} m={"unset"} mt={"20px"} fontWeight={600} fontFamily={"Sedan"}>
            My Repository
            </Heading>
            <Divider my={2.5}></Divider>
            <Text fontSize={"md"}>
            </Text>
            <Text fontSize={"md"} py={2}>
            <strong>About me:</strong> My name is Aderemi Oje. I am an <strong>Insurance Professional</strong> and a <strong>Frontend Developer</strong>.
            </Text>
          </Card>
        </Flex>
  );
}

export default App
