# Lost Catch!

![System Architecture Diagram](https://private-user-images.githubusercontent.com/33625132/288713600-31ccb5ee-15a3-483a-8a68-b346fd019d4b.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTEiLCJleHAiOjE3MDIyNzg4NDAsIm5iZiI6MTcwMjI3ODU0MCwicGF0aCI6Ii8zMzYyNTEzMi8yODg3MTM2MDAtMzFjY2I1ZWUtMTVhMy00ODNhLThhNjgtYjM0NmZkMDE5ZDRiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFJV05KWUFYNENTVkVINTNBJTJGMjAyMzEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjMxMjExVDA3MDkwMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTgyNWQ1N2E3YmU1MWQwNmM2MWNmODEyMDg5YzA4ZjkxODI5OTA2ZDY4NDIwYzZjMGM5MzNkNzJhYzE1NzQyZTcmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.3IibJFF8-PZDoM3XhoIAg7TCtwPdBmtM__lzVh4shqY)

`Cloud Web Services` , Konkuk Univ Course Project

### Requirements

- Use AWS serverless solution
- Use a [공공 데이터 포털](https://www.data.go.kr/) APIs

### Questions

- How to configure a local `replica` when the 3rd-party does not provide a change log such as a `GTID`(Global Transcation ID)?
- Should `lambdas` be independent of each other (no shared modules)?
