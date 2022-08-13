import {
  Container,
  Badge,
  List,
  ListItem,
  Box
} from '@chakra-ui/react'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Parakeet">
  <Container>
    <Title>
    Parakeet <Badge>2021</Badge>
    </Title>
    
    <P>
      An E-commerce site built for selling and buying pet foods and accessories.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Frontend</Meta>
        <span>Html , CSS , Bootstrap</span>
      </ListItem>
      <ListItem>
        <Meta>Backend</Meta>
        <span>Dot Net,Entity Framework</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>MySQL</span>
      </ListItem>
    
    </List>

    
    <Box>
      <iframe
        src="https://www.youtube.com/embed/CdzC_hzbq6Y"
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
