import {Center, Flex, Heading, Link, Text, VStack} from "@chakra-ui/react"
import {Helmet} from "react-helmet"
import LoginForm from "../component/loginForm"

const Login = () => {
  return (
    <>
      <Helmet>
        <title>Login Page</title>
      </Helmet>
      <Flex align="center" justify="center" h="100vh">
        <VStack gap={5}>
          <Heading as="h3" color="gray">
            Login
          </Heading>
          <LoginForm />
          <Flex gap={2}>
            <Text>dont have a account?</Text>
            <Link href="/register">Register</Link>
          </Flex>
        </VStack>
      </Flex>
    </>
  )
}

export default Login
