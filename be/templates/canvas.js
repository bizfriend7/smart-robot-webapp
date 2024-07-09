window.onload = function() {
    // 페이지 로드 시 호출할 함수를 지정합니다.
    Info_EA();
};

function toggleHiddenClass(showClass) {
    const containers = ['.canvas-text-EA', '.canvas-text-CH', '.canvas-text-HB', '.canvas-text-PI', '.canvas-text-IB','.canvas-text-UA','.canvas-text-SP'];
    containers.forEach(container => {
        const element = document.querySelector(container);
        if (container === showClass) {
            element.classList.remove('hidden');
        } else {
            element.classList.add('hidden');
        }
    });
}

function Info_EA() {
    // Show the EA text boxes and hide the others
    toggleHiddenClass('.canvas-text-EA');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the center of the canvas
    var centerY = canvas.height / 2;

    // Draw a horizontal line in the center of the canvas
    context.beginPath();
    context.moveTo(0, centerY);
    context.lineTo(canvas.width, centerY);
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1; // Line width
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-EA');
    var sectionHeight = canvas.height / 2;
    textBoxes.forEach(function(box) {
        box.style.height = sectionHeight + 'px';
    });
}

function Info_CH() {
    // Show the CH text boxes and hide the others
    toggleHiddenClass('.canvas-text-CH');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the height of each section
    var topSectionHeight = canvas.height * 0.25;
    var middleSectionHeight = canvas.height * 0.50;
    var bottomSectionHeight = canvas.height * 0.25;

    // Set the line style for solid lines
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1.5; // Thicker line width
    context.setLineDash([]); // Solid line

    // Draw the top horizontal line (dividing 상 and 중)
    context.beginPath();
    context.moveTo(0, topSectionHeight);
    context.lineTo(canvas.width, topSectionHeight);
    context.stroke();

    // Draw the bottom horizontal line (dividing 중 and 하)
    context.beginPath();
    context.moveTo(0, topSectionHeight + middleSectionHeight);
    context.lineTo(canvas.width, topSectionHeight + middleSectionHeight);
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-CH');
    textBoxes[0].style.height = topSectionHeight + 'px';
    textBoxes[1].style.height = middleSectionHeight + 'px';
    textBoxes[2].style.height = bottomSectionHeight + 'px';
}

function Info_HB() {
    // Show the HB text boxes and hide the others
    toggleHiddenClass('.canvas-text-HB');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the height of each section
    var sectionHeight = canvas.height / 3;

    // Set the line style for dashed lines
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1.5; // Thicker line width
    context.setLineDash([2, 2]); // Smaller and more frequent dashed line

    // Draw the dashed line in the middle of the top section
    context.beginPath();
    context.moveTo(0, sectionHeight / 2);
    context.lineTo(canvas.width, sectionHeight / 2);
    context.stroke();

    // Draw the dashed line in the middle of the bottom section
    context.beginPath();
    context.moveTo(0, sectionHeight * 2.5);
    context.lineTo(canvas.width, sectionHeight * 2.5);
    context.stroke();

    // Draw the solid lines to separate sections
    context.setLineDash([]); // Solid line
    context.beginPath();
    context.moveTo(0, sectionHeight);
    context.lineTo(canvas.width, sectionHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(0, sectionHeight * 2);
    context.lineTo(canvas.width, sectionHeight * 2);
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-HB');
    textBoxes.forEach(function(box) {
        box.style.height = sectionHeight + 'px';
    });
}

function Info_PI() {
    // Show the PI text boxes and hide the others
    toggleHiddenClass('.canvas-text-PI');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the height of each section
    var halfHeight = canvas.height / 2;
    var quarterHeight = halfHeight / 4;

    // Set the line style for dashed lines
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1.5; // Thicker line width
    context.setLineDash([2, 2]); // Smaller and more frequent dashed line

    // Draw the dashed lines in the upper half
    for (var i = 1; i <= 3; i++) {
        context.beginPath();
        context.moveTo(0, i * quarterHeight);
        context.lineTo(canvas.width, i * quarterHeight);
        context.stroke();
    }

    // Draw the dashed lines in the lower half
    for (var j = 1; j <= 3; j++) {
        context.beginPath();
        context.moveTo(0, halfHeight + j * quarterHeight);
        context.lineTo(canvas.width, halfHeight + j * quarterHeight);
        context.stroke();
    }

    // Draw the more prominent dashed line to separate upper and lower halves
    context.strokeStyle = '#666'; // Darker gray color
    context.lineWidth = 2; // Thicker line width
    context.setLineDash([2, 2]); // Smaller and more frequent dashed line
    context.beginPath();
    context.moveTo(0, halfHeight);
    context.lineTo(canvas.width, halfHeight);
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-PI');
    textBoxes.forEach(function(box) {
        box.style.height = halfHeight + 'px';
    });
}

function Info_IB() {
    // Show the IB text boxes and hide the others
    toggleHiddenClass('.canvas-text-IB');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the height of each section
    var sectionHeight = canvas.height / 3;
    var middleSectionHeight = sectionHeight * 1.2;
    var otherSectionHeight = (canvas.height - middleSectionHeight) / 2;

    // Set the line style for dashed lines
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1.5; // Thicker line width
    context.setLineDash([2, 2]); // Smaller and more frequent dashed line

    // Draw the dashed line in the middle of the top section
    context.beginPath();
    context.moveTo(0, otherSectionHeight / 2);
    context.lineTo(canvas.width, otherSectionHeight / 2);
    context.stroke();

    // Draw the dashed line in the middle of the bottom section
    context.beginPath();
    context.moveTo(0, otherSectionHeight + middleSectionHeight + otherSectionHeight / 2);
    context.lineTo(canvas.width, otherSectionHeight + middleSectionHeight + otherSectionHeight / 2);
    context.stroke();

    // Draw the solid lines to separate sections
    context.setLineDash([]); // Solid line
    context.beginPath();
    context.moveTo(0, otherSectionHeight);
    context.lineTo(canvas.width, otherSectionHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(0, otherSectionHeight + middleSectionHeight);
    context.lineTo(canvas.width, otherSectionHeight + middleSectionHeight);
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-IB');
    textBoxes[0].style.height = otherSectionHeight + 'px';
    textBoxes[1].style.height = middleSectionHeight + 'px';
    textBoxes[2].style.height = otherSectionHeight + 'px';
}
function Info_UA() {
    // Show the UA text boxes and hide the others
    toggleHiddenClass('.canvas-text-UA');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the height of each section
    var upperSectionHeight = canvas.height * 0.6;
    var lowerSectionHeight = canvas.height * 0.4;

    // Draw the horizontal line separating upper and lower sections
    context.beginPath();
    context.moveTo(0, upperSectionHeight);
    context.lineTo(canvas.width, upperSectionHeight);
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1.5; // Thicker line width
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-UA');
    textBoxes[0].style.height = upperSectionHeight + 'px';
    textBoxes[1].style.height = lowerSectionHeight + 'px';
}
function Info_SP() {
    // Show the SP text boxes and hide the others
    toggleHiddenClass('.canvas-text-SP');

    // Get the canvas element and its context
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate the width and height of each section
    var height = canvas.height;
    var width = canvas.width;

    var smallSectionHeight = height / 7; // Height for 하1 and 하2
    var largeSectionHeight = (height - 2 * smallSectionHeight) / 3; // Height for 우, 상, 좌

    // Draw horizontal lines
    context.beginPath();
    context.moveTo(0, smallSectionHeight);
    context.lineTo(width, smallSectionHeight);
    context.strokeStyle = '#999'; // Darker gray color
    context.lineWidth = 1; // Line width
    context.stroke();

    context.beginPath();
    context.moveTo(0, smallSectionHeight + largeSectionHeight);
    context.lineTo(width, smallSectionHeight + largeSectionHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(0, smallSectionHeight + 2 * largeSectionHeight);
    context.lineTo(width, smallSectionHeight + 2 * largeSectionHeight);
    context.stroke();

    context.beginPath();
    context.moveTo(0, smallSectionHeight + 3 * largeSectionHeight);
    context.lineTo(width, smallSectionHeight + 3 * largeSectionHeight);
    context.stroke();

    // Adjust the height of the text boxes
    var textBoxes = document.querySelectorAll('.canvas-text-box-SP');
    textBoxes[0].style.height = smallSectionHeight + 'px'; // 하1
    textBoxes[1].style.height = largeSectionHeight + 'px'; // 우
    textBoxes[2].style.height = largeSectionHeight + 'px'; // 상
    textBoxes[3].style.height = largeSectionHeight + 'px'; // 좌
    textBoxes[4].style.height = smallSectionHeight + 'px'; // 하2
}

// 매크로 그리기 시작

function macroEA(type, A, B, C, D, E, F, position, length, materialType) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Calculate height from materialType
    const heightMatch = materialType.match(/\d+(\*\d+)?/);
    let height = 0;
    if (heightMatch) {
        const heightParts = heightMatch[0].split('*');
        if (heightParts.length > 0) {
            height = parseFloat(heightParts[0]) * 2;
        }
    }
    console.log(height)
    
    if (type === 'EA001') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width * parseFloat(A) / length
        var startY = 0

        // endX와 endY는 선을 그릴 끝 지점
        var endX = 0
        var endY = canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA002') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = startX1
        var endY1 = canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height * parseFloat(B) / height

        var endX3 = 0;
        var endY3 = (canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height)

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.moveTo(endX2, endY2);
        context.lineTo(endX3, endY3);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA003') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height/2) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height/2) + canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height/2) +((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.moveTo(endX2, endY2);
        context.lineTo(endX3, endY3);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA004') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = 0;
        var endY1 = canvas.height * parseFloat(B) / height

        var endX2 = canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height/2)

        var endX3 = canvas.width * parseFloat(C) / length;
        var endY3 = (canvas.height)

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.moveTo(endX2, endY2);
        context.lineTo(endX3, endY3);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA005') {
        var startX1 = 0;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(B) / length;;
        var endY1 = canvas.height/2

        var endX2 = canvas.width * parseFloat(C) / length;
        var endY2 = (canvas.height)

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA011') {
        x = canvas.width * position / length;
        y = canvas.height * parseFloat(B) / height;
        radius = parseFloat(A);
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x, y + radius + 10);

    }
    if (type === 'EA013') {
        x = canvas.width * position / length;
        y = canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x - parseFloat(A)+canvas.width * parseFloat(C) / length, y, 5, 0.5 * Math.PI, 1.5 * Math.PI);
        // 상단 직선
        context.moveTo(x - parseFloat(A)+canvas.width * parseFloat(C) / length, y - 5);
        context.lineTo(x + parseFloat(A)+canvas.width * parseFloat(C) / length, y - 5);
        // 오른쪽 반원
        context.arc(x + parseFloat(A)+canvas.width * parseFloat(C) / length, y, 5, 1.5 * Math.PI, 0.5 * Math.PI);
        // 하단 직선
        context.moveTo(x + parseFloat(A)+canvas.width * parseFloat(C) / length, y + 5);
        context.lineTo(x - parseFloat(A)+canvas.width * parseFloat(C) / length, y + 5);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x, y + radiusY + 10);
        context.fillText(B, x, y + radiusY + 20);
        context.fillText(C, x, y + radiusY + 30);
    }
    if (type === 'EA014') {
        x = canvas.width * position / length;
        y = canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height   , 5, 1 * Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, y, 5, 0 * Math.PI, 1 * Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x, y + radiusY + 10);
        context.fillText(B, x, y + radiusY + 20);
        context.fillText(C, x, y + radiusY + 30);
    }
}