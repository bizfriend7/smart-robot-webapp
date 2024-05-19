from fastapi import FastAPI, Request
from starlette.middleware.sessions import SessionMiddleware
from fastapi.templating import Jinja2Templates
from contextlib import asynccontextmanager
from database import Base, engine
from controllers import router

@asynccontextmanager # 리소스의 할당과 해제를 자동으로 해주는 데코레이터
async def app_lifespan(app: FastAPI):
    # 애플리케이션 시작 시 실행될 로직
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all) # 테이블이 없으면 자동 생성
    yield
    # 애플리케이션 종료 시 실행될 로직 (필요한 경우)

# FastAPI 애플리케이션을 초기화합
# app = FastAPI(lifespan=app_lifespan, docs_url=None, redoc_url=None)
app = FastAPI(lifespan=app_lifespan)

app.add_middleware(SessionMiddleware, secret_key="smart-robot-key")

# 라우트 목록 추가 영역 ===>>
app.include_router(router)
templates = Jinja2Templates(directory="templates")

@app.get('/')
async def read_root(request: Request):
    return templates.TemplateResponse('index.html', {"request": request})

@app.get("/about")
async def about():
    return {"message": "이곳은 스마트로봇연구소(주)의 생산관리시스템 사이트 입니다."}

    