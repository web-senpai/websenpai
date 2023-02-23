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
    <P>This android app is designed to provide students with comprehensive information on undergraduate university admissions. The app offers a user-friendly interface that allows students to browse and search for information on admission requirements, deadlines, fees, and other relevant details.</P>
    <P>With this app, students can easily track their application progress, receive notifications on admission updates, and access helpful resources such as study guides and exam preparation materials. It also offers features such as virtual campus tours and interactive maps, allowing students to get a better sense of the universities they are considering.</P>
    <P>The app is regularly updated with the latest information from universities, ensuring that students have access to accurate and up-to-date information. It is a valuable resource for students who are navigating the complex process of university admissions, providing them with the tools and information they need to make informed decisions about their future education.</P>
    <P>Overall, this android app is an essential tool for any student who is considering undergraduate university admissions, offering a wealth of information and resources at their fingertips.</P>
  
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
