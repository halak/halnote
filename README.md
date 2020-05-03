# 할락의 노트

저의 [웹사이트](https://halak.github.io/) 생성에 필요한 문서와 설정을 보관하는 저장소입니다.


## 로컬에서 실행하려면...

### 필요한 환경
- [Python 3.7.6](https://www.python.org/)
- [Node.js v12.13.0](https://nodejs.org/)

### on Windows
```cmd
git clone https://github.com/halak/halnote.git

cd .\halnote

REM Configure Node.js
npm install

REM Configure Python
virtualenv venv
.\venv\Scripts\pip.exe install -r requirements.txt
.\venv\Scripts\mkdocs.exe serve
```