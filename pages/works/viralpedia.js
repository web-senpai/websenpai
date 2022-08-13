import {
  Container,
  Badge,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="ViralPedia">
  <Container>
    <Title>
      ViralPedia <Badge>2020</Badge>
    </Title>
    
    <P>
      An informative blog-wiki site to learn more about viruses and pandemics.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Frontend</Meta>
        <span>Html , CSS , Bootstrap</span>
      </ListItem>
      <ListItem>
        <Meta>Backend</Meta>
        <span>PHP</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>MySQL</span>
      </ListItem>
    
    </List>

    
    <Box align="center" my={6}>
      <iframe
        src="https://www.youtube.com/embed/Rmlh6hV4Ntg"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </Box>

    <WorkImage src="/images/works/viralpedia1.png" alt="viralpedia" />
    <WorkImage src="/images/works/viralpedia2.png" alt="viralpedia" />
    <WorkImage src="/images/works/viralpedia3.png" alt="viralpedia" />
    <WorkImage src="/images/works/viralpedia4.png" alt="viralpedia" />
    <WorkImage src="/images/works/viralpedia5.png" alt="viralpedia" />
 

  
 
  </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
