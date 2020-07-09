import React from 'react';

import {Grid} from './styles';

import ServerList from '../serverList';
import ServerName from '../serverName';
import ChannelInfo from '../channelInfo';

const Layout: React.FC = () => {
  return(
    <Grid>
      <ServerList/>
      <ServerName/>
      <ChannelInfo/>
    </Grid>
  )
}
export default Layout;