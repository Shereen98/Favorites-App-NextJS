# Favorites-App-NextJS


## Getting Started

To get started, just clone the repository and run `npm install && npm run dev` in both Client and Server:

    git clone https://github.com:Shereen98/Favorites-App-NextJS.git
    
### Server
   
    cd Server
    npm install
    npm run dev

### Client
   
    cd Client
    npm install
    npm run dev
 
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
    
## Configuring

The current server is running on [http://localhost:3080](http://localhost:3080). If you want to change the server port go to `Client/server.js` and change the configured port as below,

    ```
        const apiPaths = {
          "/api": {
            target: "http://localhost:3080", // add your server port here
            pathRewrite: {
              "^/api": "/api",
            },
            changeOrigin: true,
          },
        };
        
    ```
