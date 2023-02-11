import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import React from 'react';

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head />
        <meta name="color-scheme" content="light" />
        <meta name="supported-color-schemes" content="light" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Purple+Purse&family=Quicksand:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap"
          rel="stylesheet"
        />
        <script
          id="kakao-sdk"
          async
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.1.0/kakao.js"
          integrity="sha384-OfbOqPoV2XcfZpqrLgqYCNSNBJW4JU/lLrtKk0cpkWvCrDRotHaQ9SSMGeP7u8NB"
          crossOrigin="anonymous"
        />
        <body className="text-black text-root font-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
