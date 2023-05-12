// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function Prediction() {
//     const [data, setData] = useState(null);
//     useEffect(() => {
//       axios.get("http://127.0.0.1:9457").then((response) => {
        
//         const htmlString = response.data;
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(htmlString, "text/html");
//         const heading = doc.body;
//         // heading.querySelector("#submitButton").setAttribute("onClick", test());
//         console.log(heading.innerHTML);
//         setData(heading.innerHTML);
//       });
//     }, []);
  
//     return (
//       <div>
//         {data && <div dangerouslySetInnerHTML={{ __html: data }}></div>}
//       </div>
//     );
//   }
//   export default Prediction;


import { useState } from "react";
import Card from "components/Card/Card.js";
import {
  Box,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";

function Prediction() {
  const [formData, setFormData] = useState({
    itemWeight: "",
    itemVisibility: "",
    itemType: "",
    itemMrp: "",
    establishmentYear: "",
    itemFatContent: "",
    outletSize: "",
    outletLocationType: "",
    outletType: "",
  });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(formData);
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9457/', {
      mode: 'cors',
      method: 'POST',
      body: new FormData(event.target)
    })
    .then(response => response.text())
    .then(data => {
      console.log(data);
      setFormData({});
    })
    .catch(error => {
      console.error(error);
    });
  };

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    return (
    <Flex flexDirection='column' pt={{ base: "120px", md: "75px" }}>
      <Card>
      {/* <Box maxW="md" mx="auto" mt="8" p="6" borderWidth="1px" borderRadius="lg" overflow="hidden"> */}
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Item Weight</FormLabel>
            <Input
              name="itemWeight"
              value={formData.itemWeight}
              onChange={handleChange}
              type="number"
            />
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Item Visibility</FormLabel>
            <Input
              name="itemVisibility"
              value={formData.itemVisibility}
              onChange={handleChange}
              type="number"
              step={0.001}
            />
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Item Type</FormLabel>
            <Select
              name="itemType"
              value={formData.itemType}
              onChange={handleChange}
              placeholder="Select item type"
            >
              <option value="0">Baking Goods</option>
              <option value="1">Breads</option>
              <option value="2">Breakfast</option>
              <option value="3">Canned</option>
              <option value="4">Dairy</option>
              <option value="5">Frozen Foods</option>
              <option value="6">Fruits and Vegetables</option>
              <option value="7">Hard Drinks</option>
              <option value="8">Health and Hygiene</option>
              <option value="9">Household</option>
              <option value="10">Meat</option>
              <option value="11">Others</option>
              <option value="12">Seafood</option>
              <option value="13">Snack Foods</option>
              <option value="14">Soft Drinks</option>
              <option value="15">Starchy Foods</option>
            </Select>
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Item MRP</FormLabel>
            <Input
              name="itemMrp"
              value={formData.itemMrp}
              onChange={handleChange}
              type="number"
            />
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Establishment Year</FormLabel>
            <Input
              name="establishmentYear"
              value={formData.establishmentYear}
              onChange={handleChange}
              type="number"
            />
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Item Fat Content</FormLabel>
            <Select
              name="itemFatContent"
              value={formData.itemFatContent}
              onChange={handleChange}
              placeholder="Select item type"
            >
              <option value="type1">Low Fat</option>
              <option value="type2">Regular Fat</option>
              <option value="type3">High Fat</option>
            </Select>
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Outlet Size</FormLabel>
            <Select
              name="outletSize"
              value={formData.outletSize}
              onChange={handleChange}
              placeholder="Select outlet size"
            >
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </Select>
          </FormControl>
  
          <FormControl mt="4">
            <FormLabel>Outlet Location Type</FormLabel>
            <Select
              name="OutletLocationType"
              value={formData.OutletLocationType}
              onChange={handleChange}
              placeholder="Select outlet location type"
            >
              <option value="Tier 1">Tier 1</option>
              <option value="Tier 2">Tier 2</option>
              <option value="Tier 3">Tier 3</option>
            </Select>
          </FormControl>

          <FormControl mt="4">
            <FormLabel>Outlet Type</FormLabel>
            <Select
              name="outletType"
              value={formData.outletType}
              onChange={handleChange}
              placeholder="Select outlet type"
            >
              <option value="grocey store">Grocey Store</option>
              <option value="supermarket type 1">Supermarket type 1</option>
              <option value="supermarket type 2">Supermarket type 2</option>
              <option value="supermarket type 3">Supermarket type 3</option>
            </Select>
          </FormControl>

          <Button mt="4" type="submit">Submit</Button>
          </form>
          </Card>
          {/* </Box> */}
      </Flex>
);}

export default Prediction;