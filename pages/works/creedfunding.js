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
  <Layout title="Creedfunding">
    <Container>
      <Title>
        Creedfunding <Badge>2021</Badge>
      </Title>
      
      <P>
        A crowdfunding platform that helps young and creative individuals to fund their projects and inventions .
      </P>
    
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Frontend</Meta>
          <span>Angular</span>
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
          src="https://www.youtube.com/embed/R2XOjaSVCWo"
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
