import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Box,
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [navbarBg, setNavbarBg] = useState('transparent');
  const location = useLocation();

  const handleSearchClick = () => {
    setSearchOpen(!isSearchOpen);
    if (isOpen) {
      onToggle();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg('#212121');
      } else {
        setNavbarBg('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding={{ base: '2', md: '3' }}
      bg={navbarBg}
      color="white"
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      transition="background-color 0.3s ease"
      w={"100%"}
    >
      <Flex display={{ base: 'flex', md: 'none' }} align="center">
        <IconButton
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          fontSize="20px"
          variant="unstyled"
          color="white"
          onClick={onToggle}
          aria-label="Menu"
        />
        {isOpen && (
          <Flex
            direction="column"
            bg="#212121"
            color="white"
            position="absolute"
            left="0"
            top="56px"
            width="150px"
            h={'100vh'}
            textAlign={'left'}
            rowGap={'20px'}
            zIndex="5"
            paddingLeft={'20px'}
            paddingTop={'30px'}
            fontSize={'20px'}
          >
            {/* Menu links */}
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? 'aqua' : 'white'
              }}
            >
              Home
            </Link>
            <Link
              to="/services"
              style={{
                color: location.pathname === '/services' ? 'aqua' : 'white'
              }}
            >
              Services
            </Link>
            <Link
              to="/about"
              style={{
                color: location.pathname === '/about' ? 'aqua' : 'white'
              }}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              style={{
                color: location.pathname === '/testimonials' ? 'aqua' : 'white'
              }}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              style={{
                color: location.pathname === '/contact' ? 'aqua' : 'white'
              }}
            >
              Contact
            </Link>
          </Flex>
        )}
      </Flex>

      <Flex display="flex" align="center" w="100%" maxW="1200px" mx="auto">
        <Link to="/">
          <Box fontSize="20px" fontWeight="bold" color={"aqua"}>
            Digital Media Solutions
          </Box>
        </Link>

        <Flex
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          ml="auto"
        >
          <Flex gap={'20px'} fontSize={'20px'}>
            <Link
              to="/"
              style={{
                color: location.pathname === '/' ? 'aqua' : 'white'
              }}
            >
              Home
            </Link>
            <Link
              to="/services"
              style={{
                color: location.pathname === '/services' ? 'aqua' : 'white'
              }}
            >
              Services
            </Link>
            <Link
              to="/about"
              style={{
                color: location.pathname === '/about' ? 'aqua' : 'white'
              }}
            >
              About
            </Link>
            <Link
              to="/testimonials"
              style={{
                color: location.pathname === '/testimonials' ? 'aqua' : 'white'
              }}
            >
              Testimonials
            </Link>
            <Link
              to="/contact"
              style={{
                color: location.pathname === '/contact' ? 'aqua' : 'white'
              }}
            >
              Contact
            </Link>
          </Flex>

          <IconButton
            icon={isSearchOpen ? <CloseIcon /> : <SearchIcon />}
            variant="unstyled"
            colorScheme="white"
            onClick={handleSearchClick}
            ml="2"
            aria-label="Search"
          />

          {isSearchOpen && (
            <InputGroup ml="2" width="200px">
              <Input placeholder="Search..." borderRadius={'15px'} />
              <InputRightElement>
                <IconButton icon={<SearchIcon />} variant="ghost" color="white" />
              </InputRightElement>
            </InputGroup>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
