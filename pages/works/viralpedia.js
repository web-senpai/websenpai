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

    <P>
    This informative blog-wiki site provides a wealth of information on viruses and pandemics.
     It is designed to educate and inform the public on topics such as the history of pandemics, the science of viruses, and current research on emerging infectious diseases.
    </P>
    <P>
    The site features articles, infographics, and videos that cover a wide range of topics related to viruses and pandemics, including prevention, treatment, and public health strategies. It also includes a user-friendly interface that makes it easy for readers to navigate and find the information they need.
    </P>

    <P>
    This blog-wiki site is a valuable resource for anyone interested in learning more about viruses and pandemics, whether they are students, healthcare professionals, or members of the general public. It provides up-to-date information on the latest developments in the field, and aims to promote awareness and understanding of the challenges posed by infectious diseases.
    </P>
  
    <List ml={4} my={4}>
      <ListItem>
        <Meta>Frontend</Meta>
        <span>Html, CSS, Bootstrap</span>
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
