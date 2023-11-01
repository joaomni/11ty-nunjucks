const fs = require('fs');
const path = require('path');
const minify = require('html-minifier').minify;

// Pasta onde estão os arquivos HTML que você deseja compactar (pasta "public").
const publicFolder = path.join(__dirname, 'public');

// Configurações para o html-minifier.
const minifyOptions = {
  collapseWhitespace: true,
  removeComments: true,
};

// Função para compactar um arquivo HTML.
const minifyHTMLFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf8');
  const minifiedContent = minify(content, minifyOptions);
  fs.writeFileSync(filePath, minifiedContent, 'utf8');
};

// Função para compactar todos os arquivos HTML na pasta "public".
const minifyHTMLFilesInFolder = (folderPath) => {
  fs.readdirSync(folderPath).forEach((file) => {
    const filePath = path.join(folderPath, file);
    if (fs.statSync(filePath).isFile() && filePath.endsWith('.html')) {
      minifyHTMLFile(filePath);
    }
  });
};

// Chama a função para compactar os arquivos HTML na pasta "public".
minifyHTMLFilesInFolder(publicFolder);
