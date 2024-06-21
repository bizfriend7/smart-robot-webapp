document.addEventListener('DOMContentLoaded', function() {
    const drawingData = [
        { "No": 1, "호선": "1", "POR": "P001", "SEQ": "S001", "수량": 5, "등록일자": "2024-01-01" },
        { "No": 2, "호선": "1", "POR": "P002", "SEQ": "S002", "수량": 3, "등록일자": "2024-01-02" },
        { "No": 3, "호선": "2", "POR": "P001", "SEQ": "S001", "수량": 4, "등록일자": "2024-01-03" },
        { "No": 4, "호선": "2", "POR": "P003", "SEQ": "S003", "수량": 2, "등록일자": "2024-01-04" }
    ];

    const partData = [
        { "NO": 1, "Part ID": "EA001", "자재종류": "EA 100*100*10T", "재질": "SS400", "수량": 1, "가공길이": 2000, "전체길이": 2000, "중량": 29.80, "가공수": 4, "호선": "1", "POR": "P001", "SEQ": "S001" },
        { "NO": 2, "Part ID": "EA002", "자재종류": "EA 100*100*10T", "재질": "SS400", "수량": 1, "가공길이": 4969, "전체길이": 5012, "중량": 74.68, "가공수": 22, "호선": "1", "POR": "P002", "SEQ": "S002" },
        { "NO": 3, "Part ID": "EA003", "자재종류": "EA 50*50*5T", "재질": "SS400", "수량": 1, "가공길이": 2000, "전체길이": 2000, "중량": 29.80, "가공수": 9, "호선": "2", "POR": "P001", "SEQ": "S001" },
        { "NO": 4, "Part ID": "EA004", "자재종류": "EA 50*50*5T", "재질": "SS400", "수량": 1, "가공길이": 1000, "전체길이": 1000, "중량": 14.90, "가공수": 4, "호선": "2", "POR": "P003", "SEQ": "S003" }
    ];

    const macroData = [
        { "partID": "EA001", "NO": 1, "가공위치": "0", "매크로": "M001", "파라미터": [40, 10, 10, 20, 0, 0], "저장위치": "0" },
        { "partID": "EA002", "NO": 2, "가공위치": "2174", "매크로": "M002", "파라미터": [40, 10, 10, 20, 0, 0], "저장위치": "2174" },
        { "partID": "EA003", "NO": 3, "가공위치": "2230", "매크로": "M003", "파라미터": [40, 10, 10, 20, 0, 0], "저장위치": "2230" },
        { "partID": "EA004", "NO": 4, "가공위치": "1300", "매크로": "M004", "파라미터": [40, 10, 10, 20, 0, 0], "저장위치": "1300" }
    ];

    // 메뉴 드롭다운 관리
    const menu = document.querySelector('.menu');
    if (menu) {
        menu.addEventListener('mouseenter', function() {
            const dropdown = document.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'flex'; // 드롭다운 메뉴 표시
            }
        });

        menu.addEventListener('mouseleave', function() {
            const dropdown = document.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none'; // 드롭다운 메뉴 숨기기
            }
        });
    }

    // 사이드바와 콘텐츠 영역 조절
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar-left');
    const content = document.getElementById('content');
    const contentContainer = document.getElementById('content-container');

    if (toggleBtn && sidebar && content && contentContainer) {
        document.body.addEventListener('mousemove', function(event) {
            if (event.clientX <= 10) {
                toggleBtn.style.left = '0'; // 토글 버튼 표시
            } else {
                toggleBtn.style.left = '-50px'; // 토글 버튼 숨기기
            }
        });

        toggleBtn.addEventListener('click', function () {
            sidebar.classList.toggle('open');
            if (sidebar.classList.contains('open')) {
                document.body.style.overflow = 'hidden'; // 페이지 스크롤 비활성화
            } else {
                document.body.style.overflow = ''; // 페이지 스크롤 활성화
            }
            content.classList.toggle('shifted');
            contentContainer.classList.toggle('shifted');
        });
    }

    // 사이드바 버튼 클릭 이벤트
    const sidebarButton = document.getElementById('sidebarButton');
    if (sidebarButton) {
        sidebarButton.addEventListener('click', function () {
            const lineNumber = document.getElementById('sidebarInput1').value;
            const por = document.getElementById('sidebarInput2').value;
            const seq = document.getElementById('sidebarInput3').value;

            let filteredDrawingData = drawingData.filter(row => row.호선 === lineNumber);
            if (por) {
                filteredDrawingData = filteredDrawingData.filter(row => row.POR === por);
            }
            if (seq) {
                filteredDrawingData = filteredDrawingData.filter(row => row.SEQ === seq);
            }

            if (filteredDrawingData.length > 0) {
                updateTableContent('content1', filteredDrawingData, ["No", "호선", "POR", "SEQ", "수량", "등록일자"], '도면정보 (Drawing Information)');
                updateDetailsSpan(`${lineNumber}~${por}~${seq}`);
            } else {
                document.getElementById('content1Body').innerHTML = '<tr><td colspan="6">데이터 없음</td></tr>';
                updateDetailsSpan('');
            }
        });
    }

    // 테이블 내용 업데이트 함수
    function updateTableContent(contentId, data, headers, title) {
        const contentDiv = document.getElementById(contentId);
        
        // Update table header
        const thead = contentDiv.querySelector('thead');
        if (thead) {
            thead.innerHTML = '';
            const trHead = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
        }

        // Update table body
        const tbody = contentDiv.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = ''; // 기존 내용 삭제

            data.forEach(rowData => {
                const tr = document.createElement('tr');
                tr.classList.add('clickable');
                tr.addEventListener('click', function() {
                    const filteredPartData = partData.filter(part => part.호선 === rowData.호선 && part.POR === rowData.POR && part.SEQ === rowData.SEQ);
                    updateTableContent('content1', filteredPartData, ["NO", "Part ID", "자재종류", "재질", "수량", "가공길이", "전체길이", "중량", "가공수", "호선", "POR", "SEQ"], '부재정보 (Part Information)');
                    updateDetailsSpan(`${rowData.호선}~${rowData.POR}~${rowData.SEQ}`);
                });
                headers.forEach(header => {
                    const td = document.createElement('td');
                    td.textContent = rowData[header];
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });

            if (contentId === 'content1') {
                tbody.querySelectorAll('tr').forEach(row => {
                    row.addEventListener('click', function() {
                        const partID = this.cells[1].textContent; // Part ID
                        const 호선 = this.cells[9].textContent; // 호선
                        const POR = this.cells[10].textContent; // POR
                        const SEQ = this.cells[11].textContent; // SEQ
                        updateDetailsSpan(`${호선}~${POR}~${SEQ}~${partID}`);
                        const filteredMacroData = macroData.filter(macro => macro.partID === partID);
                        updatePartDetails('content2', filteredMacroData);
                    });
                });
            }
        }

        // Update title
        const titleElement = contentDiv.querySelector('.title-text');
        if (titleElement) {
            titleElement.textContent = title;
        }
    }

    function updateDetailsSpan(details) {
        const detailsSpan = document.getElementById('detailsSpan');
        if (detailsSpan) {
            detailsSpan.innerHTML = details.split('~').map((text, index) => {
                return `<span class="clickable-detail" data-index="${index}">${text}</span>`;
            }).join('~');
        }
    }

    // 로그인/로그아웃 버튼 토글
    const loginButton = document.getElementById('loginButton');
    const logoutButton = document.getElementById('logoutButton');

    loginButton.addEventListener('click', function() {
        loginButton.style.display = 'none';
        logoutButton.style.display = 'block';
    });

    logoutButton.addEventListener('click', function() {
        logoutButton.style.display = 'none';
        loginButton.style.display = 'block';
    });

    // 부재정보 클릭 시 매크로 정보 표시
    function updatePartDetails(contentId, data) {
        const headers = ["NO", "가공위치", "매크로", "파라미터", "저장위치"];
        const contentDiv = document.getElementById(contentId);
        
        // Update table header
        const thead = contentDiv.querySelector('thead');
        if (thead) {
            thead.innerHTML = '';
            const trHead = document.createElement('tr');
            headers.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header;
                trHead.appendChild(th);
            });
            thead.appendChild(trHead);
        }

        // Update table body
        const tbody = contentDiv.querySelector('tbody');
        if (tbody) {
            tbody.innerHTML = ''; // 기존 내용 삭제

            data.forEach(rowData => {
                const tr = document.createElement('tr');
                headers.forEach(header => {
                    const td = document.createElement('td');
                    if (header === "파라미터") {
                        td.textContent = rowData[header].join(', ');
                    } else {
                        td.textContent = rowData[header];
                    }
                    tr.appendChild(td);
                });
                tbody.appendChild(tr);
            });
        }
    }

    // details-span 클릭 이벤트 추가
    const detailsSpan = document.getElementById('detailsSpan');
    if (detailsSpan) {
        detailsSpan.addEventListener('click', function(event) {
            const target = event.target;
            if (target.classList.contains('clickable-detail')) {
                const index = target.getAttribute('data-index');
                const detailsText = this.textContent;
                const [lineNumber, por, seq] = detailsText.split('~');

                if (index == "0") {
                    searchAndHighlight(lineNumber, '', '', target);
                } else if (index == "1") {
                    searchAndHighlight(lineNumber, por, '', target);
                } else if (index == "2") {
                    searchAndHighlight(lineNumber, por, seq, target);
                }
            }
        });
    }

    function searchAndHighlight(lineNumber, por, seq, element) {
        document.getElementById('sidebarInput1').value = lineNumber || '';
        document.getElementById('sidebarInput2').value = por || '';
        document.getElementById('sidebarInput3').value = seq || '';

        console.log('Searching for:', { lineNumber, por, seq }); // 콘솔 로그 추가
        sidebarButton.click(); // 사이드바 버튼 클릭 이벤트 트리거

        // 매크로 테이블 내용 제거
        clearMacroTable();

        // 클릭된 요소를 잠시 어둡게 표시
        element.style.backgroundColor = '#ccc';
        setTimeout(() => {
            element.style.backgroundColor = '';
        }, 200);
    }

    function clearMacroTable() {
        const content2Body = document.getElementById('content2Body');
        if (content2Body) {
            content2Body.innerHTML = ''; // 매크로 테이블 내용 제거
        }
    }
});
