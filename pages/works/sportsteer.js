import {
  Container,
  Badge,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title,  Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="SportSteer">
  <Container>
    <Title>
      SportSteer <Badge>2020</Badge>
    </Title>
    
    <P>
       A database Management system for sports club tomanage players,performance statistics and financial stats.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Platformm</Meta>
        <span>Windows</span>
      </ListItem>
      <ListItem>
        <Meta>Framework</Meta>
        <span>JavaFX</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>MS SQL Server</span>
      </ListItem>
    
    </List>

    
    <Box align="center" my={6}>
      <iframe
        src="https://www.youtube.com/embed/yxf3BgY9hYI"
        width="100%"
        height="400"
        frameBorder="0"
        allowFullScreen
      />
    </Box>

  
 
  </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
