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
     This e-commerce site is designed specifically for the selling and buying of pet foods and accessories.
     Pet owners can browse a wide variety of products, including food, toys, leashes, and grooming supplies, and 
     purchase them online from the comfort of their own home.
    </P>

    <P>
    The site features detailed product descriptions, photos, and customer reviews to help users make informed purchasing decisions. 
    It also offers convenient features such as easy search filters, wishlists, and shopping carts.
    </P>

    <P>
    This e-commerce site provides a secure and seamless shopping experience, with multiple payment options and fast shipping. 
    It is an ideal destination for pet owners looking for high-quality products for their furry friends, with a wide range of options to suit every pet's needs and preferences.
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
        <span>MS SQL</span>
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
