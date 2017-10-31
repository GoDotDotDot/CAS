const redirect = (redirectUrl) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>易科捷增殖站CAS系统</title>
    </head>
    <script>
    window.parent.location = '${redirectUrl}'
    </script>
    <body>
        
    </body>
    </html>
    `
  return html
}
module.exports = redirect
