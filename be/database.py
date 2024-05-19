
# from sqlalchemy import create_engine # 동기 방식
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession # 비동기 방식

from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

# DATABASE_URL = "mysql+pymysql://root:scs45407**@db:3306/mydb" # 동기 방식
# DATABASE_URL = "mysql+aiomysql://root:Sc425407**@localhost:3306/mydb" # 로컬 비동기 방식
DATABASE_URL = "mysql+aiomysql://hyunsaja:Sc425407**@db:3306/mydb" # 도커 비동기 방식

# engine = create_engine(DATABASE_URL) # 동기 방식
engine = create_async_engine(DATABASE_URL, echo=True) # 비동기 방식

# SessionLocal = sessionmaker(
#     autocommit=False, 
#     autoflush=False, 
#     bind=engine) # 동기 방식
AsyncSessionLocal = sessionmaker(
    autocommit=False, 
    autoflush=False, 
    bind=engine,
    class_=AsyncSession) # 비동기 방식

Base = declarative_base()