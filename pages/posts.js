import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import vscode from '../public/images/contents/vscode.png'
import react from '../public/images/contents/react.jpg'
import redux from '../public/images/contents/redux.jpg'
import sequelize from '../public/images/contents/sequelize.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        InfoBytes
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Mastering VS Code: Sneaky Tips and Tricks for Beginner Coders"
            thumbnail={vscode}
            href="https://latenightwithsam.vercel.app/post/vscode-tricks"
          />
          <GridItem
            title="Unlocking the Power of React and Firebase: A Guide to Secure Authentication"
            thumbnail={react}
            href="https://latenightwithsam.vercel.app/post/react-firebase-api"
          />
          <GridItem
            title="Modernizing Redux: The Bits and Pieces You Need for Beginner-Friendly Development"
            thumbnail={redux}
            href="https://latenightwithsam.vercel.app/post/redux-basics"
          />
          <GridItem
            title="Decoding Sequelize: An In-Depth Exploration of ORMs for Beginner Developers"
            thumbnail={sequelize}
            href="https://latenightwithsam.vercel.app/post/sequelize-orm-rest-api"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
