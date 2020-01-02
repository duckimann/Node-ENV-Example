First thing first: Install some packages
```
npm install
```

Please don't copy anything after "//" or the command will not work.

# Single env
```
node single_env/index.js // Expected Output: duckimannnnnnnnnnnnnnnnnnnnnnn (Due to the "TEST_ENV" in file .env)
```

# Multiple env
```
cd multiple_env
node index.js // Expected Output: Object, but have to have a object called "DUCKI_TEST" in file .env
node index.js ducki // Expected Output: Object, but have to have a object called "DUCKI" .env.ducki
```

Reason we have to cd into folder first: The "custom-env" will get .env file from the directory that you run the command.

Directory tree (for example): You run command from "/" then it will only search for .env file in "/".
/
├───multiple_env
├───node_modules
│   ├───custom-env
│   │   └───lib
│   ├───dotenv
│   │   ├───lib
│   │   └───types
│   └───dotenv-expand
│       └───lib
└───single_env