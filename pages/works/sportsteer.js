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
    <P>
    This database management system is specifically designed for sports clubs, providing a comprehensive solution for managing players, performance statistics, and financial data. With this system, sports clubs can easily keep track of their players&apos profiles, including personal information, contracts, and performance statistics such as goals, assists, and playing time.
    </P>
    In addition, the system provides a platform for tracking the club&aposs financial data, including revenue, expenses, and budgeting. This allows sports club managers to make informed decisions and plan for future growth.
    <P>
    The system offers an intuitive user interface and is easily customizable to fit the needs of individual sports clubs. It can be accessed securely from anywhere with an internet connection, allowing multiple users to collaborate and share information in real-time.
    </P>
    <P>
    Overall, this database management system is a valuable tool for sports clubs looking to efficiently manage their player and financial data, and make data-driven decisions to improve their performance on and off the field.
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
