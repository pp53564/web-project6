const express = require('express');
const app = express();

app.use(express.static('public', { extensions: ['html'] }));

app.listen(8081, () => {
   console.log('Server is running on http://localhost:8081');
});
