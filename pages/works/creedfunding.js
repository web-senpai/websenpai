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
        Our crowdfunding website provides an online platform where entrepreneurs, artists, and individuals can pitch their business ideas, creative projects, or personal causes to a global community of supporters.

Users can create a campaign page with a fundraising goal and a pitch that describes their project, product, or service. They can offer incentives or rewards to backers who contribute to their campaign.

This website allows users to promote their campaigns through social media, email, and other channels, and track the progress of their funding goals in real-time.

Backers can browse and support campaigns that align with their interests and values. They can make contributions of any size and often receive exclusive rewards or early access to products or services.

As a crowdfunding website, we typically charge a fee for hosting and promoting campaigns, and may also collect a percentage of the funds raised. However, we provide a powerful tool for democratizing access to capital and empowering individuals and communities to support innovative and impactful ideas.
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
