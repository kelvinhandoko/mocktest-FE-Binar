import {Flex, Heading, Link, Text, VStack} from "@chakra-ui/react"
import {Helmet} from "react-helmet"
import RegisterForm from "../component/RegisterForm"

const Register = () => {
  return (
    <>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <Flex align="center" justify="center" h="100vh">
        <VStack gap={5}>
          <Heading as="h3" color="gray">
            Register
          </Heading>
          <RegisterForm />
          <Flex gap={2}>
            <Text>Already have a account?</Text>
            <Link href="/">Login</Link>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}

export default Register
