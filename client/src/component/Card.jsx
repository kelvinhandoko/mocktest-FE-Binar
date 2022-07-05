import {DeleteIcon, EditIcon} from "@chakra-ui/icons"
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AspectRatio,
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  IconButton,
  Image,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import {useRef} from "react"
import EditForm from "./EditForm"

const Card = ({data}) => {
  const token = localStorage.getItem("access_token")
  const toast = useToast()
  const {
    isOpen: isEditOpen,
    onOpen: onEditOpen,
    onClose: onEditClose,
  } = useDisclosure()
  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure()
  const cancelRef = useRef()

  const deleteProduct = async () => {
    try {
      const response = await fetch(
        `https://private-anon-0ded615c58-testbinar.apiary-mock.com/v1/products/${data.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "Authorization": token,
          },
        }
      )
      const message = await response.json()
      if (message.result) {
        toast({
          title: "success to Edit.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top-right",
        })
      }
    } catch (error) {
      toast({
        title: "failed to Edit.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top-right",
      })
    }
  }
  return (
    <Box border="1px solid">
      <Grid gridTemplateColumns={"1fr"} gridTemplateRows={"1fr"}>
        <GridItem zIndex={2} gridColumnStart={1} gridRowStart={1}>
          <Flex justify="flex-end">
            <IconButton
              icon={<EditIcon />}
              background="none"
              onClick={() => onEditOpen()}
            />
            <IconButton
              icon={<DeleteIcon />}
              background="none"
              onClick={() => onDeleteOpen()}
            />
          </Flex>
        </GridItem>
        <GridItem gridColumnStart={1} gridRowStart={1}>
          <AspectRatio maxW="xxl" ratio={4 / 3} borderBottom="1px solid">
            <Image
              src={data.imageurl}
              alt={data.name}
              objectFit="cover"
              fallbackSrc="https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png"
            />
          </AspectRatio>
        </GridItem>
      </Grid>

      <Flex flexDirection="column" align="flex-start" padding={5}>
        <Text>{data.name}</Text>
        <Text>$ {data.price}</Text>
      </Flex>
      <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text fontSize="md">Edit Product</Text>
          </ModalHeader>
          <ModalCloseButton />
          <EditForm data={data} onClose={onEditClose} />
        </ModalContent>
      </Modal>
      <AlertDialog
        isOpen={isDeleteOpen}
        leastDestructiveRef={cancelRef}
        onClose={onDeleteClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold" padding={16}>
              Are you sure want to delete {data.name}?
            </AlertDialogHeader>
            <AlertDialogFooter
              display="flex"
              justifyContent="center"
              borderTop="1px solid"
            >
              <Button ref={cancelRef} onClick={onDeleteClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={() => deleteProduct()} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  )
}

export default Card
