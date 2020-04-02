# build 
docker build -t node-containers-envs .  

# run 
docker run -p 3000:3000 -d node-containers-envs
