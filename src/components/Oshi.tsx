import { FC } from 'react';
import { Box } from '@chakra-ui/react';
import { socialLinks } from 'src/libs/social';

type Props = {
  title?: string;
};

const Oshi: FC<Props> = ({ title }) => {
  return (
    <Box>
      {socialLinks.map((item, i) => (
        <Box key={i + item.title}>{item.title}</Box>
      ))}
    </Box>
  );
};

export default Oshi;
