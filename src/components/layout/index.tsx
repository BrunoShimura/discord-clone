import React from 'react';

import {Grid} from './styles';

import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';
import UserInfo from '../userInfo';
import UserList from '../userList';


const Layout: React.FC = () => {
  return(
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
      <UserInfo/>
      <div/>
      <UserList/>
    </Grid>
  )
}
export default Layout;