import {
  
  Container,
  Badge,
  List,
  ListItem,

} from '@chakra-ui/react'
import { Title, Meta,WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Admitto">
  <Container>
    <Title>
      Admitto <Badge>2019</Badge>
    </Title>
    
    <P>
      An android app for students regarding undergraduateuniversity admission related information.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Frontend</Meta>
        <span>XML,Android</span>
      </ListItem>
      <ListItem>
        <Meta>Backend</Meta>
        <span>Java</span>
      </ListItem>
      <ListItem>
        <Meta>Database</Meta>
        <span>Firebase</span>
      </ListItem>
    
    </List>

    <WorkImage src="/images/works/admitto1.png" alt="admitto" />
    <WorkImage src="/images/works/admitto2.png" alt="admitto" />
    <WorkImage src="/images/works/admitto3.png" alt="admitto" />
    

  
 
  </Container>
</Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
