import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  Badge,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWebComponent, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an software Engineer based in Bangladesh!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Samir Shuvo
          </Heading>
          <p>Software Engineer </p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/samir.png"
              alt="Profile image"
              borderRadius="full"
              width="100%"
              height="100%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          Samir is a full-stack developer based in Dhaka with a
          passion for Learning new technologies everyday. He has a knack
          for all things building softwares, from planning and designing all the
          way to solving real-life problems with code. When not online, he loves
          watching movies,web series,animes.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>1998</BioYear>
          Born in Dhaka , Bangladesh.
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed the Bachelor&apos;s Program in the Graduate School of
          Computer Science and Engineering at Ahsanullah University Of Science And Technology.

        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Started working as Software Engineer at Enosis Solutions,Dhaka.
        </BioSection>

      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Art, Music,Gaming
          , Watching Movies/Series,{' '} Anime
          , Programming, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>

        <List ml={4} my={4}>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Frontend
            </Badge>
            <span>Angular, React, Vue.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              UI/UX
            </Badge>
            <span>Html, CSS, Bootstrap, Tailwind CSS, Chakra UI.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Backend
            </Badge>
            <span>Django, Dot Net, Php, ExpressJs.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Database
            </Badge>
            <span>Mongodb, Mysql, MS SQL Server, SQLite, Firebase.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Package Managers
            </Badge>
            <span>NPM, Yarn.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Version Control
            </Badge>
            <span>Git, Github, GitLab, BitBucket.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Testing
            </Badge>
            <span>Postman, Insomnia, Jira.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Runtimes
            </Badge>
            <span>Nodejs, Deno, Bun.</span>
          </ListItem>
          <ListItem>
            <Badge colorScheme="green" mr={2}>
              Programming Languages
            </Badge>
            <span>C, C++, C#, Java, Javascript, Typescript, Python, Php.</span>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Eziosam" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @eziosam
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/samirshuvo/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @samirshuvo
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.facebook.com/profile.php?id=100069216224600" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoFacebook />}
              >
                @samir
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://dextersamir.github.io/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoWebComponent />}
              >
                @portfolio
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://www.youtube.com/channel/UCs23AbDDcsUEh1FdHM6mbsw"
            title="Dev as Life"
            thumbnail={thumbYouTube}
          >
            Web Senpai
          </GridItem>
        </SimpleGrid>


      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
