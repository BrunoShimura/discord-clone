import React from 'react';

import {Grid} from './styles';

import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';
import ChannelList from '../channelList';

const Layout: React.FC = () => {
  return(
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
      <ChannelList/>
    </Grid>
  )
}
export default Layout;