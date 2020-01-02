# Single env
```
node single_env/index.js // Expected Output: duckimannnnnnnnnnnnnnnnnnnnnnn (Due to the "TEST_ENV" in file .env)
```

# Multiple env
```
node multiple_env/index.js // Expected Output: Object, but have to have a object called "DUCKI_TEST" in file .env
node multiple_env/index.js ducki // Expected Output: Object, but have to have a object called "DUCKI" .env.ducki
```