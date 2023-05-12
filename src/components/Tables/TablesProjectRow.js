import React from "react";
import {
  Tr,
  Td,
  Flex,
  Text,
  Progress,
  Icon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaEllipsisV } from "react-icons/fa";

function DashboardTableRow(props) {
  const {
    Item_Identifier,
    Item_Weight,
    Item_Fat_Content,
    Item_Visibility,
    Item_Type,
    Item_MRP,
    Outlet_Identifier,
    Outlet_Establishment_Year,
    Outlet_Size,
    Outlet_Location_Type,
    Outlet_Type,
    Item_Outlet_Sales,
    isBold,
  } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  // Item_Identifier,Item_Weight,Item_Fat_Content,Item_Visibility,Item_Type,Item_MRP,Outlet_Identifier,Outlet_Establishment_Year,Outlet_Size,Outlet_Location_Type,Outlet_Type,Item_Outlet_Sales

  return (
    <Tr>
      <Td minWidth={{ sm: "125px" }} pl="0px" borderColor={borderColor}>
        <Flex alignItems="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          {/* <Icon as={logo} h={"24px"} w={"24px"} me="18px" /> */}
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_Identifier}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_Weight}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_Fat_Content}
          </Text>
          {Item_Identifier==="Item ID" && <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
          {Item_Visibility}
          </Text>}
          {Item_Identifier!=="Item ID" && <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
          {(Item_Visibility*1).toFixed(3)}
          </Text>}
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_Type}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_MRP}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Outlet_Identifier}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Outlet_Establishment_Year}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Outlet_Size}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Outlet_Location_Type}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Outlet_Type}
          </Text>
          <Text
            fontSize="md"
            color={titleColor}
            fontWeight={isBold ? "bold" : "normal"}
            minWidth="11%"
          >
            {Item_Outlet_Sales}
          </Text>
        </Flex>
      </Td>
    </Tr>
  );
}

export default DashboardTableRow;
