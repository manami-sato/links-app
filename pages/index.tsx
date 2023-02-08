import { Box, Flex } from '@chakra-ui/react';
import axios from 'axios';
import type { NextPage } from 'next';
import Oshi from 'src/components/Oshi';

const Home: NextPage = () => {
  return (
    <Box w={'90vw'} maxW={'600px'} m={'auto'}>
      <Flex flexDirection={'column'} gap={'24px'}>
        <Oshi index={0} />
        <Oshi index={0} />
      </Flex>
    </Box>
  );
};

export default Home;

// export const getStaticProps = async () => {
//   const fvItem = await axios.get(
//     // 'https://teratail.com/questions/s0h33nm8i0846f'
//     'https://twitter.com/inoueyoshio_co/status/1623259878222614528'
//   );
//   const item = fvItem.data;
//   const data = item.split(
//     `css-18t94o4 css-1dbjc4n r-1niwhzg r-sdzlij r-1phboty r-4iw3lz r-1xk2f4g r-109y4c4 r-2yi16 r-1qi8awa r-1ny4l3l r-1udh08x r-wwvuq4 r-u8s1d r-o7ynqc r-6416eg r-lrvibr r-92ng3h`
//   )[0];
//   // .split('&name=large");"')[0];

//   console.log(data);

//   return {
//     props: {
//       item: 1,
//     },
//   };
// };
