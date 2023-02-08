import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Center, Flex, Text } from '@chakra-ui/react';
import { socialLinks } from 'src/libs/socialLinks';
import { decorationArray } from 'src/libs/decoration';
import { colorArray } from 'src/libs/color';
import other from 'src/assets/img/link-icon-other';
import OriginalSpacer from 'src/components/OriginalSpacer';
// import { log } from 'console';

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
  // twitter: string[] | undefined;
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
      {
        title: 'タイトル',
        url: 'https://www.youtube.com/embed/VuLaS3dg9RI',
        description: '説明',
      },
    ],
    // twitter: [
    //   '<blockquote class="twitter-tweet"><p lang="ja" dir="ltr">••┈┈┈┈┈┈┈┈┈┈••<br>　　　<a href="https://twitter.com/hashtag/%E4%BA%95%E4%B8%8A%E8%8A%B3%E9%9B%84?src=hash&amp;ref_src=twsrc%5Etfw">#井上芳雄</a><br>　　03.22 Release<br>New Album『<a href="https://twitter.com/hashtag/Greenville?src=hash&amp;ref_src=twsrc%5Etfw">#Greenville</a>』<a href="https://t.co/lYvYfY0d0i">https://t.co/lYvYfY0d0i</a><br>••┈┈┈┈┈┈┈┈┈┈••<br><br>本日は...<br>レコーディングした音源を<br>真剣に聴き直す芳雄さん　の<br>写真をお届け致します🫡<br><br>🚨FC先行予約は2/10が締切🚨<a href="https://t.co/U2qTsKjuhN">https://t.co/U2qTsKjuhN</a> <a href="https://t.co/lvQVWUASWZ">pic.twitter.com/lvQVWUASWZ</a></p>&mdash; 井上芳雄 Columbia Official (@inoueyoshio_co) <a href="https://twitter.com/inoueyoshio_co/status/1623259878222614528?ref_src=twsrc%5Etfw">February 8, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    //   // 'https://twitter.com/inoueyoshio_co/status/1623259878222614528?s=20&t=S_2iFAQIyxZM3ZveVZSzaQ',
    // ],
  },
];

// fontawesomeから引っ張ってきて好きなのを選べるようにする

const Oshi: FC<Props> = ({ index }) => {
  const [content, setContent] = useState<arrayType>();
  const [isTabOpen, setIsTabOpen] = useState<boolean>(false);

  useEffect(() => {
    setContent(array[index]);
  }, []);

  const OshiName = () => (
    <>
      {content && (
        <Center gap={'8px'} w={'fit-content'}>
          <Center
            // w={'56px'}
            // h={'56px'}
            // borderRadius={'9999px'}
            fontSize={'3rem'}
            // fontSize={'2.5rem'}
            // bg={colorArray[content.color]}
          >
            {content.emoji}
          </Center>
          <Box>
            {content.position && (
              <>
                <Text color={'gray'} fontSize={'1.3rem'}>
                  {content.position}
                </Text>
                <OriginalSpacer size={'4px'} />
              </>
            )}
            <Box
              as={'h2'}
              fontWeight={'bold'}
              fontSize={'1.8rem'}
              sx={{
                ...(content.decoration && {
                  '&::before': {
                    content: `'${decorationArray[content.decoration]} '`,
                  },
                  '&::after': {
                    content: `' ${decorationArray[content.decoration]}'`,
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
        <Flex flexDirection={'column'} gap={'12px'}>
          {content.youtube.map((item, i) => (
            <Box key={i + item.url}>
              {item.title && (
                <Text fontWeight={'bold'} fontSize={'1.6rem'}>
                  {item.title}
                </Text>
              )}
              <OriginalSpacer size={'8px'} />
              <Box
                w={'100%'}
                pt={'calc(100% / 16 * 9)'}
                pos={'relative'}
                borderWidth={'4px'}
                borderStyle={'solid'}
                borderColor={colorArray[content.color]}
                borderRadius={'8px'}
                overflow={'hidden'}
              >
                <Box
                  as={'iframe'}
                  w={'100%'}
                  h={'100%'}
                  pos={'absolute'}
                  inset={'0 0 auto auto'}
                  src={'https://www.youtube.com/embed/VuLaS3dg9RI'}
                  title={'YouTube video player'}
                  frameBorder={0}
                  allow={
                    'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  }
                  allowFullScreen
                />
              </Box>
              {item.description && (
                <>
                  <OriginalSpacer size={'8px'} />
                  <Text color={'gray'} fontSize={'1.3rem'}>
                    {item.description}
                  </Text>
                </>
              )}
            </Box>
          ))}
        </Flex>
      )}
    </>
  );
  // const OshiTwitter = () => (
  //   <>
  //     {content && content.twitter && (
  //       <>
  //         {content.twitter.map((item, i) => (
  //           // <Box
  //           //   as={'blockquote'}
  //           //   className={'twitter-tweet'}
  //           //   data-lang={'ja'}
  //           //   key={item + i}
  //           // >
  //           //   <Box as={'a'} href={`${item}?ref_src=twsrc%5Etfw`} />
  //           // </Box>
  //           <Box
  //             key={item + i}
  //             dangerouslySetInnerHTML={{
  //               __html: item.split(' <script async src="')[0],
  //             }}
  //           />
  //         ))}
  //       </>
  //     )}
  //   </>
  // );

  const tabOpenFunc = () => {
    setIsTabOpen(!isTabOpen);
  };

  return (
    <>
      {content && (
        <Box as={'section'}>
          <Flex justifyContent={'space-between'} alignItems={'center'}>
            <OshiName />
            <Center
              as="button"
              onClick={() => tabOpenFunc()}
              w={'24px'}
              h={'24px'}
              pos={'relative'}
              bg={'tomato'}
              sx={{
                '&::before': {
                  content: '""',
                  display: 'block',
                  width: '12px',
                  height: '3px',
                  background: 'gray',
                  position: 'absolute',
                  inset: 'auto 9.5px auto auto',
                  transform: 'rotateZ(45deg)',
                  borderRadius: '10px',
                },
                '&::after': {
                  content: '""',
                  display: 'block',
                  width: '12px',
                  height: '3px',
                  background: 'gray',
                  position: 'absolute',
                  inset: 'auto 3px auto auto',
                  transform: 'rotateZ(-45deg)',
                  borderRadius: '10px',
                },
              }}
            />
          </Flex>
          <Box
            overflow={'hidden'}
            transition={'transform 0.2s, opacity 0.2s'}
            transformOrigin={'top'}
            sx={{
              ...(isTabOpen
                ? {
                    // height: '100%',
                    transform: 'scaleY(1)',
                    opacity: 1,
                  }
                : {
                    // height: 0,
                    transform: 'scaleY(0)',
                    opacity: 0,
                  }),
            }}
          >
            <OriginalSpacer size={'16px'} />
            <OshiLinks />
            <OriginalSpacer size={'16px'} />
            <OshiYoutube />
          </Box>
          {/* <OshiTwitter /> */}
        </Box>
      )}
    </>
  );
};

export default Oshi;
