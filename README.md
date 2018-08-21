# Statkeeper

###Setup

- Running `rake start` from root directory will start the Rails API server on port 3000 and the React server on port 8080
- In order to seed, run `rake seed:populate_prompted` to get a prompt that decides the count for each model. `rake seed:populate_generic` will ask for 1 number to share across all models
