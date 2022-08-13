import {
  Box,
  Container,
  Badge,
  List,
  ListItem,
 
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ShopBot">
  <Container>
    <Title>
      ShopBot <Badge>2022</Badge>
    </Title>
    
    <P>
      A conversational chatbot for e-commerce sites and digitalmarketing based businesses.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Frontend</Meta>
        <span>Html , CSS , Bootstrap</span>
      </ListItem>
      <ListItem>
        <Meta>Backend</Meta>
        <span>Django</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>SQLite</span>
      </ListItem>
      <ListItem>
        <Meta>AI Framework</Meta>
        <span>Rasa</span>
      </ListItem>
    
    </List>

    
    <Box align="center" my={6}>
      <iframe
        src="https://www.youtube.com/embed/Z8LFVy6ZkcY"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </Box>

    <WorkImage src="/images/works/shopbot1.png" alt="shopbot" />
    <WorkImage src="/images/works/shopbot2.png" alt="shopbot" />
    <WorkImage src="/images/works/shopbot3.png" alt="shopbot" />
    <WorkImage src="/images/works/shopbot4.png" alt="shopbot" />
    <WorkImage src="/images/works/shopbot5.png" alt="shopbot" />
 

  
 
  </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
