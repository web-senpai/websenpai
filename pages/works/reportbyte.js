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
          Reportbyte is a simple business analyst system which can convert natural language questions into sql using a tool called Querybot which uses tapas model.
          It can answer questions like sales representatives ans provide customer support using a tool called Shopbot which uses tapas AI conversation model. 
        </P>
      
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>React , Vue</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Django</span>
          </ListItem>
          <ListItem>
            <Meta>Database</Meta>
            <span>Mongodb</span>
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
  