const fs = require('fs');

const files = fs.readdirSync('public');

files.forEach((file) => {
  const contentWithoutComments = fs.readFileSync(`public/${file}`, 'utf-8');

  // Remover espaços em branco desnecessários
  const contentWithoutWhitespace = contentWithoutComments.replace(/\s+/g, ' ');

  // Remover linhas em branco
  const contentWithoutEmptyLines = contentWithoutWhitespace.replace(/\n\s*\n/g, '\n');

  // Compactar URLs
  const contentWithCompactedURLs = contentWithoutEmptyLines.replace(/(https?:\/\/[^\s]+)/g, (url) => {
    const minifiedURL = url.replace(/\s/g, '-');
    return minifiedURL;
  });

  // Escrever o conteúdo compactado no arquivo original
  fs.writeFileSync(`public/${file}`, contentWithCompactedURLs);
});

