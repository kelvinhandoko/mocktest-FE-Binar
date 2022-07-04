import {Button, FormControl, Input, useToast, VStack} from "@chakra-ui/react"
import {useFormik} from "formik"
import {useNavigate} from "react-router-dom"

const RegisterForm = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const response = await fetch(
        `https://test-binar.herokuapp.com/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      )
      const message = await response.json()
      if (!message.result) {
        toast({
          title: "failed to Register.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      } else {
        toast({
          title: "success to Register.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
        navigate("/")
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
            id="name"
            name="name"
            type="text"
            placeholder="name"
            variant="outline"
            size="lg"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
        </FormControl>
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

export default RegisterForm
