# URL Summary API

This API takes a website URL as input and uses the OpenAI API to generate a summary of the URL's contents.

## Getting Started

### Prerequisites

- Node.js
- npm
- OpenAI API Key
- MongoDB Database

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd url-summary-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Add the following environment variables to your system:
   ```plaintext
   PORT=3000
   MONGODB_URI=your_mongodb_uri
   OPENAI_API_KEY=your_openai_api_key
   ```

### Running the Server

Start the server by running:
```bash
node index.js
```

The server will be running on the port specified in the environment variables (default is 3000).

### API Endpoints

#### Fetch URL Content and Generate Summary

- **URL:** `/fetch-url-content`
- **Method:** `POST`
- **Description:** Accepts a website URL as input, fetches the content, extracts the main text, and generates a summary using the OpenAI API.
- **Request Body:**
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "summary": "This is a summary of the content from the provided URL."
  }
  ```

### Example Usage

#### Using `curl`

```bash
curl -X POST http://localhost:3000/fetch-url-content \
-H "Content-Type: application/json" \
-d '{"url": "https://example.com"}'
```

#### Using Postman

1. Open Postman and create a new request.
2. Set the HTTP method to `POST`.
3. Set the URL to `http://localhost:3000/fetch-url-content`.
4. In the `Body` tab, select `raw` and set the content type to `application/json`.
5. Paste the following JSON data in the body:
   ```json
   {
     "url": "https://example.com"
   }
   ```
6. Send the request and you will receive a summary of the content from the provided URL.

## License

This project is licensed under the MIT License.
