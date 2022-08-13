import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import sportsteer from '../public/images/works/sportsteer.png'
import shadowhunter from '../public/images/works/shadowhunter.png'
import shopbot from '../public/images/works/shopbot.png'
import creedfunding from '../public/images/works/creedfunding.png'
import steamstadia from '../public/images/works/steamstadia.png'
import admitto from '../public/images/works/admitto.png'
import viralpedia from '../public/images/works/viralpedia.png'
import parakeet from '../public/images/works/parakeet.png'
import reportbyte from '../public/images/works/reportbyte.png'


const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Websites
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="creedfunding" title="Creedfunding" thumbnail={creedfunding}>
            A crowdfunding platform that helps young and creative individuals to fund their projects and inventions .
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="parakeet"
            title="Parakeet"
            thumbnail={parakeet}
          >
            An E-commerce site built for selling and buying pet foods and accessories.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="viralpedia"
            title="ViralPedia"
            thumbnail={viralpedia}
          >
            An informative blog-wiki site to learn more about viruses and pandemics.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
            id="reportbyte"
            title="Reportbyte"
            thumbnail={reportbyte}
          >
            A business assistance site built with modern machine learning and artificial intelligence techniques and technologies.
          </WorkGridItem>
        </Section>
        
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Desktop Apps
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1,2]} gap={6}>
      <Section delay={0.3}>
          <WorkGridItem id="sportsteer" thumbnail={sportsteer} title="SportSteer">
            A database Management system for sports club tomanage players,performance statistics and financial stats.
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="steamstadia"
            thumbnail={steamstadia}
            title="SteamStadia"
          >
            Combination of a Gaming store like Steam and GamingLibrary and Launcher Like Epik Launhcer.
          </WorkGridItem>
        </Section>
 
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Android App
        </Heading>
      </Section>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="admitto" thumbnail={admitto} title="Admitto">
            An android app for students regarding undergraduateuniversity admission related information.
          </WorkGridItem>
        </Section>
      
    
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          Other Works
        </Heading>
      </Section>

      
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem id="shopbot" thumbnail={shopbot} title="Shopbot">
           A conversational chatbot for e-commerce sites and digitalmarketing based businesses.
          </WorkGridItem>
        </Section>

        <Section delay={0.5}>
          <WorkGridItem id="shadowhuter" thumbnail={shadowhunter} title="ShadowHunter">
           A mini 2D puzzle based adventure game about a lost boy unraveling the mysteries of his life.
          </WorkGridItem>
        </Section>
      
    
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
