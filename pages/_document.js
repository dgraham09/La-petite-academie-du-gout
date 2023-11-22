import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Caveat&family=Dela+Gothic+One&family=La+Belle+Aurore&family=Montserrat:wght@500;700;800&family=Roboto&family=Sacramento&family=Titillium+Web:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
