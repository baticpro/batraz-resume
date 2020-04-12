export default (html) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Batraz Dzhioev - React & ReactNative Developer</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    <link rel="stylesheet" href="/main.css">
</head>
<body>
    <div id="app">${html}</div>
    <script src="/client.js"></script>
</body>
</html>
`;
