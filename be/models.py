# from database import Base
from database import Base, engine
from sqlalchemy import MetaData, Table, Column, ForeignKey
from sqlalchemy import Boolean, Integer, Float, CHAR, String, JSON
from datetime import datetime

class User(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(100), unique=True, index=True)
    email = Column(String(200))
    hashed_password = Column(String(512))
    
class Memo(Base):
    __tablename__ = 'memo'
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey('users.id'))
    title = Column(String(100))
    content = Column(String(1000))
        

# class Company(Base):
#     __tablename__ = "companys"
#     id = Column(Integer, primary_key=True, index=True)
#     e_mail = Column(String(30), unique=True, nullable=False, comment="회사이메일")
#     business_no = Column(String(20), unique=True, nullable=False, comment="사업자등록번호")
#     orner_name = Column(String(20), unique=True, nullable=False, comment="대표자명")
#     company_name = Column(String(20), unique=True, nullable=False, comment="회사명")
#     telephone = Column(String(20), unique=True, nullable=False, comment="회사연락처")
#     address = Column(String(50), nullable=False, comment="회사주소")
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")
#      # 1:일반, 2:프레미엄, 3:마스터
#     grade = Column(Integer, default=1, comment="기업등급")

# class Machine(Base):
#     __tablename__ = 'machines'
#     id = Column(Integer, primary_key=True, index=True)
#     company_id = Column(Integer, ForeignKey('companys.id'), ondelete='CASCADE')
#     machine_name = Column(String(30), unique=True, nullable=False, comment="장비명")
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")

# # 아래부터 기업에서 사용(CRUD), 위 테이블 사용은 마스터만 가능 ==========================///

# class Member(Base):
#     __tablename__ = 'members'
#     id = Column(Integer, primary_key=True, index=True)
#     company_id = Column(Integer, ForeignKey('companys.id'), ondelete='CASCADE')
#     menber_name = Column(String(30), unique=True, nullable=False, comment="직원이름")
#     hashed_password = Column(String(512))
#     query_cnt = Column(Integer, autoincrement=True, comment="방문회수") # TODO : Cost
#     usage_time = Column(datetime, default=datetime.UTC, comment="사용시간") # TODO : Cost
#     # 맴버 로그인시 is_active=Fasle이면 조회만 가능 TODO: cache 사용하여 관리
#     is_active = Column(Boolean, default=False, comment="활성상태")
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")

# class Workgroup(Base):
#     __tablename__ = 'workgroups'
#     id = Column(Integer, primary_key=True, index=True)
#     company_id = Column(Integer, ForeignKey('companys.id'), index=True, ondelete='CASCADE')
#     workgroupname = Column(String(20), unique=True, nullable=False, comment="PROJECT-POR-SEQ")
#     work_select = Column(Boolean, default=False, comment="작업선택")  # 선텍한 놈만 장비에 내려줌
#     author = Column(CHAR(20), nullable=False, comment=("데이터입력자"))
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")

# class Pcslist(Base):
#     __tablename__ = 'pcslists'
#     id = Column(Integer, primary_key=True, index=True)
#     Workgroup_id = Column(Integer, ForeignKey('workgroups.id'), index=True, ondelete='CASCADE')
#     pcsname = Column(String(20), nullable=False, comment="PCS_NAME")
#     author = Column(CHAR(20), nullable=False, comment=("데이터입력자"))
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")

# class Partlist(Base):
#     __tablename__ = 'partlists'
#     id = Column(Integer, primary_key=True, index=True)
#     pcslist_id = Column(Integer, ForeignKey('pcslists.id'), index=True, ondelete='CASCADE')
#     pcsname = Column(String(20), nullable=False, comment="PCS_NAME")
#     author = Column(CHAR(20), nullable=False, comment=("데이터입력자"))
#     created_at = Column(datetime, default=datetime.UTC, comment="생성타임")

# class Cutlist(Base):
#     __tablename__ = 'cutlists'
#     id = Column(Integer, primary_key=True, index=True)
#     partlist_id = Column(Integer, ForeignKey('partlists.id'), index=True, ondelete='CASCADE')
#     standard = Column(CHAR(20), comment=("자재규격"))
#     texture = Column(CHAR(20), comment=("자재재질"))
#     weight = Column(Float, default=1.0, comment="부재중량")  # 중량(자동계산)
#     length_dwg = Column(Float, default=1.0, comment="도면자재길이")
#     length_cut = Column(Float, default=1.0, comment="가공자재길이")  # cutloss & 연신율 감안하여 계산된 길이
#     work_quantity = Column(Float, default=1.0, comment="가공자재길이")  # 부재수량
#     worked_quantity = Column(Float, default=1.0, comment="가공자재길이") # 작업한수량
#     status = Column(Float, default=1.0, comment="가공완료정보")  
#     part_point = Column(Integer, default=1.0, comment="가공자재길이")  # 가공포인트수(자동계산)
#     cutlist = Column(JSON, nullable=True, comment="가공코드")
#     # # cutlist : [{CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
#     # #           {CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
#     # #           {CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
#     # #           ...]   가공수 만큼 증가됨
#     author = Column(CHAR(20), nullable=False, comment=("데이터입력자"))
#     created_at = Column(datetime, default=datetime.UTC, comment="생성알저")
#     updated_at = Column(datetime, default=datetime.UTC, comment="수정일자")


# ===================================================================================
# 아래 참고 내용
# ===================================================================================

    # 앵글 가공기 테이블 구성 참조(장고환경)
    # id = models.AutoField(primary_key=True)
    # machine_id = models.ForeignKey(Machine, on_delete=models.CASCADE)
    # standard = models.CharField('자재규격', max_length=20)                       # 자재 규격
    # texture = models.CharField('자재재질', max_length=10)                        # 자재 재질
    # view_data = models.CharField('부재번호', unique=True, max_length=50)  # 화면에 뿌려줄 부재번호
    # group_data = models.CharField('그룹번호', max_length=20)
    # ship_no = models.CharField(max_length=10, blank=True, null=True) # 호선
    # por_no = models.CharField(max_length=10, blank=True, null=True)  # 주문번호
    # seq_no = models.CharField(max_length=10, blank=True, null=True)  # 주문세부번호
    # block_no = models.CharField(max_length=10, blank=True, null=True)  # 블록번호
    # pcs_no = models.CharField(max_length=10, blank=True, null=True)  # 피스번호
    # part_no = models.CharField(max_length=10, blank=True, null=True)  # 부재번호
    # weight = models.CharField(max_length=10, blank=True, null=True)  # 중량

    # length_dwg = models.IntegerField()  # 입력 자재길이
    # length_cut = models.IntegerField()  # 실제 가공자재길이(cut loss 감안하여 계산된 길이)

    # created_at = models.DateTimeField(auto_now_add=True)  # 생성일자
    # updated_at = models.DateTimeField('작업일자', auto_now=True)  # 수정일자
    # author = models.ForeignKey(User, null=True, on_delete=models.SET_NULL)  # 데이터 입력자

    # work_quantity = models.IntegerField('전체수량', default=1)  # 부재수량
    # worked_quantity = models.IntegerField('작업수량', default=0)  # 작업한수량
    # work_select = models.BooleanField('작업선택', default=False)  # 작업지시 : 선텍한 놈만 장비에 내려줌
    # status = models.BooleanField('작업유무', default=False)  # 작업 완료 정보

    # part_point = models.IntegerField(blank=True, null=True)  # 가공포인트수(자동계산)

    # cutlist = models.JSONField()
    # # cutlist : [{CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
    # #           {CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
    # #           {CUT:[가공거리, 매크로명, Param1, Param2, Param3, Param4, Param5]},
    # #           ...]   가공수 만큼 증가됨


    # description = models.CharField(max_length=128, blank=True, null=True)


    # JSON 데이터 추가 예제
    # new_user = User(username='john_doe', cut_data={'key': 'value', 'items': [1, 2, 3]})
    # db.add(new_user)
    # db.commit()
