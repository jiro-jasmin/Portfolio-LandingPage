import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" className="scroll-smooth snap-none md:snap-y md:snap-mandatory">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
