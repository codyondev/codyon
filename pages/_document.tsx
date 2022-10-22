import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

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
        <body className="text-black max-w-mobile mx-auto min-h-[100vh] shadow-root text-root bg-main">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
