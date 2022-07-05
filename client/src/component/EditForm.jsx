import {
  Button,
  Flex,
  FormControl,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react"
import {useFormik} from "formik"

const EditForm = ({data, onClose}) => {
  const token = localStorage.getItem("access_token")
  const toast = useToast()
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: data?.name,
      price: data?.price,
      imageurl: data?.imageurl,
    },
    onSubmit: async (values) => {
      const response = await fetch(
        `https://private-anon-0ded615c58-testbinar.apiary-mock.com/v1/products/4`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
          body: JSON.stringify(values),
        }
      )
      const message = await response.json()
      if (!message.result) {
        toast({
          title: "failed to Edit.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      } else {
        toast({
          title: "success to Edit.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
        onClose()
      }
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <VStack spacing={4} padding={10} paddingTop={0}>
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
            id="price"
            name="price"
            type="text"
            placeholder="price"
            variant="outline"
            size="lg"
            value={formik.values.price}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            id="imageurl"
            name="imageurl"
            type="text"
            placeholder="imageurl"
            variant="outline"
            size="lg"
            value={formik.values.imageurl}
            onChange={formik.handleChange}
          />
        </FormControl>
      </VStack>
      <Flex
        gap={2}
        justify="flex-end"
        align="center"
        padding={5}
        borderTop="1px solid"
      >
        <Button background="none" onClick={onClose}>
          Back
        </Button>
        <Button type="submit" mr={4}>
          Edit
        </Button>
      </Flex>
    </form>
  )
}

export default EditForm
