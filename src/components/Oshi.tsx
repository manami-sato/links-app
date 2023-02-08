import { FC, useEffect, useState } from 'react';
import { Box, Center, Text } from '@chakra-ui/react';
import { socialLinks } from 'src/libs/social';
import { decorationArray } from 'src/libs/decoration';
import { colorArray } from 'src/libs/color';
import other from 'src/assets/img/link-icon-other';

type Props = {
  index: number;
};

type arrayType = {
  id: number;
  color: number;
  name: string;
  emoji: string;
  position: string | undefined;
  decoration: number;
  links: {
    array: (string | undefined)[];
    other:
      | {
          text: string;
          url: string;
        }[]
      | undefined;
  };
  youtube:
    | {
        title: string | undefined;
        url: string;
        description: string | undefined;
      }[]
    | undefined;
  twitter: string[] | undefined;
};

const array: arrayType[] = [
  {
    id: 1,
    color: 5,
    name: 'よしおさん',
    emoji: '🦜',
    position: '日本一歌がうまい男性',
    decoration: 1,
    links: {
      array: [
        'inoueyoshio_co',
        'inoueyoshio_co',
        'inoueyoshio-official',
        undefined,
        undefined,
      ],
      other: [
        {
          text: 'オフィシャルサイト',
          url: 'https://grand-arts.com/inoueyoshio/',
        },
      ],
    },
    youtube: [
      {
        title: 'タイトル',
        url: 'https://www.youtube.com/embed/VuLaS3dg9RI',
        description: '説明',
      },
    ],
    twitter: [
      'https://twitter.com/inoueyoshio_co/status/1623259878222614528?s=20&t=S_2iFAQIyxZM3ZveVZSzaQ',
    ],
  },
];

// fontawesomeから引っ張ってきて好きなのを選べるようにする

const Oshi: FC<Props> = ({ index }) => {
  const [content, setContent] = useState<arrayType>();

  useEffect(() => {
    setContent(array[index]);
  }, []);

  const OshiName = () => (
    <>
      {content && (
        <Center w={'fit-content'}>
          <Center
            w={'56px'}
            h={'56px'}
            borderRadius={'9999px'}
            fontSize={'2.5rem'}
            bg={colorArray[content.color]}
          >
            {content.emoji}
          </Center>
          <Box>
            {content.position && (
              <Text color={'gray'} fontSize={'1.2rem'}>
                {content.position}
              </Text>
            )}
            <Box
              as={'h2'}
              fontWeight={'bold'}
              fontSize={'1.6rem'}
              sx={{
                ...(content.decoration && {
                  '&::before': {
                    content: `'${decorationArray[content.decoration]}'`,
                  },
                  '&::after': {
                    content: `'${decorationArray[content.decoration]}'`,
                  },
                }),
              }}
            >
              {content.name}
            </Box>
          </Box>
        </Center>
      )}
    </>
  );
  const OshiLinks = () => (
    <>
      {content && (
        <Center
          gap={'8px'}
          w={'fit-content'}
          sx={{
            '>a': {
              height: '40px',
              borderRadius: '9999px',
            },
          }}
        >
          {socialLinks.map((item, i) => (
            <Center
              as={'a'}
              href={content && `${item.url}${content.links.array[i]}`}
              target={'_blank'}
              key={i + item.title}
              w={'40px'}
              h={'40px'}
              bg={colorArray[content.color]}
              sx={{
                ...(!content.links.array[i] && {
                  display: 'none',
                }),
              }}
            >
              {content && (
                <Center as={'img'} src={`/img/link-icon-${item.title}.svg`} />
              )}
            </Center>
          ))}
          {content.links.other && (
            <>
              {content.links.other.map((item, i) => (
                <Center
                  as={'a'}
                  href={item.url}
                  target={'_blank'}
                  key={i + item.text}
                  gap={'8px'}
                  sx={{
                    path: {
                      fill: colorArray[content.color],
                    },
                  }}
                >
                  <Center as={other} />
                  <Text color={colorArray[content.color]}>{item.text}</Text>
                </Center>
              ))}
            </>
          )}
        </Center>
      )}
    </>
  );
  const OshiYoutube = () => (
    <>
      {content && content.youtube && (
        <>
          {content.youtube.map((item, i) => (
            <Box key={i + item.url}>
              {item.title && <Text>{item.title}</Text>}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VuLaS3dg9RI"
                // title="YouTube video player"
                // frameBorder="0"
                // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              {item.description && <Text>{item.description}</Text>}
            </Box>
          ))}
        </>
      )}
    </>
  );
  const OshiTwitter = () => (
    <>
      {content && content.twitter && (
        <>
          {content.twitter.map((item, i) => (
            <Box
              as={'blockquote'}
              className={'twitter-tweet'}
              data-lang={'ja'}
              key={item + i}
            >
              <Box as={'a'} href={`${item}?ref_src=twsrc%5Etfw`} />
            </Box>
          ))}
        </>
      )}
    </>
  );

  return (
    <>
      {content && (
        <Box as={'section'}>
          <OshiName />
          <OshiLinks />
          <OshiYoutube />
          <OshiTwitter />
        </Box>
      )}
    </>
  );
};

export default Oshi;
