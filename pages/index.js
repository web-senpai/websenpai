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
  chakra,
  ListIcon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWebComponent, IoLogoFacebook,IoLogoYoutube, IoLogoReact, IoLogoVue, IoLogoAngular, IoGlobeOutline } from 'react-icons/io5'
import {HiOutlineDatabase, HiOutlineDesktopComputer, HiOutlineDeviceMobile, HiOutlineFire, HiOutlineLibrary, HiOutlineLightningBolt, HiOutlinePresentationChartBar, HiOutlineSwitchVertical, HiOutlineTable} from 'react-icons/hi'
import thumbYouTube from '../public/images/links/youtube.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Iconstyle = {display: 'inline-block', verticalAlign: 'middle'};
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
        Hello, I&apos;m a Software Engineer & System Architect.
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
        <Heading as="h3" variant="section-title" _hover={{ textDecorationColor: useColorModeValue("purple.300", "pink") }}>
          About Me ❤ 
        </Heading>
        <Paragraph>
          I am , MD. Samir Uddin Shuvo , I like to build and design softwares ranging from web sites
          to mobile applications. I try to keep myself updated with latest technologies and tools.
          In my personal time I either watch movies, animes, web series or build some pet projects with
          new tech-stacks.
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme={useColorModeValue("purple", "pink")}>
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title"  _hover={{ textDecorationColor: useColorModeValue("purple.300", "pink") }}>
          TimeLine 📅 
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
        <Heading as="h3" variant="section-title"  _hover={{ textDecorationColor: useColorModeValue("purple.300", "pink") }}>
          Skills 🏅 
        </Heading>

        <List ml={4} my={4}>
          <ListItem>
            <ListIcon as={IoLogoWebComponent}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Frontend
            </Badge>
       <span> <IoLogoReact  style={Iconstyle}/> React, <IoLogoVue style={Iconstyle}/> Vue, <IoLogoAngular  style={Iconstyle}/> Angular, Next, Astro.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={IoGlobeOutline}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Web UI/UX
            </Badge>
            <span>Html, CSS, Bootstrap, Tailwind CSS, Chakra UI, Daisy UI.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineDeviceMobile}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Mobile
            </Badge>
            <span>React Native, Flutter.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineDeviceMobile}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Mobile UI/UX
            </Badge>
            <span>React Native Paper, React Native Elements, UI Kitten.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineDesktopComputer}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Backend
            </Badge>
            <span>ExpressJs, Django, Dot Net, Php, .</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineDatabase}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Database
            </Badge>
            <span>Mongodb, Mysql, MS SQL Server, SQLite, Firebase.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineFire}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Package Managers
            </Badge>
            <span>Npm, Pnpm, Yarn.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineSwitchVertical}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Version Control
            </Badge>
            <span>Git, Github, GitLab, BitBucket.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlinePresentationChartBar}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Testing & Monitoring
            </Badge>
            <span>Postman, Insomnia, Flipper ,PM2.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineTable}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Project  Management
            </Badge>
            <span>Jira, Trello.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineLightningBolt}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Runtimes
            </Badge>
            <span>Nodejs, Deno, Bun.</span>
          </ListItem>
          <ListItem>
          <ListIcon as={HiOutlineLibrary}/>
            <Badge colorScheme={useColorModeValue("green", "pink")} mr={2}>
              Programming Languages
            </Badge>
            <span>C, C++, C#, Java, Javascript, Typescript, Python, Php.</span>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title" _hover={{ textDecorationColor: useColorModeValue("purple.300", "pink") }}>
          FootPrints 🕸️
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Eziosam" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("purple", "pink")}
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
                colorScheme={useColorModeValue("purple", "pink")}
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
                colorScheme={useColorModeValue("purple", "pink")}
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
                colorScheme={useColorModeValue("purple", "pink")}
                leftIcon={<IoLogoWebComponent />}
              >
                @portfolio
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.youtube.com/channel/UCs23AbDDcsUEh1FdHM6mbsw" target="_blank">
              <Button
                variant="ghost"
                colorScheme={useColorModeValue("purple", "pink")}
                leftIcon={<IoLogoYoutube />}
              >
                @youtube
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title"  _hover={{ textDecorationColor: useColorModeValue("purple.300", "pink") }}>
          I 💘
        </Heading>
        <Paragraph>
          Software development , Web Development, Mobile applications
        </Paragraph>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
