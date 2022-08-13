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
  <Layout title="SteamStadia">
  <Container>
    <Title>
      SteamStadia <Badge>2018</Badge>
    </Title>
    
    <P>
     Combination of a Gaming store like Steam and GamingLibrary and Launcher Like Epik Launhcer.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Platformm</Meta>
        <span>Windows</span>
      </ListItem>
      <ListItem>
        <Meta>Framework</Meta>
        <span>JavaSwing</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>MySQL</span>
      </ListItem>
    
    </List>

    
    <Box align="center" my={6}>
      <iframe
        src="https://www.youtube.com/embed/zvHMyamMQ24"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </Box>

    <WorkImage src="/images/works/steamstadia1.png" alt="SteamStadia" />
    <WorkImage src="/images/works/steamstadia2.png" alt="SteamStadia" />
    <WorkImage src="/images/works/steamstadia3.png" alt="SteamStadia" />
    <WorkImage src="/images/works/steamstadia4.png" alt="SteamStadia" />
  
 
  </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
