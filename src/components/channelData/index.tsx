import React,{useRef,useEffect} from 'react';

import ChannelMessage, {Mention} from '../channelMessage';

import {Container, Messages, InputWrapper, Input, InputIcon} from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

  useEffect(() => {
    const div = messagesRef.current;
    if(div){
      div.scrollTop = div.scrollHeight;
    }
  },[messagesRef]);

  return(
    <Container>
      <Messages>
        <ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        />
        <ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
        author="Bruno Shimura"
        date="04/05/2020"
        content="Hoje é meu aniversário."
        hasMention={false}
        isBot={false}
      /><ChannelMessage 
      author="Bruno Shimura"
      date="04/05/2020"
      content="Hoje é meu aniversário."
      hasMention={false}
      isBot={false}
    /><ChannelMessage 
    author="Bruno Shimura"
    date="04/05/2020"
    content="Hoje é meu aniversário."
    hasMention={false}
    isBot={false}
  /><ChannelMessage 
  author="Bruno Shimura"
  date="04/05/2020"
  content="Hoje é meu aniversário."
  hasMention={false}
  isBot={false}
/><ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
        author="Bruno Shimura"
        date="04/05/2020"
        content="Hoje é meu aniversário."
        hasMention={false}
        isBot={false}
      /><ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
        author="Bruno Shimura"
        date="04/05/2020"
        content="Hoje é meu aniversário."
        hasMention={false}
        isBot={false}
      /><ChannelMessage 
      author="Bruno Shimura"
      date="04/05/2020"
      content="Hoje é meu aniversário."
      hasMention={false}
      isBot={false}
    /><ChannelMessage 
    author="Bruno Shimura"
    date="04/05/2020"
    content="Hoje é meu aniversário."
    hasMention={false}
    isBot={false}
  /><ChannelMessage 
  author="Bruno Shimura"
  date="04/05/2020"
  content="Hoje é meu aniversário."
  hasMention={false}
  isBot={false}
/><ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
        author="Bruno Shimura"
        date="04/05/2020"
        content="Hoje é meu aniversário."
        hasMention={false}
        isBot={false}
      /><ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
          author="Bruno Shimura"
          date="04/05/2020"
          content="Hoje é meu aniversário."
          hasMention={false}
          isBot={false}
        /><ChannelMessage 
        author="Bruno Shimura"
        date="04/05/2020"
        content="Hoje é meu aniversário."
        hasMention={false}
        isBot={false}
      /><ChannelMessage 
      author="Bruno Shimura"
      date="04/05/2020"
      content="Hoje é meu aniversário."
      hasMention={false}
      isBot={false}
    />
        <ChannelMessage 
          author="Nath Shimura"
          date="20/05/2020"
          content={
            <>
              <Mention>@Bruno Shimura</Mention>, me carrega no lol por favor!
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="conversar em #chat-livre"/>
        <InputIcon/>
      </InputWrapper>
    </Container>
  )
}
export default ChannelData;