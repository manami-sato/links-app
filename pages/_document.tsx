import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
// import { icon } from 'src/libs/text';

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Vidaloka&family=Prompt:wght@300&family=Inter:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/manifest.json" />
          {/* <link rel="apple-touch-icon" href={icon}></link> */}
          <meta name="theme-color" content="#fff" />
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
