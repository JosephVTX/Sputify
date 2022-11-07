import {
  Box,
  Text,
  Divider,
  Heading,
  HStack,
  Flex,
  VStack,
} from '@chakra-ui/react';
import hero from './assets/hero.svg';
import avatar from './assets/avatar.svg';
import { ArrowLeftIcon, ChevronLeftIcon } from '@chakra-ui/icons';

const Header = () => {
  return (
    <Box
      as="header"
      className="bg-[#ffb5a7] h-[280px] overflow-hidden relative"
    >
      <img
        src={hero}
        alt="hero"
        className="h-[380px] absolute left-0 top-[-60px]"
        style={{ transform: 'scaleX(-1)' }}
      />

      <Box className="text-right p-16 text-white font-bold">
        <Heading as="h1" className="text-5xl">
          Your favorite tunes
        </Heading>
        <Heading as="h2" className="mt-6 text-4xl">
          All ☀️ and all 🌙
        </Heading>
      </Box>
    </Box>
  );
};

const MediaWrapper = ({ children, label }) => {
  return (
    <Box px={16}>
      <Flex justifyContent={'center'} alignItems={'center'} gap={4}>
        <Text
          as="label"
          color="gray.400"
          fontWeight="bold"
          className="text-sm"
          minW="max-content"
        >
          {label.toUpperCase()}
        </Text>
        <Divider w="100%" color="gray.900" />
        <ChevronLeftIcon h={9} />
      </Flex>
      <HStack spacing="36px" p={4}>
        {children}
      </HStack>
    </Box>
  );
};

const MediaCard = ({ img, title }) => {
  return (
    <Box>
      <Box bg="blackAlpha.400" boxShadow="lg">
        <img src={img} alt="" width={'120px'} height={'120px'} />
      </Box>
      <Text as="p" className="text-md mt-2 text-center font-bold">
        {title}
      </Text>
    </Box>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <VStack my={16} spacing="36px">
        <MediaWrapper label="Released this week">
          {[...Array(10)].map((_, i) => (
            <MediaCard key={i} img={avatar} title={`Track ${i + 1}`} />
          ))}
        </MediaWrapper>
        <MediaWrapper label="Featured playlists">
          {[...Array(10)].map((_, i) => (
            <MediaCard key={i} img={avatar} title={`Track ${i + 1}`} />
          ))}
        </MediaWrapper>
      </VStack>
    </>
  );
};
export default App;
