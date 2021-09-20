import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <title>Web Hosting HTML-5 Template</title>
          <meta name="keywords" content="" />
          <meta name="description" content="" />
          <meta name="author" content="" />
          <meta charset="utf-8"/>
          <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    
        <meta name="description" content=""/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="manifest" href="site.webmanifest"/>
		        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico"/>
            <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="assets/css/owl.carousel.min.css"/>
            <link rel="stylesheet" href="assets/css/slicknav.css"/>
            <link rel="stylesheet" href="assets/css/flaticon.css"/>
            <link rel="stylesheet" href="assets/css/animate.min.css"/>
            <link rel="stylesheet" href="assets/css/magnific-popup.css"/>
            <link rel="stylesheet" href="assets/css/fontawesome-all.min.css"/>
            <link rel="stylesheet" href="assets/css/themify-icons.css"/>
            <link rel="stylesheet" href="assets/css/slick.css"/>
            <link rel="stylesheet" href="assets/css/nice-select.css"/>
            <link rel="stylesheet" href="assets/css/style.css"/>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="./assets/js/vendor/modernizr-3.5.0.min.js"></script>
		      <script src="./assets/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="./assets/js/popper.min.js"></script>
          <script src="./assets/js/bootstrap.min.js"></script>
          <script src="./assets/js/jquery.slicknav.min.js"></script>

        <script src="./assets/js/owl.carousel.min.js"></script>
        <script src="./assets/js/slick.min.js"></script>

        <script src="./assets/js/wow.min.js"></script>
		<script src="./assets/js/animated.headline.js"></script>
        <script src="./assets/js/jquery.magnific-popup.js"></script>

        <script src="./assets/js/jquery.nice-select.min.js"></script>
		<script src="./assets/js/jquery.sticky.js"></script>

        <script src="./assets/js/contact.js"></script>
        <script src="./assets/js/jquery.form.js"></script>
        <script src="./assets/js/jquery.validate.min.js"></script>
        <script src="./assets/js/mail-script.js"></script>
        <script src="./assets/js/jquery.ajaxchimp.min.js"></script>
	
        <script src="./assets/js/plugins.js"></script>
        <script src="./assets/js/main.js"></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
