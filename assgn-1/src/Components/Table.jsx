import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";

export const TableComponent = ({ gitData, loading, searchData, search }) => {
  // console.log(search.current.value, "table");
  return (
    <TableContainer width={"83%"} margin={"auto"}>
      <Table
        variant="striped"
        colorScheme={loading ? "whiteAlpha" : "teal"}
        size={"sm"}
      >
        <TableCaption>
          git issues of{" "}
          <Link color="teal.500" href={gitData.repository_url}>
            PHP-FFMpeg/PHP-FFMpeg
          </Link>
        </TableCaption>
        <Thead border={"1px dotted teal"}>
          <Tr>
            <Th>Serial Number</Th>
            <Th>Issue name</Th>
            <Th isNumeric>Type of issue</Th>
          </Tr>
        </Thead>

        <Tbody>
          {loading ? (
            <Tr>
              <Td>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  // emptyColor="gray.200"
                  color="blue.500"
                  backgroundColor={"whiteAlpha.500"}
                  size="xl"
                  textAlign={"center"}
                />
              </Td>
              <Td>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  // emptyColor="gray.200"
                  color="blue.500"
                  backgroundColor={"whiteAlpha.500"}
                  size="xl"
                  textAlign={"center"}
                />
              </Td>
              <Td>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  // emptyColor="gray.200"
                  color="blue.500"
                  backgroundColor={"whiteAlpha.500"}
                  size="xl"
                  textAlign={"center"}
                />
              </Td>
            </Tr>
          ) : searchData.length > 0 ? (
            searchData.map((el) => {
              return (
                <Tr key={el.id}>
                  <Td>#{el.number}</Td>
                  <Td>{el.title}</Td>

                  <Td isNumeric>
                    {" "}
                    {el.state == "open" ? (
                      <Badge variant={"outline"} colorScheme="green">
                        Open
                      </Badge>
                    ) : (
                      <Badge variant={"outline"} colorScheme="red">
                        Closed
                      </Badge>
                    )}{" "}
                  </Td>
                </Tr>
              );
            })
          ) : (
            gitData.map((el) => {
              return (
                <Tr key={el.id}>
                  <Td>#{el.number}</Td>
                  <Td>{el.title}</Td>

                  <Td isNumeric>
                    {" "}
                    {el.state == "open" ? (
                      <Badge variant={"outline"} colorScheme="green">
                        Open
                      </Badge>
                    ) : (
                      <Badge variant={"outline"} colorScheme="red">
                        Closed
                      </Badge>
                    )}{" "}
                  </Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
