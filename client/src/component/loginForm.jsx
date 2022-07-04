import {Button, FormControl, Input, useToast, VStack} from "@chakra-ui/react"
import {useFormik} from "formik"

const LoginForm = () => {
  const toast = useToast()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await fetch(
        `https://test-binar.herokuapp.com/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
      const message = await response.json()
      if (!message.result)
        toast({
          title: "failed to login.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      else {
        toast({
          title: "success login.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      }
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack
        spacing={4}
        border="1px solid"
        borderRadius="7px"
        width="500px"
        padding={20}
      >
        <FormControl>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            variant="outline"
            size="lg"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            variant="outline"
            size="lg"
            mb={5}
            value={formik.values.password}
            onChange={formik.handleChange}
          />
        </FormControl>
        <Button type="submit" width="full">
          Submit
        </Button>
      </VStack>
    </form>
  )
}

export default LoginForm
