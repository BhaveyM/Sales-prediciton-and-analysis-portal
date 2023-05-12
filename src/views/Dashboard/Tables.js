// Chakra imports
import {
  Flex,
  Table,
  Tbody,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue
} from "@chakra-ui/react";
// Custom components
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import TablesProjectRow from "components/Tables/TablesProjectRow";
import TablesTableRow from "components/Tables/TablesTableRow";
import React from "react";
import {data, tablesProjectData, tablesTableData } from "variables/general";
const limitedData = data.slice(0, 50);

function Tables() {
  const textColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Flex direction="column" pt={{ base: "120px", md: "75px" }}>
      {/* <Card overflowX={{ sm: "scroll", xl: "hidden" }} pb="0px">
        <CardHeader p="6px 0px 22px 0px">
          <Text fontSize="xl" color={textColor} fontWeight="bold">
            Authors Table
          </Text>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Thead>
              <Tr my=".8rem" pl="0px" color="gray.400" >
                <Th pl="0px" borderColor={borderColor} color="gray.400" >
                  Author
                </Th>
                <Th borderColor={borderColor} color="gray.400" >Function</Th>
                <Th borderColor={borderColor} color="gray.400" >Status</Th>
                <Th borderColor={borderColor} color="gray.400" >Employed</Th>
                <Th borderColor={borderColor}></Th>
              </Tr>
            </Thead>
            <Tbody>
              {tablesTableData.map((row, index, arr) => {
                return (
                  <TablesTableRow
                    name={row.name}
                    logo={row.logo}
                    email={row.email}
                    subdomain={row.subdomain}
                    domain={row.domain}
                    status={row.status}
                    date={row.date}
                    isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card> */}
      <Card
        my="22px"
        overflowX={{ sm: "scroll", xl: "scroll" }}
        pb="0px"
      >
        <CardHeader p="6px 0px 22px 0px">
          <Flex direction="column">
            <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
              PREVIOUS SALES DATA
            </Text>
          </Flex>
        </CardHeader>
        <CardBody>
          <Table variant="simple" color={textColor}>
            <Tbody>
            <TablesProjectRow
                    Item_Identifier="Item ID"
                    Item_Weight="Weight"
                    Item_Fat_Content="Fat Content"
                    Item_Visibility="Visibility"
                    Item_Type="Type"
                    Item_MRP="MRP"
                    Outlet_Identifier="Outlet ID"
                    Outlet_Establishment_Year="Estb Year"
                    Outlet_Size="Outlet Size"
                    Outlet_Location_Type="Location Type"
                    Outlet_Type="Outlet Type"
                    Item_Outlet_Sales="Sales"
                    isBold={1}

                    // isLast={index === arr.length - 1 ? true : false}
              />
              {limitedData.map((row, index, arr) => {
                return (
                  <TablesProjectRow
                    Item_Identifier={row.Item_Identifier}
                    Item_Weight={row.Item_Weight}
                    Item_Fat_Content={row.Item_Fat_Content}
                    Item_Visibility={row.Item_Visibility}
                    Item_Type={row.Item_Type}
                    Item_MRP={row.Item_MRP}
                    Outlet_Identifier={row.Outlet_Identifier}
                    Outlet_Establishment_Year={row.Outlet_Establishment_Year}
                    Outlet_Size={row.Outlet_Size}
                    Outlet_Location_Type={row.Outlet_Location_Type}
                    Outlet_Type={row.Outlet_Type}
                    Item_Outlet_Sales={row.Item_Outlet_Sales}
                    isBold={0}

                    // isLast={index === arr.length - 1 ? true : false}
                    key={index}
                  />


                );
              })}
            </Tbody>
          </Table>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Tables;
