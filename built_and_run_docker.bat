docker build -t playwright_nuxgame_task .
docker run --name test-container -v ./playwright-report:/app/playwright-report playwright_nuxgame_task
docker cp test-container:/app/playwright-report/index.html ./playwright-report
docker rm test-container