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
        Useful Knowledges
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="Introduction to VS Code Tricky-Tricks for absolute beginners"
            thumbnail={vscode}
            href="https://latenightwithsam.vercel.app/post/vscode-tricks"
          />
          <GridItem
            title="React and firebase authentication"
            thumbnail={react}
            href="https://latenightwithsam.vercel.app/post/react-firebase-api"
          />
          <GridItem
            title="Redux in bits and pieces for absolute beginners"
            thumbnail={redux}
            href="https://latenightwithsam.vercel.app/post/redux-basics"
          />
          <GridItem
            title="ORM[Sequelize] in bits and pieces for absolute beginners"
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
