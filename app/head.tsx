
export default function Head() {
  return (
    <>
      <title>Portfolio - Développeur Full Stack</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content="Portfolio professionnel d'un développeur Full Stack spécialisé en Flutter et ASP.NET" />
      <meta name="keywords" content="développeur, flutter, asp.net, portfolio, web, mobile" />
      <meta name="author" content="Votre Nom" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content="Portfolio - Développeur Full Stack" />
      <meta property="og:description" content="Découvrez mon portfolio et mes projets en développement" />
      <meta property="og:type" content="website" />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      
      {/* Fonts préchargées */}
      <link rel="preload" href="https://fonts.googleapis.com/css2?family=Pacifico:wght@400&display=swap" as="style" />
      <link rel="preload" href="https://cdn.jsdelivr.net/npm/remixicon@4.0.0/fonts/remixicon.css" as="style" />
      
      {/* Styles critiques */}
      <style dangerouslySetInnerHTML={{
        __html: `
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          
          html {
            scroll-behavior: smooth;
          }
          
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #0f172a;
            color: #ffffff;
            overflow-x: hidden;
          }
          
          .loading-spinner {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 9999;
          }
        `
      }} />
    </>
  )
}
