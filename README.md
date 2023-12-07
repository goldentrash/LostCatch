# Lost Catch!

![System Architecture Diagram](https://private-user-images.githubusercontent.com/33625132/288713600-31ccb5ee-15a3-483a-8a68-b346fd019d4b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDE5NDMxNjksIm5iZiI6MTcwMTk0Mjg2OSwicGF0aCI6Ii8zMzYyNTEzMi8yODg3MTM2MDAtMzFjY2I1ZWUtMTVhMy00ODNhLThhNjgtYjM0NmZkMDE5ZDRiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMDclMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjA3VDA5NTQyOVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTkwZTkzODhmNDM1NjM0MzlkMTQzMzllOWQzOWZlNTRlODMzOWQyYWYyZDFkNDgzZGYyMTQxMjlhMjgyMmYzZjImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.g8dpBSw9CN6grAm6Hbx3B1qjSZM2ucD9_sWFj1bosOE)

`Cloud Web Services` , Konkuk Univ Course Project

### Requirements

- Use AWS serverless solution
- Use a [공공 데이터 포털](https://www.data.go.kr/) APIs

### Questions

- How to configure a local `replica` when the 3rd-party does not provide a change log such as a `GTID`(Global Transcation ID)?
- Should `lambdas` be independent of each other (no shared modules)?
