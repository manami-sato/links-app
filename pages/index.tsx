import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Oshi from 'src/components/Oshi';

const Home: NextPage = () => {
  return (
    <Box>
      <Oshi index={0} />
    </Box>
  );
};

export default Home;
