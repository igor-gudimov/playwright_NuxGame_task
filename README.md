# playwright_NuxGame_task

This is a test automation project that uses Playwright framework, Typescript and Docker to test "change interface language" functionality of https://en.wikipedia.org website on chromium and docker image. 

### Test Case Scenario
1. Open [Wikipedia](https://en.wikipedia.org) website.
2. Go to [Login page](https://en.wikipedia.org/w/index.php?title=Special:UserLogin) and login with valid credentials 
(if you don't have an account go to [Create account page](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount) and create one using new Username and Password).
3. Wait for [Main page](https://en.wikipedia.org/wiki/Main_Page) to open, and click on profile icon in upper-right corner,
chose 'Preferences' option and click on it.
4. Wait for [Preferences page](https://en.wikipedia.org/wiki/Special:Preferences) to open, find 'select language' field in 
'Internationalisation' setting, choose any language different from already chosen one (like English or Ukrainian), 
and click on 'Save' button at the bottom of page.
**Expected result**
Check that interface language on page changed from previous on to the new chosen language, and open [Main page](https://en.wikipedia.org/wiki/Main_Page) to check the interface language change there.

### Instruction on how to install dependencies and run this test script
1. **Git/Node.JS/Docker** 
First, download [Git](https://git-scm.com/downloads) to clone this repo to your local machine.
Then download [Node.JS](https://nodejs.org/en) for running test automation and installing devDependencies.
Finally download [Docker](https://www.docker.com/) desktop to run test scripts in docker containers.
2. **Clone the Repository** 
   ```
   git clone https://github.com/igor-gudimov/playwright_NuxGame_task.git
   ```
3. **Credentials in .env file**
To execute test script successfully you will need to create .env file with this two fields and save it in project root:
   ```
   WIKI_USERNAME=''
   WIKI_PASSWORD=''
   ```
Use username and password that you created after registration on [Create account page](https://en.wikipedia.org/w/index.php?title=Special:CreateAccount)
4. **Install Dependencies**
Navigate to project root directory in command prompt and install the necessary dependencies one by one:
   ```
   npm install
   npx playwright install --with-deps chromium
   ```
5. **Run test script on local machine**
To run script locally, navigate to project root directory in command prompt and run this command:
   ```
   npm run test-all
   ```
To see test results of last test run in HTML format - use this command:
   ```
   npx playwright show-report
   ```
If you want to run script with UI - use this command:
   ```
   npx playwright test --ui
   ```
6. **Run test script in Docker container**
First start Docker desktop on your computer, navigate to project root directory in command prompt and run 'start' command for this .bat file:
   ```
   start /b /wait built_and_run_docker.bat
   ```
or if you using Linux, open terminal and run:
   ```
   start built_and_run_docker.bat
   ```
After that to see test results of last test run in HTML format - use this command:
   ```
   npx playwright show-report
   ```
If you for some reason can't execute scripts using .bat file, run these commands one by one:
   ```
   docker build -t playwright_nuxgame_task .
   docker run --name test-container -v ./playwright-report:/app/playwright-report playwright_nuxgame_task
   docker cp test-container:/app/playwright-report/index.html ./playwright-report
   docker rm test-container
   ```
   
   **For any additional questions, follow and write me on LinkedIn https://www.linkedin.com/in/ihor-hudimov-87563a146/**