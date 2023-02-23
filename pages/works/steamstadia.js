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
    <P>This platform combines the features of a gaming store and gaming library, similar to Steam and Epik, with the functionality of a launcher like Epik Launcher. The platform allows users to browse and purchase a wide variety of games, as well as access their existing game library.</P>
    <P>With the integrated launcher, users can easily launch and manage their games, with features such as automatic updates, game settings, and compatibility checks. This ensures a seamless gaming experience, with no need to switch between different applications.</P>
    <P>The platform also offers community features, such as forums and social sharing, allowing gamers to connect and interact with each other. Additionally, it provides personalized recommendations and curated content based on users&apos gaming preferences.</P>
    <P>Overall, this platform offers a comprehensive gaming experience, with a range of features and functionalities designed to enhance the gaming experience for users. Whether they are casual gamers or hardcore enthusiasts, this platform has something to offer for everyone.</P>
  
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
