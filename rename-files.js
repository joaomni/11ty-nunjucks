const fs = require('fs');

const files = fs.readdirSync('public');

files.forEach((file) => {
  if (file !== 'index.html') {
    fs.rename(`public/${file}`, `public/${file}.html`, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File renamed successfully!');
      }
    });
  }
});

