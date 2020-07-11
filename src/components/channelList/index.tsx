import React from 'react';

import ChannelButton from '../channelButton';

import {Container, Category, AddCategoryIcon} from './styles';

const ChanelList: React.FC = () => {
  return(
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon/>
      </Category>
      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="trabalho"/>
      <ChannelButton channelName="lolzinho"/>
      <ChannelButton channelName="csgo"/>
      <ChannelButton channelName="valorant"/>

    </Container>
    )
};
export default ChanelList;