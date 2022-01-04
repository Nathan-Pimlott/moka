# Moka

This project can be used to mock server requests for front end apps. Follow `Adding new endpoints` to add endpoints for new projects.

### Installation

1. Install the dependencies.

```shell
npm install
```

### Running locally

1. Follow `Installation` to install dependencies

2. Start the dev server

```shell
npm run dev
```

### Adding new endpoints

1. Add a new file in `/src/mocks`.

2. The file name format is below

```shell
001.test.GET.200.json

(001)  Importance of file. Used if there is 2 files with the same name and one is more important than the other.

(test) The name of the stub.

(GET)  The request type.

(200)  The response code of the request.
```

3. Define the request in the file.

You can use the object below to build your file.

```json
{
    "url": "/hello/:world",
    "method": "GET",
    "status": 200,
    "response": {
        "hello": "world"
    }
}
```
