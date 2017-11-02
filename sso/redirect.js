const redirect = (domain, redirectPath) => {
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
    function getCookie(cookie,c_name) {
      if (cookie.length > 0) {
          c_start = cookie.indexOf(c_name + "=")
          if (c_start != -1) {
              c_start = c_start + c_name.length + 1
              c_end = cookie.indexOf(";", c_start)
              if (c_end == -1) c_end = cookie.length
              return unescape(cookie.substring(c_start, c_end))
          }
      }
      return ""
  }
    var sessionId = getCookie(document.cookie,'sessionId')
    window.parent.location = '${domain}/sso/index.html?sId='+sessionId+'&r=${domain}${redirectPath}'
    </script>
    <body>
        
    </body>
    </html>
    `
  return html
}
module.exports = redirect
