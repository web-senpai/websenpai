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
    <Layout title="ShadowHunter">
      <Container>
        <Title>
        Shadowhunter <Badge>2017</Badge>
        </Title>
        
        <P>
        A mini 2D puzzle based adventure game about a lost boy unraveling the mysteries of his life. 
        </P>
      
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Language</Meta>
            <span>C++</span>
          </ListItem>   
        </List>
  
        <AspectRatio maxW="640px" ratio={1.7} my={4}>
          <iframe
            src="https://www.youtube.com/embed/XqOXvkxzUy0"
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
  