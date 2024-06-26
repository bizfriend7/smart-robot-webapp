document.addEventListener('DOMContentLoaded', function() {
    let selectedDrawingInfo = {};
    let filteredPartData = [];
    let selectedPartInfo = {};
    let selectedMacroInfo = null;
    let lastSearchParams = {};
    //localStorage.clear()
    if (!localStorage.getItem('drawingData')) {
        const initialDrawingData = [
            { "No": 1, "호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "1", "수량": 5, "등록일자": "2024-01-01" },
            { "No": 2, "호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "2", "수량": 3, "등록일자": "2024-01-02" },
            { "No": 3, "호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "1", "수량": 4, "등록일자": "2024-01-03" },
            { "No": 4, "호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "2", "수량": 2, "등록일자": "2024-01-04" }
        ];
        localStorage.setItem('drawingData', JSON.stringify(initialDrawingData));
    }

    if (!localStorage.getItem('partData')) {
        const initialPartData = [
            { "NO": 1, "Part ID": "EA001", "자재종류": "EA 100*100*10T", "재질": "SS400", "수량": 1, "가공길이": 2000, "전체길이": 2000, "중량": 29.80, "호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "1","등록일자": "2024-01-01" },
            { "NO": 2, "Part ID": "EA002", "자재종류": "EA 100*100*10T", "재질": "SS400", "수량": 1, "가공길이": 4969, "전체길이": 5012, "중량": 74.68, "호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "2","등록일자": "2024-01-01" },
            { "NO": 3, "Part ID": "EA001", "자재종류": "EA 50*50*5T", "재질": "SS400", "수량": 1, "가공길이": 2000, "전체길이": 2000, "중량": 29.80, "호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "1" ,"등록일자": "2024-01-01"},
            { "NO": 4, "Part ID": "EA002", "자재종류": "EA 50*50*5T", "재질": "SS400", "수량": 1, "가공길이": 1000, "전체길이": 1000, "중량": 14.90, "호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "2","등록일자": "2024-01-01" }
        ];
        localStorage.setItem('partData', JSON.stringify(initialPartData));
    }

    if (!localStorage.getItem('macroData')) {
        const initialMacroData = [
            { "NO": 1, "partID": "EA001","가공위치": "0", "매크로": "M001", "파라미터": [40, 10, 10, 20, 0, 0],"호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "1"},
            { "NO": 2,"partID": "EA002", "가공위치": "2174", "매크로": "M002", "파라미터": [40, 10, 10, 20, 0, 0], "호선": "1", "POR": "P001", "SEQ": "S001", "PIECS": "2"},
            { "NO": 3, "partID": "EA001","가공위치": "2230", "매크로": "M003", "파라미터": [40, 10, 10, 20, 0, 0],"호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "1"},
            { "NO": 4, "partID": "EA002","가공위치": "1300", "매크로": "M004", "파라미터": [40, 10, 10, 20, 0, 0],"호선": "1", "POR": "P002", "SEQ": "S002", "PIECS": "2"}
        ];
        localStorage.setItem('macroData', JSON.stringify(initialMacroData));
    }

    // 로컬스토리지에서 데이터 불러오기
    let drawingData = JSON.parse(localStorage.getItem('drawingData'));
    let partData = JSON.parse(localStorage.getItem('partData'));
    let macroData = JSON.parse(localStorage.getItem('macroData'));

    function calculateMacroCount(partID) {
        return macroData.filter(macro => macro.partID === partID).length;
    }

    partData = partData.map(part => {
        const 가공수 = calculateMacroCount(part["Part ID"]);
        return { ...part, 가공수 };
    });

    
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

            const newDrawing = {
                No: drawingData.length + 1,
                호선: lineNumber,
                POR: por,
                SEQ: seq,
                PIECS: piecs,
                수량: parseInt(quantity),
                등록일자: new Date().toISOString().split('T')[0]
            };

            drawingData.push(newDrawing);
            localStorage.setItem('drawingData', JSON.stringify(drawingData)); 
            if(lastSearchParams.length === 0){
                filteredDrawingData = filterDrawingData(lineNumber, por, seq, piecs);
                updateDrawingTable(filteredDrawingData);
                clearDrawingInputs();
                return 
            }
            filteredDrawingData = filterDrawingData(lastSearchParams.lineNumber, lastSearchParams.por, lastSearchParams.seq, lastSearchParams.piecs);
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
                newLineName.style.display = 'none';
                newPorName.style.display = 'none';
                newSeqName.style.display = 'block';
                newPiecsName.style.display = 'none';
            });
            piecsSelect.addEventListener('change', function() {
                piecsSelect.disabled = false;
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
    
        const newData = selectedData.map(d => ({
            ...d,
            호선: newLine || d.호선,
            POR: newPor || d.POR,
            SEQ: newSeq || d.SEQ,
            PIECS: newPiecs || d.PIECS
        }));
        drawingData.push(...newData);
    
        // 부재 데이터 복사
        let selectedPartData = partData.filter(p => p.호선 === selectedLine);
        if (selectedPor) {
            selectedPartData = selectedPartData.filter(p => p.POR === selectedPor);
        }
        if (selectedSeq) {
            selectedPartData = selectedPartData.filter(p => p.SEQ === selectedSeq);
        }
        if (selectedPiecs) {
            selectedPartData = selectedPartData.filter(p => p.PIECS === selectedPiecs);
        }
    
        const newPartData = selectedPartData.map(p => ({
            ...p,
            호선: newLine || p.호선,
            POR: newPor || p.POR,
            SEQ: newSeq || p.SEQ,
            PIECS: newPiecs || p.PIECS
        }));
        partData.push(...newPartData);
    
        // 매크로 데이터 복사
        let selectedMacroData = macroData.filter(m => selectedPartData.some(p => p["Part ID"] === m.partID));
        const newMacroData = selectedMacroData.map(m => {
            const newPart = newPartData.find(p => p["Part ID"] === m.partID && p.호선 === (newLine || m.호선) && p.POR === (newPor || m.POR) && p.SEQ === (newSeq || m.SEQ) && p.PIECS === (newPiecs || m.PIECS));
            return {
                ...m,
                partID: newPart ? newPart["Part ID"] : m.partID,
                호선: newLine || m.호선,
                POR: newPor || m.POR,
                SEQ: newSeq || m.SEQ,
                PIECS: newPiecs || m.PIECS
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
            // Show confirmation popup
            if (confirm('삭제하겠습니까?')) {
                // Get all checked checkboxes
                const checkedBoxes = document.querySelectorAll('#content1Body input[type="checkbox"]:checked');
                
                // Get the IDs of rows to delete
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => {
                    return checkbox.parentElement.parentElement; // Row element
                });

                // Collect (호선, POR, SEQ, PIECS) values to delete
                const identifiersToDelete = rowsToDelete.map(row => ({
                    호선: row.cells[2].textContent,   // Assuming 호선 is in the third cell
                    POR: row.cells[3].textContent,     // Assuming POR is in the fourth cell
                    SEQ: row.cells[4].textContent,     // Assuming SEQ is in the fifth cell
                    PIECS: row.cells[5].textContent    // Assuming PIECS is in the sixth cell
                }));

                // Remove rows from the table
                rowsToDelete.forEach(row => row.remove());

                // Remove from drawingData array
                identifiersToDelete.forEach(identifier => {
                    const index = drawingData.findIndex(item => 
                        item.호선 === identifier.호선 &&
                        item.POR === identifier.POR &&
                        item.SEQ === identifier.SEQ &&
                        item.PIECS === identifier.PIECS
                    );
                    if (index !== -1) {
                        drawingData.splice(index, 1);
                    }
                });

                // Remove related partData and macroData
                identifiersToDelete.forEach(identifier => {
                    // Get parts related to the deleted drawing
                    const partsToDelete = partData.filter(part => 
                        part.호선 === identifier.호선 &&
                        part.POR === identifier.POR &&
                        part.SEQ === identifier.SEQ &&
                        part.PIECS === identifier.PIECS
                    );

                    // Remove parts related to the deleted drawing
                    partData = partData.filter(part => 
                        !(part.호선 === identifier.호선 &&
                        part.POR === identifier.POR &&
                        part.SEQ === identifier.SEQ &&
                        part.PIECS === identifier.PIECS)
                    );

                    // Remove macros related to the deleted parts
                    partsToDelete.forEach(part => {
                        macroData = macroData.filter(macro => 
                            !(macro.partID === part["Part ID"] &&
                              macro.호선 === part.호선 &&
                              macro.POR === part.POR &&
                              macro.SEQ === part.SEQ)
                        );
                    });
                });

                // Update tables display
                localStorage.setItem('drawingData', JSON.stringify(drawingData)); 
                localStorage.setItem('partData', JSON.stringify(partData)); 
                localStorage.setItem('macroData', JSON.stringify(macroData)); 
                updateDrawingTable(drawingData);
                updateMacroTable(macroData);
                 // Ensure this function updates the macro table as well
                updatePartTable([]); // 부재 정보 테이블 비우기
            }
            
        });
    }
    const content2 = document.getElementById('content2');
    content2.addEventListener('click', function(event) {
        if (event.target && event.target.id === 'deletePartButton') {
            // Delete part button clicked
            if (confirm('삭제하겠습니까?')) {
                const checkedBoxes = document.querySelectorAll('#content2Body input[type="checkbox"]:checked');
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => checkbox.parentElement.parentElement);
                const identifiersToDelete = rowsToDelete.map(row => ({
                    PartID: row.cells[2].textContent,
                    자재종류: row.cells[3].textContent,
                    재질: row.cells[4].textContent,
                    호선: selectedDrawingInfo.호선,
                    POR: selectedDrawingInfo.POR,
                    SEQ: selectedDrawingInfo.SEQ,
                    PIECS: selectedDrawingInfo.PIECS
                }));
    
                rowsToDelete.forEach(row => row.remove());
    
                identifiersToDelete.forEach(identifier => {
                    partData = partData.filter(part => 
                        !(part["Part ID"] === identifier.PartID &&
                          part.자재종류 === identifier.자재종류 &&
                          part.재질 === identifier.재질 &&
                          part.호선 === identifier.호선 &&
                          part.POR === identifier.POR &&
                          part.SEQ === identifier.SEQ &&
                          part.PIECS === identifier.PIECS)
                    );
    
                    macroData = macroData.filter(macro => 
                        !(macro.partID === identifier.PartID &&
                          macro.호선 === identifier.호선 &&
                          macro.POR === identifier.POR &&
                          macro.SEQ === identifier.SEQ &&
                          macro.PIECS === identifier.PIECS)
                    );
                });
    
                localStorage.setItem('partData', JSON.stringify(partData));
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);
                updatePartTable(partData);
    
                // 현재 클릭된 도면 정보로 테이블 업데이트
                updateTablesWithSelectedDrawingInfo();
            }
    }});
    document.getElementById('content2').addEventListener('click', function(event) {
        if (event.target && event.target.id === 'deleteMacroButton') {
            if (confirm('선택된 매크로를 삭제하시겠습니까?')) {
                const checkedBoxes = document.querySelectorAll('#content2Body input[type="checkbox"]:checked');
                const rowsToDelete = Array.from(checkedBoxes).map(checkbox => checkbox.parentElement.parentElement);
                
                rowsToDelete.forEach(row => {
                    console.log('삭제할 매크로:', {
                        partID: row.cells[2].textContent,
                        가공위치: row.cells[3].textContent,
                        매크로: row.cells[4].textContent,
                        파라미터: row.cells[5].textContent
                    });
                    const partID = row.cells[2].textContent;
                    const 가공위치 = row.cells[3].textContent;
    
                    // 매크로 데이터에서 삭제
                    macroData = macroData.filter(macro => 
                        !(macro.partID === partID &&
                          macro.가공위치 === 가공위치)
                    );
    
                    // 테이블에서 삭제
                    row.remove();
                });
    
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);
    
                // 클릭된 부재 정보로 부재 테이블 업데이트
                if (selectedPartInfo.호선 && selectedPartInfo.POR && selectedPartInfo.SEQ && selectedPartInfo.PIECS && selectedPartInfo.PartID) {
                    const filteredMacroData = macroData.filter(macro => 
                        macro.호선 === selectedPartInfo.호선 &&
                        macro.POR === selectedPartInfo.POR &&
                        macro.SEQ === selectedPartInfo.SEQ &&
                        macro.PIECS === selectedPartInfo.PIECS &&
                        macro.partID === selectedPartInfo.PartID
                    );
                    updateMacroTable(filteredMacroData);
                }
            }
        }});

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
                    PIECS: rowData.PIECS
                };

                // 콘솔에 호선, POR, SEQ, PIECS 출력
                console.log(`도면정보 클릭됨: 호선=${selectedDrawingInfo.호선}, POR=${selectedDrawingInfo.POR}, SEQ=${selectedDrawingInfo.SEQ}, PIECS=${selectedDrawingInfo.PIECS}`);

                filteredPartData = partData.filter(part => 
                    part.호선 === rowData.호선 && 
                    part.POR === rowData.POR && 
                    part.SEQ === rowData.SEQ && 
                    rowData.PIECS === part.PIECS
                );

                updatePartTable(filteredPartData);
                updatePartInputForm(); // 부재 정보 등록 폼을 표시
            });

            const checkboxTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);
            tr.appendChild(checkboxTd);

            const tdNo = document.createElement('td');
            tdNo.textContent = index + 1; // 순서대로 No 할당
            tr.appendChild(tdNo);

            const headers = ["호선", "POR", "SEQ", "PIECS", "수량", "등록일자"];
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = rowData[header];
                tr.appendChild(td);
            });

            tbody.appendChild(tr);
        });
    }


    function updatePartTable(data = partData) {
        const contentTitle = document.getElementById('content2Title');
        contentTitle.innerHTML = '<span class="title-text">부재정보 (Part List)</span><button class="content-button" id="copyPartButton">복사</button><button class="content-button" id="deletePartButton">삭제</button>';
    
        const tableHeader = document.getElementById('content2Header');
        tableHeader.innerHTML = `
            <tr>
                <th><input type="checkbox" id="checkAllParts"></th>
                <th>No</th>
                <th>Part ID</th>
                <th>자재 종류</th>
                <th>재질</th>
                <th>수량</th>
                <th>가공길이</th>
                <th>전체길이</th>
                <th>중량</th>
                <th>가공수</th>
                <th>등록일자</th>                                  
            </tr>
        `;
    
        const tbody = document.getElementById('content2Body');
        tbody.innerHTML = '';
    
        data.forEach((rowData,index) => {
            const tr = document.createElement('tr');
            tr.classList.add('clickable');
            tr.addEventListener('click', function(event) {
                if (event.target.type === 'checkbox') {
                    return;
                }
                selectedPartInfo = {
                    호선: rowData.호선,
                    POR: rowData.POR,
                    SEQ: rowData.SEQ,
                    PIECS: rowData.PIECS,
                    PartID: rowData["Part ID"]
                };
            
                // 콘솔에 호선, POR, SEQ, PIECS 출력
                console.log(`부재정보 클릭됨: 호선=${selectedPartInfo.호선}, POR=${selectedPartInfo.POR}, SEQ=${selectedPartInfo.SEQ}, PIECS=${selectedPartInfo.PIECS}, PartID=${selectedPartInfo.PartID}`);
            
                const filteredMacroData = macroData.filter(macro => 
                    macro.partID === selectedPartInfo.PartID &&
                    macro.호선 === selectedPartInfo.호선 &&
                    macro.POR === selectedPartInfo.POR &&
                    macro.SEQ === selectedPartInfo.SEQ &&
                    macro.PIECS === selectedPartInfo.PIECS
                );
                updateMacroTable(filteredMacroData);
                updateMacroInputForm();
            });
    
            const checkboxTd = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkboxTd.appendChild(checkbox);
            tr.appendChild(checkboxTd);
            
            const tdNo = document.createElement('td');
            tdNo.textContent = index + 1; // 순서대로 No 할당
            tr.appendChild(tdNo);
            const headers = ["NO", "Part ID", "자재종류", "재질", "수량", "가공길이", "전체길이", "중량", "가공수", "등록일자"];
            headers.forEach(header => {
                const td = document.createElement('td');
                td.textContent = rowData[header];
                tr.appendChild(td);
            });
    
            tbody.appendChild(tr);
        });

        // 복사 버튼 이벤트 리스너 추가
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
                const 등록일자 = selectedRow.cells[10].textContent;
                const { 호선, POR, SEQ, PIECS } = selectedDrawingInfo;

                const newPartID = prompt('새로운 PART ID를 입력하세요:');
                if (!newPartID) {
                    alert('PART ID를 입력해야 합니다.');
                    return;
                }

                const newPart = {
                    NO: partData.length + 1,
                    "Part ID": newPartID,
                    자재종류,
                    재질,
                    수량: parseInt(수량),
                    가공길이: parseInt(가공길이),
                    전체길이: parseInt(전체길이),
                    중량: parseFloat(중량),
                    가공수: parseInt(가공수),
                    등록일자,
                    호선,
                    POR,
                    SEQ,
                    PIECS
                };
                partData.push(newPart);

                const selectedMacroData = macroData.filter(macro => macro.partID === partID && macro.호선 === 호선 && macro.POR === POR && macro.SEQ === SEQ && macro.PIECS === PIECS);
                const newMacroData = selectedMacroData.map(macro => ({
                    ...macro,
                    partID: newPartID,
                    호선,
                    POR,
                    SEQ,
                    PIECS
                }));
                macroData.push(...newMacroData);

                localStorage.setItem('partData', JSON.stringify(partData));
                localStorage.setItem('macroData', JSON.stringify(macroData));
                updateMacroTable(macroData);
                updatePartTable(partData);

                // 현재 클릭된 도면 정보로 테이블 업데이트
                updateTablesWithSelectedDrawingInfo();
            
                });
            }
    }
    function updateMacroTable(data = macroData) {
        const contentTitle = document.getElementById('content2Title');
        contentTitle.innerHTML = '<span class="title-text">가공정보 (cutting list)</span><button <button class="content-button" id=deleteMacroButton"">삭제</button><button class="content-button" id="BackButton">뒤로가기</button>';

        const tableHeader = document.getElementById('content2Header');
        tableHeader.innerHTML = `
            <tr>
                <th><input type="checkbox" id="checkAllMacros"></th>
                <th>No</th>
                <th>Part ID</th>
                <th>가공위치</th>
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

                // 클릭된 매크로 정보를 전역 변수에 저장
                selectedMacroInfo = rowData;
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

        document.getElementById('content2').addEventListener('click', function(event) {
            if (event.target && event.target.id === 'BackButton') {
                if (selectedDrawingInfo) {
                    // Filter partData based on last selected drawing information
                    filteredPartData = partData.filter(part => 
                        part.호선 === selectedDrawingInfo.호선 && 
                        part.POR === selectedDrawingInfo.POR && 
                        part.SEQ === selectedDrawingInfo.SEQ && 
                        part.PIECS === selectedDrawingInfo.PIECS
                    );
                    updatePartTable(filteredPartData);
                }
            }
        });
    }
    
    
    function updatePartInputForm() {
        const partFormContainer = document.getElementById('partFormContainer');
        partFormContainer.innerHTML = `
            <h5>부재 정보 등록</h5>
            <div class="input-group" id="partInputGroup">
                <input type="text" id="partInput1" placeholder="Part ID">
                <input type="text" id="partInput2" placeholder="자재규격">
                <input type="text" id="partInput3" placeholder="재질">
                <input type="text" id="partInput4" placeholder="수량">
                <input type="text" id="partInput5" placeholder="가공길이">
                <button id="addPartButton">등록</button>
                <button id="searchPartButton">조회</button>
            </div>
        `;
    
        document.getElementById('addPartButton').addEventListener('click', function() {
            const partID = document.getElementById('partInput1').value;
            const 자재종류 = document.getElementById('partInput2').value;
            const 재질 = document.getElementById('partInput3').value;
            const 수량 = document.getElementById('partInput4').value;
            const 가공길이 = document.getElementById('partInput5').value;
            const 전체길이 = 가공길이;
            const 중량 = calculateWeight(자재종류, 가공길이);
        
            if (!partID || !자재종류 || !재질 || !수량 || !가공길이) {
                alert('모든 필드를 입력해주세요.');
                return;
            }
            const newPart = {
                NO: partData.length + 1,
                "Part ID": partID,
                자재종류,
                재질,
                수량: parseInt(수량),
                가공길이: parseInt(가공길이),
                전체길이: parseInt(전체길이),
                중량,
                가공수: calculateMacroCount(partID),
                등록일자: new Date().toISOString().split('T')[0],
                호선: selectedDrawingInfo.호선 || '',
                POR: selectedDrawingInfo.POR || '',
                SEQ: selectedDrawingInfo.SEQ || '',
                PIECS: selectedDrawingInfo.PIECS || ''
            };
    
            partData.push(newPart);
            localStorage.setItem('partData', JSON.stringify(partData)); 
            if (selectedDrawingInfo.호선 && selectedDrawingInfo.POR && selectedDrawingInfo.SEQ && selectedDrawingInfo.PIECS) {
                filteredPartData = partData.filter(part => 
                    part.호선 === selectedDrawingInfo.호선 && 
                    part.POR === selectedDrawingInfo.POR && 
                    part.SEQ === selectedDrawingInfo.SEQ && 
                    part.PIECS === selectedDrawingInfo.PIECS
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
            <div class="input-group" id="macroInputGroup">
                <input type="text" id="macroInput2" placeholder="가공위치">
                <input type="text" id="macroInput3" placeholder="매크로">
                <input type="text" id="macroInputA" placeholder="A">
                <input type="text" id="macroInputB" placeholder="B">
                <input type="text" id="macroInputC" placeholder="C">
                <input type="text" id="macroInputD" placeholder="D">
                <input type="text" id="macroInputE" placeholder="E">
                <input type="text" id="macroInputF" placeholder="F">
                <button id="addMacroButton">등록</button>
                <button id="updateMacroButton">수정</button>
            </div>
        `;
    
        document.getElementById('addMacroButton').addEventListener('click', function() {
            const partID = selectedPartInfo.PartID;
            const 호선 = selectedPartInfo.호선;
            const POR = selectedPartInfo.POR;
            const SEQ = selectedPartInfo.SEQ;
            const PIECS = selectedPartInfo.PIECS;
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

            const newMacro = {
                partID,
                호선,
                POR,
                SEQ,
                PIECS,
                NO: macroData.length + 1,
                가공위치,
                매크로,
                파라미터
            };

            macroData.push(newMacro);
            localStorage.setItem('macroData', JSON.stringify(macroData));
            const filteredMacroData = macroData.filter(macro => macro.partID === partID);
            partData = partData.map(part => {
                const 가공수 = calculateMacroCount(part["Part ID"]);
                return { ...part, 가공수 };
            });

            updateMacroTable(filteredMacroData);
            clearMacroInputs();
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

            const macroIndex = macroData.findIndex(macro => macro.partID === partID && macro.호선 === 호선 && macro.POR === POR && macro.SEQ === SEQ && macro.PIECS === PIECS && macro.가공위치 === selectedMacroInfo.가공위치);
            if (macroIndex !== -1) {
                macroData[macroIndex] = {
                    ...macroData[macroIndex],
                    가공위치,
                    매크로,
                    파라미터
                };

                localStorage.setItem('macroData', JSON.stringify(macroData));
                const filteredMacroData = macroData.filter(macro => macro.partID === partID);
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

    function calculateWeight(materialType, length) {
        const weightPerMeter = {    
            "EA 100*100*10T": 29.80,
            "EA 50*50*5T": 14.90
        };
        return weightPerMeter[materialType] * (length / 1000);
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
