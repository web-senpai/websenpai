import {
    Container,
    Badge,
    List,
    ListItem,
    AspectRatio,
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title,  Meta } from '../../components/work'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="Reportbyte">
      <Container>
        <Title>
        Reportbyte <Badge>2022</Badge>
        </Title>
        
        <P>
        eportbyte is an uncomplicated business analysis system that employs a tool known as Querybot, which utilizes the tapas model, to convert natural language inquiries into SQL. This allows it to provide answers to questions, such as those posed by sales representatives. Additionally, Reportbyte can offer customer support through the use of a tool called Shopbot, which employs the Rasa AI conversation model. 
        </P>
      
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>React, Vue</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Django</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>Mongodb</span>
          </ListItem>
          <ListItem>
            <Meta>AI Models</Meta>
            <span>Rasa, Tapas</span>
          </ListItem>

        
        </List>
  
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/72PpcFmfEYs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
  
      
     
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'
  