export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>React App</title>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="styles.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
