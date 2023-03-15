import React from 'react';
import { ChatState } from '../context/ChatProvider';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import { Box } from '@chakra-ui/react';

const ChatPage = () => {
    const {user}=ChatState();
    console.log(user);
  return (
    <div style={{width:'100%'}}>
       
        {user && <SideDrawer/> }
        <Box>
            {/* {user && <MyChats/>} */}
            {/* {user && <ChatBox/>} */}
        </Box>
    </div>
  )
}

export default ChatPage