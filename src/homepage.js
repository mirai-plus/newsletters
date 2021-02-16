const config = require("./config");
const fs = require("fs");

const homepage = posts => `
<!DOCTYPE html>
<html lang="it">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="${config.blogDescription}" />
        <link rel="stylesheet" href="./assets/styles/grotesk.light.min.css">
        <link rel="stylesheet" href="./assets/styles/main.min.css">
        <title>${config.blogName}</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.0.3/tailwind.min.css"
        integrity="sha512-wl80ucxCRpLkfaCnbM88y4AxnutbGk327762eM9E/rRTvY/ZGAHWMZrYUq66VQBYMIYDFpDdJAOGSLyIPHZ2IQ=="
        crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <div class="max-w-screen-lg mx-auto">
            
            <div class="pt-20 px-4">
                <h1 class="text-center text-6xl font-black text-gray-800">mirai</h1>
                <h2 class="text-center text-2xl font-medium pt-5 text-gray-700">Le nostre newsletter</h2>
                <h3 class="text-center text-xl pt-2 font-light max-w-screen-sm mx-auto text-gray-700">Dai un'occhiata alle vecchie newsletter che abbiamo mandato per non perderti
                    nemmeno una notizia</h3>
            </div>
            <div class="lista flex flex-row">
                ${posts
                  .map(
                    post => `<div class="post">
                    <h3><a href="./${post.path}">${
                      post.attributes.title
                    }</a></h3>
                        <small>${new Date(
                          parseInt(post.attributes.date)
                        ).toDateString()}</small>
                      <p>${post.attributes.description}</p>
                    </div>`
                  )
                  .join("")}
            </div>
            <footer>
              ${`<p>© ${new Date().getFullYear()} ${
                config.authorName
              }, Find the code on <a href="https://github.com/mirai-plus/newsletter">GitHub</a></p>`}
            </footer>
        </div>
    </body>
</html>
`;

const addHomePage = posts => {
    fs.writeFile(`${config.dev.outdir}/index.html`, homepage(posts), e => {
        if (e) throw e;
        console.log(`index.html was created successfully`);
    });
};

module.exports = addHomePage;