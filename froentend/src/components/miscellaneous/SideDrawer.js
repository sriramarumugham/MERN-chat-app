import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  MenuDivider,
  Text,
} from "@chakra-ui/react";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { useState } from "react";

import { ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar, AvatarBadge, AvatarGroup } from "@chakra-ui/react";

import ProfileModal from "./ProfileModal";
import { ChatState } from "../../context/ChatProvider";

const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, serSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLodingChat] = useState(false);

  const { user } = ChatState();
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost">
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex" }} px={4}>
              Search User
            </Text>
          </Button>
        </Tooltip>

        <Text fontSize="2xl" fontFamily="Work sans">
          CHAT APP
        </Text>

        <div>
          <Menu>
            <MenuButton p={1} as={Button}>
              <i class="fa-solid fa-bell" fontSize="2xl"></i>
            </MenuButton>

            <MenuList pl={2}>
              <MenuItem>Menuitem</MenuItem>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              <Avatar size="sm" cursor="pointer" src={user.pic} name={user.name} />
            </MenuButton>

            <MenuList>
              <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
              </ProfileModal>
              <MenuDivider></MenuDivider>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </Box>
    </>
  );
};

export default SideDrawer;
