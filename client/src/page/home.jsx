import {
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react"
import {useEffect, useState} from "react"
import {Helmet} from "react-helmet"
import {useNavigate} from "react-router-dom"
import Card from "../component/Card"
import CreateNewForm from "../component/CreateForm"

const Home = () => {
  const [data, setData] = useState(null)
  const navigate = useNavigate()
  const token = localStorage.getItem("access_token")
  const fetchData = async () => {
    const response = await fetch(
      "https://private-anon-0ded615c58-testbinar.apiary-mock.com/v1/products",
      {
        method: "GET",
        headers: {
          "Authorization": token,
        },
      }
    )
    const data = await response.json()
    setData(data.result)
  }

  const {
    isOpen: isCreateOpen,
    onOpen: onCreateOpen,
    onClose: onCreateClose,
  } = useDisclosure()

  const logOut = () => {
    localStorage.removeItem("access_token")
    navigate("/")
  }

  useEffect(() => {
    fetchData()
  }, [token])
  return (
    <>
      <Helmet>
        <title>home page</title>
      </Helmet>
      <Grid
        position="sticky"
        top="0"
        zIndex="2"
        width="100%"
        templateColumns="repeat(3, 1fr)"
        gap={2}
        fontSize="1em"
        background="rgba(255, 255, 255, 0.8)"
        textTransform="uppercase"
        alignItems="center"
        h={"10vh"}
        padding={5}
        borderBottom="1px solid"
      >
        <GridItem>
          <Flex alignItems="center" gap={2} marginLeft={5}>
            <Text>Product List</Text>
            <Button onClick={() => onCreateOpen()}>Create New</Button>
          </Flex>
        </GridItem>
        <GridItem colStart={3} marginLeft="auto" marginRight={5}>
          <Link onClick={logOut}>LogOut</Link>
        </GridItem>
      </Grid>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="40px" padding={10}>
        {data?.map((datum, idx) => (
          <Card key={idx} data={datum} />
        ))}
      </SimpleGrid>
      <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="lg" color="gray">
              Create New
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <CreateNewForm onClose={onCreateClose} />
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home
