from pydantic import BaseModel
from typing import Optional

# 회원가입시 데이터 검증
class UserCreate(BaseModel):
    username: str
    email: str
    password: str # 해시전 패스워드를 받습니다.
    

# 회원로그인시 데이터 검증
class UserLogin(BaseModel):
    username: str
    password: str # 해시전 패스워드를 받습니다.
    
    
class MemoCreate(BaseModel):
    title: str
    content: str
    
class MemoUpdate(BaseModel):
    title: Optional[str] = None
    content: Optional[str] = None

'''
[[회사와 유저에대한 정보를 중첩된 모델로 만듦]]
    TODO
[[주요 필드 옵션]]
    1. default : 필드의 기본값 설정
    2. alias : 클라이언트 데이터 전송시, JSON 필드의 이름을 Python 변수와 다르게 지정
                서버측에서는 변수값 그대로 받음(클라이언트 측에서 전송시만 해당)
    3. title : 스키마에서 볼 수 있는 필드명
    4. description : 필드에 대한 설명
    5. min_length : max_length : 문자열 길이 제한
    6. gt, lt : 숫자 필드의 값 제한
    예) 
    name: str = Field(..., title="Item Name", alias="item_tags", min_length=2, max_length=50)
    description: str = Field(None, description="The description of the item")
'''