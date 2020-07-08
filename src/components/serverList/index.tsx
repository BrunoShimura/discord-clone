import React from  'react';

import ServerButton from '../serverButton';

import { Container,Separator } from './styles';

const ServerList: React.FC = () =>{
  return(
    <Container>
      <ServerButton isHome/>
      <Separator/>

      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={31}/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton/>
      <ServerButton mentions={4}/>
      <ServerButton/>
      <ServerButton/>
      <ServerButton hasNotifications/>
      <ServerButton mentions={212}/>
    </Container>
  )
}
export default ServerList;