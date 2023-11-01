#menggunakan OS node pada saat docker dijalankan
FROM node
#tentuin folder apa yang akan di set di docker
WORKDIR /filehandling/src/app

#copy package.json ke folder docker
COPY package*.json ./

#copy seluruh folder ke dalam docker
COPY . .

EXPOSE 8000

#jalankan perintah node app.js
CMD ["node", "app.js"]