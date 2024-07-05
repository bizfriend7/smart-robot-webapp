document.addEventListener('DOMContentLoaded', function() {
    let selectedDrawingInfo = {};
    let filteredPartData = [];
    let selectedPartInfo = {};
    let selectedMacroInfo = null;
    let lastSearchParams = {};

    //localStorage.clear()
    let currentSort = {
        key: '',
        order: 'asc'
    };
    if (!localStorage.getItem('drawingData')) {
        const initialDrawingData = [
                    
        ];
        localStorage.setItem('drawingData', JSON.stringify(initialDrawingData));
    }

    if (!localStorage.getItem('partData')) {
        const initialPartData = [

        ];
        localStorage.setItem('partData', JSON.stringify(initialPartData));
    }

    if (!localStorage.getItem('macroData')) {
        const initialMacroData = [

        ];
        localStorage.setItem('macroData', JSON.stringify(initialMacroData));
    }
    const script = document.createElement('script');
    script.src = 'specList.js';
    script.onload = function() {
        // partFormContainer를 업데이트하는 함수 호출
        updatePartInputForm();
    };
    document.head.appendChild(script);
    // 로컬스토리지에서 데이터 불러오기
    let drawingData = JSON.parse(localStorage.getItem('drawingData'));
    let partData = JSON.parse(localStorage.getItem('partData'));
    let macroData = JSON.parse(localStorage.getItem('macroData'));

    function generateUniqueId(dataArray) {
        return dataArray.length > 0 ? Math.max(...dataArray.map(item => item.id)) + 1 : 1;
    }
    function calculateMacroCount(partID) {
        return macroData.filter(macro => macro.partID === partID).length;
    }

    partData = partData.map(part => {
        const 가공수 = calculateMacroCount(part["Part ID"]);
        return { ...part, 가공수 };
    });

    const toggleButton = document.getElementById('toggle-button');
    const content1 = document.getElementById('content1');
    const content2 = document.getElementById('content2');

    let isCollapsed = false;

    function toggleContent1() {
        if (isCollapsed) {
            content1.style.display = 'block';
            toggleButton.textContent = ''; // 바와 같은 모습으로 유지
        } else {
            content1.style.display = 'none';
            toggleButton.textContent = ''; // 바와 같은 모습으로 유지
        }
        isCollapsed = !isCollapsed;
    }

    toggleButton.addEventListener('click', toggleContent1);

    // 도면정보 테이블의 내용을 클릭할 때 content1을 줄이는 기능
    function collapseContent1OnMobile() {
        if (window.matchMedia("(max-width: 768px)").matches) {
            content1.style.display = 'none';
            isCollapsed = true;
        }
    }

    const content1Body = document.getElementById('content1Body');
    if (content1Body) {
        content1Body.addEventListener('click', function (event) {
            if (event.target && event.target.nodeName === "TD") {
                collapseContent1OnMobile();
            }
        });
    }
    
    document.getElementById('MacroInfoButton').addEventListener('click', function() {
        // 텍스트박스 그룹을 숨기고 이미지 컨테이너와 뒤로가기 버튼을 보여줌
        document.querySelector('header').classList.add('hidden');
        document.querySelector('.info-container').classList.add('hidden');
        document.querySelector('.macroinfo-container').classList.remove('hidden');
        document.getElementById('MacroInfoBackButton').classList.remove('hidden');
    });
    
    document.getElementById('MacroInfoBackButton').addEventListener('click', function() {
        // 이미지 컨테이너와 뒤로가기 버튼을 숨기고 텍스트박스 그룹을 보여줌
        document.querySelector('header').classList.remove('hidden');
        document.querySelector('.macroinfo-container').classList.add('hidden');
        document.querySelector('.info-container').classList.remove('hidden');
        document.getElementById('MacroInfoButton').classList.remove('hidden');
        var infoContainerCheckbox = document.getElementById('infoContainerCheckbox');
        if (infoContainerCheckbox.checked) {
            infoContainerCheckbox.checked = false;
        }
    });
    document.getElementById('infoContainerCheckbox').addEventListener('change', function() {
        if (this.checked) {
            document.querySelector('.info-container').classList.remove('hidden');
        } else {
            document.querySelector('.info-container').classList.add('hidden');
        }
    });
    // macro-svg 이미지 클릭 이벤트 추가
    const searchButton = document.getElementById('searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const lineNumber = document.getElementById('drawingInput1').value;
            const por = document.getElementById('drawingInput2').value;
            const seq = document.getElementById('drawingInput3').value;
            const piecs = document.getElementById('drawingInput4').value;

            lastSearchParams = { lineNumber, por, seq, piecs };
            filteredDrawingData = filterDrawingData(lineNumber, por, seq, piecs);

            if (filteredDrawingData.length > 0) {
                updateDrawingTable(filteredDrawingData);

            } else {
                document.getElementById('content1Body').innerHTML = '<tr><td colspan="6">데이터 없음</td></tr>';
              
            }
        });
    }
    

    const addDrawingButton = document.getElementById('addDrawingButton');
    if (addDrawingButton) {
        addDrawingButton.addEventListener('click', function() {
            const lineNumber = document.getElementById('drawingInput1').value || lastSearchParams.lineNumber;
            const por = document.getElementById('drawingInput2').value || lastSearchParams.por;
            const seq = document.getElementById('drawingInput3').value || lastSearchParams.seq;
            const piecs = document.getElementById('drawingInput4').value || lastSearchParams.piecs;
            const quantity = document.getElementById('drawingInput5').value;

            if (!lineNumber || !por || !seq || !piecs || !quantity) {
                alert('모든 필드를 입력해주세요.');
                return;
            }

            const isDuplicate = drawingData.some(drawing => 
                drawing.호선 === lineNumber &&
                drawing.POR === por &&
                drawing.SEQ === seq &&
                drawing.PIECS === piecs
            );

            if (isDuplicate) {
                alert('중복된 데이터입니다.');
                return;
            }

            const newDrawing = {
                id: generateUniqueId(drawingData),
                호선: lineNumber,
                POR: por,
                SEQ: seq,
                PIECS: piecs,
                수량: parseInt(quantity),
                등록일자: new Date().toISOString().split('T')[0]
            };

            drawingData.push(newDrawing);
            localStorage.setItem('drawingData', JSON.stringify(drawingData)); 
            filteredDrawingData = filterDrawingData(newDrawing.호선);
            updateDrawingTable(filteredDrawingData);
            clearDrawingInputs();
        });
    }


    function filterDrawingData(lineNumber, por, seq, piecs) {
        let filteredData = drawingData.filter(row => row.호선 === lineNumber);
        if (por) {
            filteredData = filteredData.filter(row => row.POR === por);
        }
        if (seq) {
            filteredData = filteredData.filter(row => row.SEQ === seq);
        }
        if (piecs) {
            filteredData = filteredData.filter(row => row.PIECS === piecs);
        }
        return filteredData;
    }

   
    const copyButton = document.querySelector('.content-button');
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const popup = document.getElementById('copyPopup');
            const lineSelect = document.getElementById('copyLineSelect');
            const porSelect = document.getElementById('copyPorSelect');
            const seqSelect = document.getElementById('copySeqSelect');
            const piecsSelect = document.getElementById('copyPiecsSelect');
            const newLineName = document.getElementById('newLineName');
            const newPorName = document.getElementById('newPorName');
            const newSeqName = document.getElementById('newSeqName');
            const newPiecsName = document.getElementById('newPiecsName');
            const confirmCopyButton = document.getElementById('confirmCopyButton');
            const cancelCopyButton = document.getElementById('cancelCopyButton');

            // 호선 목록 초기화 및 추가
            lineSelect.innerHTML = '<option value="">선택 안 함</option>';
            const lineNumbers = [...new Set(drawingData.map(d => d.호선))];
            lineNumbers.forEach(line => {
                const option = document.createElement('option');
                option.value = line;
                option.textContent = line;
                lineSelect.appendChild(option);
            });

            // 호선 선택 시 POR 목록 업데이트
            lineSelect.addEventListener('change', function() {
                const selectedLine = lineSelect.value;
                porSelect.innerHTML = '<option value="">선택 안 함</option>';
                const porNumbers = [...new Set(drawingData.filter(d => d.호선 === selectedLine).map(d => d.POR))];
                porNumbers.forEach(por => {
                    const option = document.createElement('option');
                    option.value = por;
                    option.textContent = por;
                    porSelect.appendChild(option);
                });
                porSelect.disabled = false;
    
                newLineName.style.display = 'block';
                newPorName.style.display = 'none';
                newSeqName.style.display = 'none';
                newPiecsName.style.display = 'none';
                seqSelect.innerHTML = '<option value="">선택 안 함</option>';
                piecsSelect.innerHTML = '<option value="">선택 안 함</option>';
                seqSelect.disabled = true;
                piecsSelect.disabled = true;
            });

            // POR 선택 시 SEQ 목록 업데이트
            porSelect.addEventListener('change', function() {
                const selectedLine = lineSelect.value;
                const selectedPor = porSelect.value;
                seqSelect.innerHTML = '<option value="">선택 안 함</option>';
                const seqNumbers = [...new Set(drawingData.filter(d => d.호선 === selectedLine && d.POR === selectedPor).map(d => d.SEQ))];
                seqNumbers.forEach(seq => {
                    const option = document.createElement('option');
                    option.value = seq;
                    option.textContent = seq;
                    seqSelect.appendChild(option);
                });
                seqSelect.disabled = false;
                piecsSelect.innerHTML = '<option value="">선택 안 함</option>';
                piecsSelect.disabled = true;
                newLineName.value = "";  // 새로운 호선 입력 필드 비우기
                newLineName.style.display = 'none';
                newPorName.style.display = 'block';
                newSeqName.style.display = 'none';
                newPiecsName.style.display = 'none';
            });

            // SEQ 선택 시 PIECS 목록 업데이트
            seqSelect.addEventListener('change', function() {
                const selectedLine = lineSelect.value;
                const selectedPor = porSelect.value;
                const selectedSeq = seqSelect.value;
                piecsSelect.innerHTML = '<option value="">선택 안 함</option>';
                const piecsNumbers = [...new Set(drawingData.filter(d => d.호선 === selectedLine && d.POR === selectedPor && d.SEQ === selectedSeq).map(d => d.PIECS))];
                piecsNumbers.forEach(piecs => {
                    const option = document.createElement('option');
                    option.value = piecs;
                    option.textContent = piecs;
                    piecsSelect.appendChild(option);
                });
                piecsSelect.disabled = false;
                newPorName.value = "";  // 새로운 호선 입력 필드 비우기
                newLineName.style.display = 'none';
                newPorName.style.display = 'none';
                newSeqName.style.display = 'block';
                newPiecsName.style.display = 'none';
            });
            piecsSelect.addEventListener('change', function() {
                piecsSelect.disabled = false;
                newSeqName.value = "";  // 새로운 호선 입력 필드 비우기
                newLineName.style.display = 'none';
                newPorName.style.display = 'none';
                newSeqName.style.display = 'none';
                newPiecsName.style.display = 'block';
            });

            // 팝업창 표시
            popup.style.display = 'block';
            // 기존 핸들러 제거 후 새로운 핸들러 추가
            confirmCopyButton.removeEventListener('click', copyEventHandler);
            confirmCopyButton.addEventListener('click', copyEventHandler);

            cancelCopyButton.addEventListener('click', function() {
                // 팝업창 숨기기 및 입력 필드 초기화
                popup.style.display = 'none';
                newLineName.value = '';
                newPorName.value = '';
                newSeqName.value = '';
                newPiecsName.value = '';
                porSelect.innerHTML = '<option value="">선택 안 함</option>';
                seqSelect.innerHTML = '<option value="">선택 안 함</option>';
                piecsSelect.innerHTML = '<option value="">선택 안 함</option>';
                porSelect.disabled = true;
                seqSelect.disabled = true;
                piecsSelect.disabled = true;
                newLineName.style.display = 'none';
                newPorName.style.display = 'none';
                newSeqName.style.display = 'none';
                newPiecsName.style.display = 'none';
                newLineName.disabled = false;
                newPorName.disabled = false;
                newSeqName.disabled = false;
                newPiecsName.disabled = false;
            });
        });
    }

    function copyEventHandler() {
        const selectedLine = document.getElementById('copyLineSelect').value;
        const selectedPor = document.getElementById('copyPorSelect').value;
        const selectedSeq = document.getElementById('copySeqSelect').value;
        const selectedPiecs = document.getElementById('copyPiecsSelect').value;
        const newLine = document.getElementById('newLineName').value.trim();
        const newPor = document.getElementById('newPorName').value.trim();
        const newSeq = document.getElementById('newSeqName').value.trim();
        const newPiecs = document.getElementById('newPiecsName').value.trim();
    
        // 호선 중복 체크
        if (newLine && drawingData.some(drawing => drawing.호선 === newLine)) {
            alert('중복된 호선입니다.');
            return;
        }
    
        // POR 중복 체크
        if (newPor && drawingData.some(drawing => drawing.POR === newPor && drawing.호선 === (newLine || selectedLine))) {
            alert('중복된 POR입니다.');
            return;
        }
    
        // SEQ 중복 체크
        if (newSeq && drawingData.some(drawing => drawing.SEQ === newSeq && drawing.호선 === (newLine || selectedLine) && drawing.POR === (newPor || selectedPor))) {
            alert('중복된 SEQ입니다.');
            return;
        }
    
        // PIECS 중복 체크
        if (newPiecs && drawingData.some(drawing => drawing.PIECS === newPiecs && drawing.호선 === (newLine || selectedLine) && drawing.POR === (newPor || selectedPor) && drawing.SEQ === (newSeq || selectedSeq))) {
            alert('중복된 PIECS입니다.');
            return;
        }
    
        // 호선 데이터 복사
        let selectedData = drawingData.filter(d => d.호선 === selectedLine);
        if (selectedPor) {
            selectedData = selectedData.filter(d => d.POR === selectedPor);
        }
        if (selectedSeq) {
            selectedData = selectedData.filter(d => d.SEQ === selectedSeq);
        }
        if (selectedPiecs) {
            selectedData = selectedData.filter(d => d.PIECS === selectedPiecs);
        }
    
        const newData = selectedData.map(d => {
            const newId = generateUniqueId(drawingData);
            return {
                ...d,
                호선: newLine || d.호선,
                POR: newPor || d.POR,
                SEQ: newSeq || d.SEQ,
                PIECS: newPiecs || d.PIECS,
                등록일자: new Date().toISOString().split('T')[0],
                id: newId
            };
        });
        drawingData.push(...newData);
    
        // 새로운 도면의 ID 목록
        const newIds = newData.map(d => d.id);
    
        // 부재 데이터 복사
        let selectedPartData = partData.filter(p => selectedData.some(d => d.id === p.drawedid));
    
        const newPartData = selectedPartData.map(p => {
            const newDrawedId = newIds[selectedData.findIndex(d => d.id === p.drawedid)];
            return {
                ...p,
                호선: newLine || p.호선,
                POR: newPor || p.POR,
                SEQ: newSeq || p.SEQ,
                PIECS: newPiecs || p.PIECS,
                drawedid: newDrawedId,
                id: generateUniqueId(partData)
            };
        });
        partData.push(...newPartData);
    
        // 매크로 데이터 복사
        let selectedMacroData = macroData.filter(m => selectedPartData.some(p => p.id === m.partedid));
        const newMacroData = selectedMacroData.map(m => {
            const newPart = newPartData.find(p => p["Part ID"] === m.partID && p.호선 === (newLine || m.호선) && p.POR === (newPor || m.POR) && p.SEQ === (newSeq || m.SEQ) && p.PIECS === (newPiecs || m.PIECS));
            return {
                ...m,
                partedid: newPart ? newPart.id : m.partedid,
                호선: newLine || m.호선,
                POR: newPor || m.POR,
                SEQ: newSeq || m.SEQ,
                PIECS: newPiecs || m.PIECS,
                id: generateUniqueId(macroData)
            };
        });
        macroData.push(...newMacroData);
    
        localStorage.setItem('drawingData', JSON.stringify(drawingData));
        localStorage.setItem('partData', JSON.stringify(partData));
        localStorage.setItem('macroData', JSON.stringify(macroData));
    
        // 팝업창 숨기기 및 입력 필드 초기화
        const popup = document.getElementById('copyPopup');
        popup.style.display = 'none';
        document.getElementById('newLineName').value = '';
        document.getElementById('newPorName').value = '';
        document.getElementById('newSeqName').value = '';
        document.getElementById('newPiecsName').value = '';
        document.getElementById('copyPorSelect').innerHTML = '<option value="">선택 안 함</option>';
        document.getElementById('copySeqSelect').innerHTML = '<option value="">선택 안 함</option>';
        document.getElementById('copyPiecsSelect').innerHTML = '<option value="">선택 안 함</option>';
        document.getElementById('copyPorSelect').disabled = true;
        document.getElementById('copySeqSelect').disabled = true;
        document.getElementById('copyPiecsSelect').disabled = true;
        document.getElementById('newLineName').style.display = 'none';
        document.getElementById('newPorName').style.display = 'none';
        document.getElementById('newSeqName').style.display = 'none';
        document.getElementById('newPiecsName').style.display = 'none';
    }
    

    document.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            console.log('drawingData:', JSON.parse(localStorage.getItem('drawingData')));
            console.log('partData:', JSON.parse(localStorage.getItem('partData')));
            console.log('macroData:', JSON.parse(localStorage.getItem('macroData')));
        }
    });
    const deleteDrawingButton = document.getElementById('deleteDrawingButton');
    if (deleteDrawingButton) {
        deleteDrawingButton.addEventListener('click', function() {
            if (confirm('삭제하겠습니까?')) {
                const checkedBoxes = document.querySelectorAll('#content1Body input[type="checkbox"]:checked');
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => {
                    return checkbox.parentElement.parentElement; // 행 요소
                });

                const identifiersToDelete = rowsToDelete.map(row => ({
                    호선: row.cells[2].textContent, // 호선이 세 번째 셀에 있다고 가정
                    POR: row.cells[3].textContent,  // POR이 네 번째 셀에 있다고 가정
                    SEQ: row.cells[4].textContent,  // SEQ가 다섯 번째 셀에 있다고 가정
                    PIECS: row.cells[5].textContent // PIECS가 여섯 번째 셀에 있다고 가정
                }));

                // 테이블에서 행 제거
                rowsToDelete.forEach(row => row.remove());

                // drawingData 배열에서 항목 제거
                identifiersToDelete.forEach(identifier => {
                    const index = drawingData.findIndex(item => 
                        item.호선 === identifier.호선 &&
                        item.POR === identifier.POR &&
                        item.SEQ === identifier.SEQ &&
                        item.PIECS === identifier.PIECS
                    );
                    if (index !== -1) {
                        const idToDelete = drawingData[index].id; // 삭제할 ID 저장
                        drawingData.splice(index, 1);

                        // 관련된 partData 및 macroData 제거
                        const partsToDelete = partData.filter(part => part.drawedid === idToDelete);
                        const partIdsToDelete = partsToDelete.map(part => part.id);

                        partData = partData.filter(part => part.drawedid !== idToDelete);
                        macroData = macroData.filter(macro => !partIdsToDelete.includes(macro.partedid));
                    }
                });

                // filteredDrawingData에서 삭제된 항목 필터링
                filteredDrawingData = filteredDrawingData.filter(item => 
                    !identifiersToDelete.some(identifier => 
                        item.호선 === identifier.호선 &&
                        item.POR === identifier.POR &&
                        item.SEQ === identifier.SEQ &&
                        item.PIECS === identifier.PIECS
                    )
                );

                // localStorage 업데이트
                localStorage.setItem('drawingData', JSON.stringify(drawingData)); 
                localStorage.setItem('partData', JSON.stringify(partData)); 
                localStorage.setItem('macroData', JSON.stringify(macroData)); 

                // 테이블 디스플레이 업데이트
                updateDrawingTable(filteredDrawingData);
                updatePartTable([]); // 부재 정보 테이블 초기화
            }
        });
    }


    document.getElementById('content2').addEventListener('click', function(event) {
        if (event.target && event.target.id === 'deletePartButton') {
            if (confirm('삭제하겠습니까?')) {
                const checkedBoxes = document.querySelectorAll('#content2Body input[type="checkbox"]:checked');
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => checkbox.parentElement.parentElement);
                const identifiersToDelete = rowsToDelete.map(row => ({
                    PartID: row.cells[2].textContent,
                    자재종류: row.cells[3].textContent,
                    재질: row.cells[4].textContent,
                    drawedid: selectedDrawingInfo.drawid,
                }));
    
                console.log('Identifiers to delete:', identifiersToDelete);
                rowsToDelete.forEach(row => row.remove());
    
                identifiersToDelete.forEach(identifier => {
                const partToDelete = partData.find(part => 
                    part["Part ID"] === identifier.PartID &&
                    part.자재종류 === identifier.자재종류 &&
                    part.재질 === identifier.재질 &&
                    part.drawedid === identifier.drawedid
                );
                
                console.log('Part to delete:', partToDelete);
                if (partToDelete) {
                    // Remove the part from partData
                    
                    partData = partData.filter(part => part.id !== partToDelete.id);

                    // Remove macros with the same part id
                    macroData = macroData.filter(macro => macro.partedid !== partToDelete.id);
                }
            });

    
                localStorage.setItem('partData', JSON.stringify(partData));
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);
                updatePartTable(partData);
    
                // 현재 클릭된 도면 정보로 테이블 업데이트
                updateTablesWithSelectedDrawingInfo();
            }
        }
    });

    
    function updateDrawingTable(data) {
        const contentDiv = document.getElementById('content1');
        const tbody = contentDiv.querySelector('tbody');
        tbody.innerHTML = '';
    
        data.forEach((rowData, index) => {
            const tr = document.createElement('tr');
            tr.classList.add('clickable');
            tr.addEventListener('click', function() {
                selectedDrawingInfo = {
                    호선: rowData.호선,
                    POR: rowData.POR,
                    SEQ: rowData.SEQ,
                    PIECS: rowData.PIECS,
                    drawid : rowData.id
                };
                document.querySelectorAll('#content1Body tr').forEach(row => {
                    row.classList.remove('selected-row');
                });
                tr.classList.add('selected-row');
                filteredPartData = partData.filter(part => 
                    rowData.id === part.drawedid
                );
                updatePartTable(filteredPartData);
                updatePartInputForm();
                selectedPartInfo = {}
                hideImageContainer()
            });
    
            const checkboxTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);
            tr.appendChild(checkboxTd);
    
            const tdNo = document.createElement('td');
            tdNo.textContent = index + 1;
            tr.appendChild(tdNo);
    
            const headers = ["호선", "POR", "SEQ", "PIECS", "수량", "등록일자"];
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = rowData[header];
                tr.appendChild(td);
            });
    
            tbody.appendChild(tr);
        });
    
        // Add sorting functionality
        document.querySelector('th.por-header').addEventListener('click', () => sortTableAndUpdate('POR'));
        document.querySelector('th.seq-header').addEventListener('click', () => sortTableAndUpdate('SEQ'));
        document.querySelector('th.piecs-header').addEventListener('click', () => sortTableAndUpdate('PIECS'));
    }
    
    // Modify your header HTML to include class names for the sortable columns
    const tableHeader = document.querySelector('#content1 thead');
    tableHeader.innerHTML = `
        <tr>
            <th><input type="checkbox" id="checkAllDrawings"></th>
            <th>No</th>
            <th class="line-header">호선</th>
            <th class="por-header">POR</th>
            <th class="seq-header">SEQ</th>
            <th class="piecs-header">PIECS</th>
            <th>수량</th>
            <th>등록일자</th>
        </tr>
    `;

    function updatePartTable(data = partData) {
        const contentTitle = document.getElementById('content2Title');
        contentTitle.innerHTML = `
        <span class="title-text">부재정보 (Part List)</span>
        <span class="drawing-info">
            호선:${selectedDrawingInfo.호선} POR:${selectedDrawingInfo.POR} SEQ:${selectedDrawingInfo.SEQ} PIECS:${selectedDrawingInfo.PIECS}
        </span>
        <button class="content-button" id="copyPartButton">복사</button>
        <button class="content-button" id="deletePartButton">삭제</button>
    `;
        const tableHeader = document.getElementById('content2Header');
        tableHeader.innerHTML = `
            <tr>
                <th><input type="checkbox" id="checkAllParts"></th>
                <th>No</th>
                <th class="partid-header">Part ID</th>
                <th class="material-header">자재 종류</th>
                <th>재질</th>
                <th>수량</th>
                <th>가공길이</th>
                <th>전체길이</th>
                <th>중량</th>
                <th>가공수</th>
            </tr>
        `;
    
        const tbody = document.getElementById('content2Body');
        tbody.innerHTML = '';
    
        data.forEach((rowData, index) => {
            const tr = document.createElement('tr');
            tr.classList.add('clickable');
            tr.addEventListener('click', function(event) {
                if (event.target.type === 'checkbox') {
                    return;
                }
                selectedPartInfo = {
                    PartID: rowData["Part ID"],
                    partedid: rowData.id,
                    자재종류 : rowData.자재종류,
                    중량 : rowData.중량,
                    전체길이 : rowData.전체길이
                };
    
                console.log(`부재정보 클릭됨: 호선=${selectedPartInfo.호선}, POR=${selectedPartInfo.POR}, SEQ=${selectedPartInfo.SEQ}, PIECS=${selectedPartInfo.PIECS}, PartID=${selectedPartInfo.PartID}, 난수data=${selectedPartInfo.난수data}`);
    
                const filteredMacroData = macroData.filter(macro =>
                    macro.partedid === selectedPartInfo.partedid
                );
                updateMacroTable(filteredMacroData);
                updateMacroInputForm();
                //updateMacroList();

                const infoEA = document.querySelector('.Info-EA');
                const infoHB = document.querySelector('.Info-HB');
                const infoCH = document.querySelector('.Info-CH');
                const infoPI = document.querySelector('.Info-PI');
                const infoIB = document.querySelector('.Info-IB');
                const infoUA = document.querySelector('.Info-UA');
                const infoSP = document.querySelector('.Info-SP'); // Info-SP 추가

                const allInfoElements = [infoEA, infoHB, infoCH, infoPI, infoIB, infoUA, infoSP];

                if (infoEA && infoHB && infoCH && infoPI && infoIB && infoUA && infoSP) { // 요소가 존재하는지 확인
                    allInfoElements.forEach(element => element.classList.add('hidden')); // 모든 요소 숨기기

                    switch (true) {
                        case selectedPartInfo.자재종류.startsWith('EA'):
                            infoEA.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('HB'):
                            infoHB.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('CH'):
                            infoCH.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('PI'):
                            infoPI.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('IB'):
                            infoIB.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('UA'):
                            infoUA.classList.remove('hidden');
                            break;
                        case selectedPartInfo.자재종류.startsWith('SP'):
                            infoSP.classList.remove('hidden');
                            break;
                    }
                } else {
                    console.error('Info-EA, Info-HB, Info-CH, Info-PI, Info-IB, Info-UA 또는 Info-SP 요소를 찾을 수 없습니다.');
                }



            });
    
            const checkboxTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);
            tr.appendChild(checkboxTd);
    
            const tdNo = document.createElement('td');
            tdNo.textContent = index + 1;
            tr.appendChild(tdNo);
            const headers = ["Part ID", "자재종류", "재질", "수량", "가공길이", "전체길이", "중량", "가공수"];
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = rowData[header];
                tr.appendChild(td);
            });
    
            tbody.appendChild(tr);
        });
    
        // Add sorting functionality
        const partIdHeader = tableHeader.querySelector('th.partid-header');
        const materialHeader = tableHeader.querySelector('th.material-header');
    
        partIdHeader.addEventListener('click', () => sortPartTable(data, 'Part ID'));
        materialHeader.addEventListener('click', () => sortPartTable(data, '자재종류'));
    
        const copyPartButton = document.getElementById('copyPartButton');
        if (copyPartButton) {
            copyPartButton.addEventListener('click', function() {
                const checkedBoxes = document.querySelectorAll('#content2Body input[type="checkbox"]:checked');
                if (checkedBoxes.length !== 1) {
                    alert('하나의 부재만 선택해주세요.');
                    return;
                }
    
                const selectedRow = checkedBoxes[0].parentElement.parentElement;
                const partID = selectedRow.cells[2].textContent;
                const 자재종류 = selectedRow.cells[3].textContent;
                const 재질 = selectedRow.cells[4].textContent;
                const 수량 = selectedRow.cells[5].textContent;
                const 가공길이 = selectedRow.cells[6].textContent;
                const 전체길이 = selectedRow.cells[7].textContent;
                const 중량 = selectedRow.cells[8].textContent;
                const 가공수 = selectedRow.cells[9].textContent;
                const selectedPart = partData.find(part => part["Part ID"] === partID);
    
                const newPartID = prompt('새로운 PART ID를 입력하세요:');
                if (!newPartID) {
                    alert('PART ID를 입력해야 합니다.');
                    return;
                }
    
                const isDuplicate = partData.some(part => 
                    part["Part ID"] === newPartID && part.drawedid === selectedPart.drawedid
                );
    
                if (isDuplicate) {
                    alert('중복된 데이터입니다.');
                    return;
                }
    
                const newPart = {
                    id: generateUniqueId(partData),
                    "Part ID": newPartID,
                    자재종류,
                    재질,
                    수량: parseInt(수량),
                    가공길이: parseInt(가공길이),
                    전체길이: parseInt(전체길이),
                    중량: parseFloat(중량),
                    가공수: parseInt(가공수),
                    drawedid: selectedPart.drawedid
                };
                partData.push(newPart);
    
                if (selectedPart) {
                    const selectedPartID = selectedPart.id;
                    const newPartID = newPart.id;
    
                    const selectedMacroData = macroData.filter(macro => macro.partedid === selectedPartID);
                    const newMacroData = selectedMacroData.map(macro => ({
                        ...macro,
                        partedid: newPartID,
                        id: generateUniqueId(macroData)
                    }));
                    macroData.push(...newMacroData);
                }
    
                localStorage.setItem('partData', JSON.stringify(partData));
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);
                updatePartTable(partData);
    
                filteredPartData = partData.filter(part => 
                    part.drawedid === selectedDrawingInfo.drawid
                );
                updatePartTable(filteredPartData);
                updatePartInputForm();
            });
        }
    }
    

    function updateMacroTable(data = macroData) {
        const contentTitle = document.getElementById('content2Title');
        contentTitle.innerHTML = `
        <span class="title-text">가공정보 (Cutting List)</span>
        <span class="drawing-info">
            호선:${selectedDrawingInfo.호선} POR:${selectedDrawingInfo.POR} SEQ:${selectedDrawingInfo.SEQ} PIECS:${selectedDrawingInfo.PIECS}
        </span>
        <button class="content-button" id="deleteMacroButton">삭제</button>
        <button class="content-button" id="BackButton">뒤로가기</button>
    `;
        const tableHeader = document.getElementById('content2Header');
        tableHeader.innerHTML = `
            <tr>
                <th><input type="checkbox" id="checkAllMacros"></th>
                <th>No</th>
                <th>Part ID</th>
                <th class="th-macro">가공위치</th>
                <th>매크로</th>
                <th>파라미터</th>
            </tr>
        `;
    
        const tbody = document.getElementById('content2Body');
        tbody.innerHTML = '';
    
        data.forEach((rowData, index) => {
            const tr = document.createElement('tr');
            tr.classList.add('clickable');
            tr.addEventListener('click', function() {
                // 매크로 정보를 input 필드에 채우기
                document.getElementById('macroInput2').value = rowData['가공위치'];
                document.getElementById('macroInput3').value = rowData['매크로'];
                const params = rowData['파라미터'];
                document.getElementById('macroInputA').value = params[0];
                document.getElementById('macroInputB').value = params[1];
                document.getElementById('macroInputC').value = params[2];
                document.getElementById('macroInputD').value = params[3];
                document.getElementById('macroInputE').value = params[4];
                document.getElementById('macroInputF').value = params[5];
    
                document.getElementById('lineText').textContent = selectedDrawingInfo.호선 || '';
                document.getElementById('porText').textContent = selectedDrawingInfo.POR || '';
                document.getElementById('seqText').textContent = selectedDrawingInfo.SEQ || '';
                document.getElementById('piecsText').textContent = selectedDrawingInfo.PIECS || '';
                document.getElementById('partIdText').textContent = rowData.partID || '';
                document.getElementById('materialTypeText').textContent = selectedPartInfo.자재종류 || '';
                document.getElementById('processingLocationText').textContent = rowData.가공위치 || '';
        
                // 클릭된 매크로 정보를 전역 변수에 저장
                selectedMacroInfo = rowData;
                hideImageContainer()
            });
    
            const checkboxTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);
            tr.appendChild(checkboxTd);
    
            const tdNo = document.createElement('td');
            tdNo.textContent = index + 1; // 순서대로 No 할당
            tr.appendChild(tdNo);
    
            const headers = ["partID", "가공위치", "매크로", "파라미터"];
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = Array.isArray(rowData[header]) ? rowData[header].join(', ') : rowData[header];
                tr.appendChild(td);
            });
    
            tbody.appendChild(tr);
        });
    
        document.getElementById('checkAllMacros').addEventListener('change', function() {
            const checkboxes = document.querySelectorAll('#content2Body input[type="checkbox"]');
            checkboxes.forEach(checkbox => checkbox.checked = this.checked);
        });
    
        // Add event listener for the delete macro button
        document.getElementById('deleteMacroButton').addEventListener('click', function() {
            if (confirm('선택된 매크로를 삭제하시겠습니까?')) {
                const checkedBoxes = document.querySelectorAll('#content2Body input[type="checkbox"]:checked');
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => checkbox.parentElement.parentElement);
    
                rowsToDelete.forEach(row => {
                    const partID = row.cells[2].textContent;
                    const 가공위치 = row.cells[3].textContent;
                    const 매크로 = row.cells[4].textContent;
                    const 파라미터 = row.cells[5].textContent.split(','); // 파라미터를 배열로 변환
                    const partedid = selectedPartInfo.partedid;

                    console.log('삭제할 매크로:', {
                        partID: partID,
                        가공위치: 가공위치,
                        매크로: 매크로,
                        파라미터: 파라미터,
                        partedid: partedid
                    });

                    // 매크로 데이터에서 해당 조건에 맞는 매크로 항목들을 필터링
                    const matchingMacros = macroData.filter(macro => 
                        macro.partID === partID && 
                        macro.가공위치 === 가공위치 && 
                        macro.매크로 === 매크로 && 
                        macro.partedid === partedid
                    );

                    console.log('매칭된 매크로들:', matchingMacros);

                    // 매칭된 매크로 항목들 중에서 삭제할 항목 선택
                    matchingMacros.forEach(matchingMacro => {
                        macroData = macroData.filter(macro => macro.id !== matchingMacro.id);
                    });

                    // 테이블에서 행 삭제
                    row.remove();
                });
    
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);

                // 클릭된 부재 정보로 부재 테이블 업데이트
                if (selectedPartInfo.PartID && selectedPartInfo.partedid) {
                    const filteredMacroData = macroData.filter(macro => 
                        macro.partID === selectedPartInfo.PartID &&
                        macro.partedid === selectedPartInfo.partedid
                    );
                    updateMacroTable(filteredMacroData);
                }
            }
        });
    
        // Add event listener for the back button
        document.getElementById('BackButton').addEventListener('click', function() {
            if (selectedDrawingInfo) {
                // Filter partData based on last selected drawing information
                filteredPartData = partData.filter(part => 
                    part.drawedid === selectedDrawingInfo.drawid
                );
                updatePartTable(filteredPartData);
                updatePartInputForm();
                hideImageContainer()
                selectedPartInfo = {}
            }
        });
        const macroheader = tableHeader.querySelector('th.th-macro');
    
        macroheader.addEventListener('click', () => sortMacroTable(data, '가공위치'));
    }
    
    
    function updatePartInputForm() {
        const partFormContainer = document.getElementById('partFormContainer');
        partFormContainer.innerHTML = `
            <h5>부재 정보 등록</h5>
            <div class="input-group" id="partInputGroup">
                <input type="text" id="partInput1" placeholder="Part ID">
                <input type="text" id="partInput2" placeholder="자재규격" list="materialSpecList" style="flex-grow: 2;">
                <datalist id="materialSpecList"></datalist>
                <input type="text" id="partInput3" placeholder="재질">
                <input type="text" id="partInput4" placeholder="수량" style="flex-grow: 0.5;">
                <input type="text" id="partInput5" placeholder="가공길이">
                <button id="addPartButton">등록</button>
                <button id="searchPartButton">조회</button>
            </div>
        `;
        const datalist = document.getElementById('materialSpecList');
        if (datalist) {
            datalist.innerHTML = specListData;
        } else {
            console.error('materialSpecList element not found');
        }
        document.getElementById('partInput2').addEventListener('input', function() {
            const selectedValue = this.value;
            const options = document.querySelectorAll('#materialSpecList option');
            options.forEach(option => {
                if (option.value === selectedValue) {
                    const weightPerMeter = parseFloat(option.getAttribute('data-weight'));
                    document.getElementById('partInput2').setAttribute('data-selected-weight', weightPerMeter);
                }
            });
        });
    
        document.getElementById('addPartButton').addEventListener('click', function() {
            const partID = document.getElementById('partInput1').value;
            const 자재종류 = document.getElementById('partInput2').value;
            const 재질 = document.getElementById('partInput3').value;
            const 수량 = document.getElementById('partInput4').value;
            const 가공길이 = document.getElementById('partInput5').value;
            const 전체길이 = 가공길이;
            const 중량 = parseFloat(document.getElementById('partInput2').getAttribute('data-selected-weight'));
            

            const materialSpecList = Array.from(document.querySelectorAll('#materialSpecList option')).map(option => option.value);
            if (!materialSpecList.includes(자재종류)) {
                alert('존재하지 않는 자재입니다.');
                return;
            }
            if (!partID || !자재종류 || !재질 || !수량 || !가공길이) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
            const isDuplicate = partData.some(part => 
                part.drawedid === selectedDrawingInfo.drawid&&
                part["Part ID"] === partID
            );
            
            if (isDuplicate) {
                alert('중복된 데이터입니다.');
                return;
            }
            const newPart = {
                "Part ID": partID,
                자재종류,
                재질,
                수량: parseInt(수량),
                가공길이: parseInt(가공길이),
                전체길이: parseInt(전체길이),
                중량,
                가공수: calculateMacroCount(partID),
                drawedid : selectedDrawingInfo.drawid,
                id : generateUniqueId(partData),

            };
    
            partData.push(newPart);
            localStorage.setItem('partData', JSON.stringify(partData)); 
            if (selectedDrawingInfo.drawid) {
                filteredPartData = partData.filter(part => 
                    part.drawedid === selectedDrawingInfo.drawid
                );
            }
    
            updatePartTable(filteredPartData);
            clearPartInputs();
        });

        document.getElementById('searchPartButton').addEventListener('click', function() {
            const partID = document.getElementById('partInput1').value;
            const 자재종류 = document.getElementById('partInput2').value;
            const 재질 = document.getElementById('partInput3').value;
            
            let filteredData = partData.filter(part => 
                part.호선 === selectedDrawingInfo.호선 && 
                part.POR === selectedDrawingInfo.POR && 
                part.SEQ === selectedDrawingInfo.SEQ && 
                part.PIECS === selectedDrawingInfo.PIECS
            );
            
            if (partID) {
                filteredData = filteredData.filter(part => part["Part ID"].includes(partID));
            }
            if (자재종류) {
                filteredData = filteredData.filter(part => part.자재종류.includes(자재종류));
            }
            if (재질) {
                filteredData = filteredData.filter(part => part.재질.includes(재질));
            }

            if (filteredData.length > 0) {
                updatePartTable(filteredData);
            } else {
                alert('조건에 맞는 부재 정보가 없습니다.');
            }
        });
    }

    function updateMacroInputForm() {
        const partFormContainer = document.getElementById('partFormContainer');
        partFormContainer.innerHTML = `
            <h5>매크로 정보 등록</h5>
            <div class="macro-input-group">
                <input type="text" id="macroInput2" placeholder="가공위치">
                <input type="text" id="macroInput3" placeholder="매크로" list="macroList" style="flex-grow: 2;">
                <datalist id="macroList"></datalist>
                <input type="text" id="macroInputA" placeholder="A">
                <input type="text" id="macroInputB" placeholder="B">
                <input type="text" id="macroInputC" placeholder="C">
                <input type="text" id="macroInputD" placeholder="D">
                <input type="text" id="macroInputE" placeholder="E">
                <input type="text" id="macroInputF" placeholder="F">
            </div>
            <div class="macro-button-group">
                <button class="macro-button2" id="addMacroButton">등록</button>
                <button class="macro-button2" id="updateMacroButton">수정</button>
            </div>
        `;
        window.requestAnimationFrame(() => {
            const macroList = document.getElementById('macroList');
            const macroOptions = [];
            
            // 선택된 자재 종류에서 자재 종류 코드 추출
            const materialType = selectedPartInfo.자재종류.split(' ')[0];

            // 자재 종류에 따른 클래스 이름 매핑
            const classMap = {
                'EA': '.Info-EA',
                'HB': '.Info-HB',
                'CH': '.Info-CH',
                'PI': '.Info-PI',
                'IB': '.Info-IB',
                'UA': '.Info-UA',
                'SP': '.Info-SP'
            };

            // 자재 종류에 맞는 클래스 선택
            const className = classMap[materialType] || '';

            if (className) {
                document.querySelectorAll(`${className} .macro-svg`).forEach(function(svg) {
                    if (svg.id) {
                        macroOptions.push(svg.id);
                    }
                });
            }

            console.log('Filtered macro options:', macroOptions); // 디버깅용 로그 추가

            // 기존 옵션을 모두 제거
            macroList.innerHTML = '';

            // 새로운 옵션 추가
            macroOptions.forEach(function(macro) {
                const option = document.createElement('option');
                option.value = macro;
                console.log('Creating option:', option); // 디버깅용 로그 추가
                macroList.appendChild(option);
            });

            // datalist 요소가 추가되었는지 확인
            console.log('Updated datalist:', macroList.innerHTML); // datalist 내부 확인
            });

        document.getElementById('addMacroButton').addEventListener('click', function() {
            const partID = selectedPartInfo.PartID;
            const partedid = selectedPartInfo.partedid;
            const PIECS = selectedPartInfo.PIECS;
            const PART난수 = selectedPartInfo.난수data;  // 난수data 추가
            const 가공위치 = document.getElementById('macroInput2').value;
            const 매크로 = document.getElementById('macroInput3').value;
            const A = document.getElementById('macroInputA').value.trim() || '0';
            const B = document.getElementById('macroInputB').value.trim() || '0';
            const C = document.getElementById('macroInputC').value.trim() || '0';
            const D = document.getElementById('macroInputD').value.trim() || '0';
            const E = document.getElementById('macroInputE').value.trim() || '0';
            const F = document.getElementById('macroInputF').value.trim() || '0';
            const 파라미터 = [A, B, C, D, E, F];
    
            const macroOptionsArray = Array.from(macroList.options).map(option => option.value);
            if (!macroOptionsArray.includes(매크로)) {
                alert('해당 매크로는 유효하지 않습니다.');
                return;
            }
            if (!가공위치 || !매크로 || 파라미터.length === 0) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
    
            const newMacro = {
                partID,
                partedid,
                가공위치,
                매크로,
                파라미터,
                id: generateUniqueId(macroData)
            };
    
            macroData.push(newMacro);
            localStorage.setItem('macroData', JSON.stringify(macroData));
            const filteredMacroData = macroData.filter(macro => macro.partID === partID && macro.PART난수 === PART난수);
            partData = partData.map(part => {
                const 가공수 = calculateMacroCount(part["Part ID"]);
                return { ...part, 가공수 };
            });
    
            updateMacroTable(filteredMacroData);
            clearMacroInputs();
            hideImageContainer()
        });
    
        document.getElementById('updateMacroButton').addEventListener('click', function() {
            if (!selectedMacroInfo) {
                alert('수정할 매크로를 선택해주세요.');
                return;
            }
    
            const partID = selectedMacroInfo.partID;
            const 호선 = selectedMacroInfo.호선;
            const POR = selectedMacroInfo.POR;
            const SEQ = selectedMacroInfo.SEQ;
            const PIECS = selectedMacroInfo.PIECS;
            const PART난수 = selectedMacroInfo.PART난수;  // 난수data 추가
            const 가공위치 = document.getElementById('macroInput2').value;
            const 매크로 = document.getElementById('macroInput3').value;
            const A = document.getElementById('macroInputA').value.trim() || '0';
            const B = document.getElementById('macroInputB').value.trim() || '0';
            const C = document.getElementById('macroInputC').value.trim() || '0';
            const D = document.getElementById('macroInputD').value.trim() || '0';
            const E = document.getElementById('macroInputE').value.trim() || '0';
            const F = document.getElementById('macroInputF').value.trim() || '0';
            const 파라미터 = [A, B, C, D, E, F];
    
            if (!가공위치 || !매크로 || 파라미터.length === 0) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
    
            const macroIndex = macroData.findIndex(macro => macro.partID === partID && macro.호선 === 호선 && macro.POR === POR && macro.SEQ === SEQ && macro.PIECS === PIECS && macro.가공위치 === selectedMacroInfo.가공위치 && macro.PART난수 === PART난수);
            if (macroIndex !== -1) {
                macroData[macroIndex] = {
                    ...macroData[macroIndex],
                    가공위치,
                    매크로,
                    파라미터
                };
    
                localStorage.setItem('macroData', JSON.stringify(macroData));
                const filteredMacroData = macroData.filter(macro => macro.partID === partID && macro.PART난수 === PART난수);
                partData = partData.map(part => {
                    const 가공수 = calculateMacroCount(part["Part ID"]);
                    return { ...part, 가공수 };
                });
    
                updateMacroTable(filteredMacroData);
                clearMacroInputs();
                selectedMacroInfo = null; // 수정 완료 후 선택된 매크로 초기화
            } else {
                alert('수정할 매크로를 선택해주세요.');
            }
        });
    }
    document.querySelectorAll('.macro-svg').forEach(function(svg) {
        svg.addEventListener('click', function() {
            if (selectedPartInfo && selectedPartInfo.PartID) {
                console.log(selectedPartInfo)
                // 클릭된 이미지의 ID를 매크로 입력 필드에 자동으로 넣기
                const macroId = this.id;
                document.getElementById('macroInput3').value = macroId;

                // 클릭된 이미지를 왼쪽에 표시하기
                const selectedImageContainer = document.getElementById('selectedImageContainer');
                let selectedImage = document.getElementById('selectedImage');
                if (!selectedImage) {
                    selectedImage = document.createElement('img');
                    selectedImage.id = 'selectedImage';
                    selectedImage.style.width = '300px';
                    selectedImage.style.height = '300px';
                    selectedImageContainer.appendChild(selectedImage);
                }
                selectedImage.src = `img/svg/${macroId}.svg`;
                selectedImageContainer.style.display = 'block'; // 이미지 컨테이너 보이게 하기
            }
            else {
                alert('부재정보가 선택되지 않았습니다.');
            }
        });
    });

    // 다른 버튼 클릭 시 이미지 컨테이너 숨기기
    function hideImageContainer() {
        const selectedImageContainer = document.getElementById('selectedImageContainer');
        if (selectedImageContainer) {
            selectedImageContainer.style.display = 'none';
        }
    }
    const selectedImageContainer = document.getElementById('selectedImageContainer');
    selectedImageContainer.addEventListener('click', hideImageContainer);


    
    function clearDrawingInputs() {
        document.getElementById('drawingInput1').value = '';
        document.getElementById('drawingInput2').value = '';
        document.getElementById('drawingInput3').value = '';
        document.getElementById('drawingInput4').value = '';
        document.getElementById('drawingInput5').value = '';
    }

    function clearPartInputs() {
        document.getElementById('partInput1').value = '';
        document.getElementById('partInput2').value = '';
        document.getElementById('partInput3').value = '';
        document.getElementById('partInput4').value = '';
        document.getElementById('partInput5').value = '';
    }
    function clearMacroInputs() {
        document.getElementById('macroInput2').value = '';
        document.getElementById('macroInput3').value = '';
        document.getElementById('macroInputA').value = '';
        document.getElementById('macroInputB').value = '';
        document.getElementById('macroInputC').value = '';
        document.getElementById('macroInputD').value = '';
        document.getElementById('macroInputE').value = '';
        document.getElementById('macroInputF').value = '';
    }


    function sortTableAndUpdate(key) {
        if (currentSort.key === key) {
            currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.key = key;
            currentSort.order = 'asc';
        }
    
        const sortedData = drawingData.slice().sort((a, b) => {
            if (currentSort.order === 'asc') {
                return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
            } else {
                return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
            }
        });
    
        updateDrawingTable(sortedData);
    }
    function sortPartTable(data, key) {
        const sortedData = data.slice().sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        updatePartTable(sortedData);
    }
    function sortMacroTable(data, key) {
        const sortedData = data.slice().sort((a, b) => {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        });
        updateMacroTable(sortedData);
    }
    function sortTable(data, key) {
        if (currentSort.key === key) {
            currentSort.order = currentSort.order === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.key = key;
            currentSort.order = 'asc';
        }
    
        const sortedData = data.slice().sort((a, b) => {
            if (currentSort.order === 'asc') {
                return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
            } else {
                return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
            }
        });
    
        return sortedData;
    }
    function updateTablesWithSelectedDrawingInfo() {
        const { 호선, POR, SEQ, PIECS } = selectedDrawingInfo;
        if (호선 && POR && SEQ && PIECS) {
            filteredPartData = partData.filter(part => 
                part.호선 === 호선 && 
                part.POR === POR && 
                part.SEQ === SEQ && 
                part.PIECS === PIECS
            );
            updatePartTable(filteredPartData);
        }
    }
    document.getElementById('checkAllDrawings').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('#content1Body input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
    });
    
    document.getElementById('checkAllParts').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('#content2Body input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
    });

    document.getElementById('checkAllDrawings').addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('#content1Body input[type="checkbox"]');
        checkboxes.forEach(checkbox => checkbox.checked = this.checked);
    });
});
