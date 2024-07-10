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
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'EA015') {
        centerX = canvas.width * position / length;
        var angleRad = parseFloat(A) * (Math.PI / 180);
        var lineLength = centerX / Math.cos(angleRad / 2);

            // Calculate the end points of the lines
        var x1 = centerX + lineLength * Math.sin(angleRad / 2);
        var y1 = 0
        var midX = canvas.width * position / length;
        var midY = canvas.height/2-15 
        var x2 = centerX - lineLength * Math.sin(angleRad / 2);
        var y2 = 0

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(midX, midY);
        // Draw the right line
        context.moveTo(midX, midY);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA016') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = 0
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = 0
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA016') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = 0
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = 0
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA031') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA032') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA033') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA034') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height + +canvas.height*parseFloat(C)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA021') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = 0

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA022') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = startX1
        var endY1 = canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height * parseFloat(B) / height

        var endX3 = canvas.width;
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
    if (type === 'EA023') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = startX1;
        var endY1 = (canvas.height/2) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height/2) + canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
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
    if (type === 'EA024') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = canvas.width;
        var endY1 = canvas.height * parseFloat(B) / height

        var endX2 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height/2)

        var endX3 = canvas.width - canvas.width * parseFloat(C) / length;
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
    if (type === 'EA025') {
        var startX1 = canvas.width;
        var startY1 = 0;

        var endX1 = canvas.width - canvas.width * parseFloat(B) / length;;
        var endY1 = canvas.height/2

        var endX2 = canvas.width - canvas.width * parseFloat(C) / length;
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
    if (type === 'EA101') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = 0
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA102') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - canvas.height * parseFloat(B) / height

        var endX3 = 0;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'EA103') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height/2) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height/2) - canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height/2) -((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'EA104') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = 0;
        var endY1 = canvas.height-canvas.height * parseFloat(B) / height

        var endX2 = canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height/2)

        var endX3 = canvas.width * parseFloat(C) / length;
        var endY3 = 0

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
    if (type === 'EA111') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'EA113') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'EA114') {
        x = canvas.width * position / length;
        y = canvas.height- canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'EA115') {
        centerX = canvas.width * position / length;
        var angleRad = parseFloat(A) * (Math.PI / 180);
        var lineLength = centerX / Math.cos(angleRad / 2);

            // Calculate the end points of the lines
        var x1 = centerX + lineLength * Math.sin(angleRad / 2);
        var y1 = canvas.height
        var midX = canvas.width * position / length;
        var midY = canvas.height-canvas.height/2+15 
        var x2 = centerX - lineLength * Math.sin(angleRad / 2);
        var y2 = canvas.height

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(midX, midY);
        // Draw the right line
        context.moveTo(midX, midY);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA116') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height-canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height-canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = canvas.height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA131') {
        x1 = (canvas.width * position / length);
        y1 = canvas.height-canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length);
        y2 = canvas.height-canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA132') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height-(canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA133') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-(canvas.height*parseFloat(B)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height-(canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA134') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-(canvas.height*parseFloat(B)/height +canvas.height*parseFloat(C)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height-     canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'EA121') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'EA122') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - canvas.height * parseFloat(B) / height

        var endX3 = canvas.width;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'EA123') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = startX1;
        var endY1 = (canvas.height/2) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height/2) - canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
        var endY3 = (canvas.height/2) - ((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'EA124') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width;
        var endY1 = canvas.height - canvas.height * parseFloat(B) / height

        var endX2 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height/2)

        var endX3 = canvas.width - canvas.width * parseFloat(C) / length;
        var endY3 = 0

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
}
function macroCH(type, A, B, C, D, E, F, position, length, materialType) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Calculate height from materialType
    const heightMatch = materialType.match(/\d+(\*\d+)+/);
    let height = 0;

    if (heightMatch) {
        const heightParts = heightMatch[0].split('*');
        if (heightParts.length >= 2) {
            height = parseFloat(heightParts[0]) + parseFloat(heightParts[1]) * 2;
            height1 = parseFloat(heightParts[1])
            height2 = parseFloat(heightParts[0])
         
        }
    }
 
    
    if (type === 'CH001') {
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
    if (type === 'CH002') {
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
    if (type === 'CH003') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.25) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.25) + canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height*0.25) +((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'CH004') {
        console.log('CH004')
        var startX1 = 0;
        var startY1 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height)*2;

        var endX1 = canvas.width * parseFloat(B) / length;
        var endY1 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height);

        var endX2 = canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height);

        var endX3 = canvas.width * parseFloat(A) / length;
        var endY3 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height);

        var endX4 = canvas.width * parseFloat(B) / length;
        var endY4 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height);

        var endX5 = 0;
        var endY5 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height)*2;

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.moveTo(endX2, endY2);
        context.lineTo(endX3, endY3);
        context.moveTo(endX3, endY3);
        context.lineTo(endX4, endY4);
        context.moveTo(endX4, endY4);
        context.lineTo(endX5, endY5);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
        context.closePath();
    }
    if (type === 'CH005') {
        console.log('CH005')
        var startX1 = 0;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(B) / length;
        var endY1 = canvas.height*0.25

        var endX2 = canvas.width * parseFloat(C) / length;
        var endY2 = canvas.height*0.75

        var endX3 = canvas.width * parseFloat(D) / length;
        var endY3 = canvas.height

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
        context.closePath();
    }
    if (type === 'CH011') {
        console.log("CH011")
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
    if (type === 'CH013') {
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
    if (type === 'CH014') {
        x = canvas.width * position / length;
        y = canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'CH016') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = 0
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = 0
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH031') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH032') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH033') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH034') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height + +canvas.height*parseFloat(C)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH021') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = 0

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'CH022') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = startX1
        var endY1 = canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height * parseFloat(B) / height

        var endX3 = canvas.width;
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
    if (type === 'CH023') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.25) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.25) + canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
        var endY3 = (canvas.height*0.25) +((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'CH024') {
        console.log('CH004')
        var startX1 = canvas.width;
        var startY1 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height)*2;

        var endX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var endY1 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height);

        var endX2 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.75)+(canvas.height* parseFloat(B) / height);

        var endX3 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY3 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height);

        var endX4 = canvas.width - canvas.width * parseFloat(B) / length;
        var endY4 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height);

        var endX5 = canvas.width;
        var endY5 = (canvas.height*0.25)-(canvas.height* parseFloat(B) / height)*2;

        context.beginPath();
        context.moveTo(startX1, startY1);
        context.lineTo(endX1, endY1);
        context.moveTo(endX1, endY1);
        context.lineTo(endX2, endY2);
        context.moveTo(endX2, endY2);
        context.lineTo(endX3, endY3);
        context.moveTo(endX3, endY3);
        context.lineTo(endX4, endY4);
        context.moveTo(endX4, endY4);
        context.lineTo(endX5, endY5);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
        context.closePath();
    }
    if (type === 'CH025') {
        console.log('CH025')
        var startX1 = canvas.width;
        var startY1 = 0;

        var endX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var endY1 = canvas.height*0.25

        var endX2 = canvas.width - canvas.width * parseFloat(C) / length;
        var endY2 = canvas.height*0.75

        var endX3 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY3 = canvas.height

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
        context.closePath();
    }
    if (type === 'CH111') {
        console.log(type)
        x = canvas.width * position / length;
        y = (canvas.height*0.25) + canvas.height * parseFloat(B) / height;
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
    if (type === 'CH113') {
        x = canvas.width * position / length;
        y = (canvas.height*0.25) + canvas.height * parseFloat(B) / height;
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
    if (type === 'CH114') {
        x = canvas.width * position / length;
        y = (canvas.height*0.25) + canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'CH131') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y2 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH132') {
        x1 = (canvas.width * position / length)
        y1 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH133') {
        x1 = (canvas.width * position / length)
        y1 = (canvas.height*0.25) + (canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH134') {
        x1 = (canvas.width * position / length)
        y1 = (canvas.height*0.25) + canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = (canvas.height*0.25) + (canvas.height*parseFloat(B)/height + +canvas.height*parseFloat(C)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH201') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = 0
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'CH202') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - canvas.height * parseFloat(B) / height

        var endX3 = 0;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'CH203') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.75) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.75) - canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height*0.75) - ((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'CH211') {
        console.log("CH011")
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'CH213') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'CH214') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'CH216') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height - canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height - canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = canvas.height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH231') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height - canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height - canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH232') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height - canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height - (canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH233') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-(canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height - canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH234') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height - canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height - (canvas.height*parseFloat(B)/height + +canvas.height*parseFloat(C)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'CH221') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'CH222') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - (canvas.height * parseFloat(C) / height)

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - (canvas.height * parseFloat(B) / height)

        var endX3 = canvas.width;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'CH223') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.75) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.75) - canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
        var endY3 = (canvas.height*0.75) - ((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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

}
function macroUA(type, A, B, C, D, E, F, position, length, materialType) {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    // Calculate height from materialType
    const heightMatch = materialType.match(/\d+(\*\d+)?/);
    let height = 0;
    if (heightMatch) {
        const heightParts = heightMatch[0].split('*');
        if (heightParts.length > 0) {
            height = parseFloat(heightParts[0]) + parseFloat(heightParts[1]);
        }
    }
    console.log(height)
    
    if (type === 'UA001') {
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
    if (type === 'UA002') {
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
    if (type === 'UA003') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.6) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.6) + canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height*0.6) +((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA004') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = 0;
        var endY1 = canvas.height * parseFloat(B) / height

        var endX2 = canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.6)

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
    if (type === 'UA005') {
        var startX1 = 0;
        var startY1 = 0;

        var endX1 = canvas.width * parseFloat(B) / length;;
        var endY1 = canvas.height*0.6

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
    if (type === 'UA011') {
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
    if (type === 'UA013') {
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
    if (type === 'UA014') {
        x = canvas.width * position / length;
        y = canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'UA015') {
        centerX = canvas.width * position / length;
        var angleRad = parseFloat(A) * (Math.PI / 180);
        var lineLength = centerX / Math.cos(angleRad / 2);

            // Calculate the end points of the lines
        var x1 = centerX + lineLength * Math.sin(angleRad / 2);
        var y1 = 0
        var midX = canvas.width * position / length;
        var midY = canvas.height*0.6-15 
        var x2 = centerX - lineLength * Math.sin(angleRad / 2);
        var y2 = 0

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(midX, midY);
        // Draw the right line
        context.moveTo(midX, midY);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA016') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = 0
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = 0
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA031') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA032') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA033') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA034') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height*parseFloat(B)/height + +canvas.height*parseFloat(C)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA021') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = 0

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'UA022') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = startX1
        var endY1 = canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height * parseFloat(B) / height

        var endX3 = canvas.width;
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
    if (type === 'UA023') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = 0;

        var endX1 = startX1;
        var endY1 = (canvas.height*0.6) + canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.6) + canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
        var endY3 = (canvas.height*0.6) +((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA024') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = 0;

        var endX1 = canvas.width;
        var endY1 = canvas.height * parseFloat(B) / height

        var endX2 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.6)

        var endX3 = canvas.width - canvas.width * parseFloat(C) / length;
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
    if (type === 'UA025') {
        var startX1 = canvas.width;
        var startY1 = 0;

        var endX1 = canvas.width - canvas.width * parseFloat(B) / length;;
        var endY1 = canvas.height*0.6

        var endX2 = canvas.width - canvas.width * parseFloat(C) / length;
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
    if (type === 'UA101') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = 0
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'UA102') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - canvas.height * parseFloat(B) / height

        var endX3 = 0;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA103') {
        var startX1 = canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width * parseFloat(A) / length;
        var endY1 = (canvas.height*0.6) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.6) - canvas.height * parseFloat(C) / height

        var endX3 = 0;
        var endY3 = (canvas.height*0.6) -((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA104') {
        var startX1 = canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = 0;
        var endY1 = canvas.height-canvas.height * parseFloat(B) / height

        var endX2 = canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.6)

        var endX3 = canvas.width * parseFloat(C) / length;
        var endY3 = 0

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
    if (type === 'UA111') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'UA113') {
        x = canvas.width * position / length;
        y = canvas.height - canvas.height * parseFloat(B) / height;
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
    if (type === 'UA114') {
        x = canvas.width * position / length;
        y = canvas.height- canvas.height * parseFloat(B) / height;
        radiusX = parseFloat(A)+canvas.width * parseFloat(C) / length;
        radiusY = 5
        context.beginPath();
        context.arc(x, y-parseFloat(A)+canvas.height * parseFloat(C) / height, 5, Math.PI, 2 * Math.PI);
        // 상단 직선
        context.moveTo(x - 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x - 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        // 오른쪽 반원
        context.arc(x, y+parseFloat(A)+canvas.height * parseFloat(C) / height, 5, 0, Math.PI);
        // 하단 직선
        context.moveTo(x + 5, y-parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.lineTo(x + 5,  y+parseFloat(A)+canvas.height * parseFloat(C) / height);
        context.strokeStyle = '#000'; // 선 색깔
        context.lineWidth = 2; // 선 두께
        context.stroke();
        context.closePath();
        context.font = '10px Arial';
        context.fillStyle = '#000'; // 글자 색깔
        context.fillText(A, x+10, y + radiusY + 10);
        context.fillText(B, x+10, y + radiusY + 20);
        context.fillText(C, x+10, y + radiusY + 30);
    }
    if (type === 'UA115') {
        centerX = canvas.width * position / length;
        var angleRad = parseFloat(A) * (Math.PI / 180);
        var lineLength = centerX / Math.cos(angleRad / 2);

            // Calculate the end points of the lines
        var x1 = centerX + lineLength * Math.sin(angleRad / 2);
        var y1 = canvas.height
        var midX = canvas.width * position / length;
        var midY = canvas.height-canvas.height*0.4+15
        var x2 = centerX - lineLength * Math.sin(angleRad / 2);
        var y2 = canvas.height

        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(midX, midY);
        // Draw the right line
        context.moveTo(midX, midY);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA116') {
        x1 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y1 = canvas.height
        x2 = (canvas.width * position / length) - (canvas.width*parseFloat(A)/length)/2;
        y2 = canvas.height-canvas.height*parseFloat(B)/height
        x3 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y3 = canvas.height-canvas.height*parseFloat(B)/height
        x4 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length)/2;
        y4 = canvas.height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        // Draw the right line
        context.moveTo(x2, y2);
        context.lineTo(x3, y3);
        context.moveTo(x3, y3);
        context.lineTo(x4, y4);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA131') {
        x1 = (canvas.width * position / length);
        y1 = canvas.height-canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length) + (canvas.width*parseFloat(A)/length);
        y2 = canvas.height-canvas.height*parseFloat(B)/height
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA132') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-canvas.height*parseFloat(B)/height
        x2 = (canvas.width * position / length)
        y2 = canvas.height-(canvas.height*parseFloat(B)/height + canvas.height*parseFloat(A)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA133') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-(canvas.height*parseFloat(B)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height-(canvas.height*parseFloat(B)/height+canvas.height*parseFloat(C)/height) 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA134') {
        x1 = (canvas.width * position / length)
        y1 = canvas.height-(canvas.height*parseFloat(B)/height +canvas.height*parseFloat(C)/height)
        x2 = (canvas.width * position / length) + canvas.width*parseFloat(A)/length
        y2 = canvas.height-     canvas.height*parseFloat(B)/height 
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.strokeStyle = 'black';
        context.stroke();
        context.closePath();
    }
    if (type === 'UA121') {
        // 가공길이를 전체 캔버스 길이로 보고, 가공위치에 선을 그림
        var startX = canvas.width - canvas.width * parseFloat(A) / length
        var startY = canvas.height

        // endX와 endY는 선을 그릴 끝 지점
        var endX = canvas.width
        var endY = canvas.height - canvas.height * parseFloat(B) / height

        // Draw the line based on coordinates A and height
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = '#000'; // Set the line color
        context.lineWidth = 2; // Set the line width
        context.stroke();
    }
    if (type === 'UA122') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = startX1
        var endY1 = canvas.height - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = canvas.height - canvas.height * parseFloat(B) / height

        var endX3 = canvas.width;
        var endY3 = canvas.height - ((canvas.height * parseFloat(B) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA123') {
        var startX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var startY1 = canvas.height;

        var endX1 = startX1;
        var endY1 = (canvas.height*0.6) - canvas.height * parseFloat(C) / height

        var endX2 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY2 = (canvas.height*0.6) - canvas.height * parseFloat(C) / height

        var endX3 = canvas.width;
        var endY3 = (canvas.height*0.6) - ((canvas.height * parseFloat(C) / height)+(canvas.height * parseFloat(D) / height))

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
    if (type === 'UA124') {
        var startX1 = canvas.width - canvas.width * parseFloat(A) / length;
        var startY1 = canvas.height;

        var endX1 = canvas.width;
        var endY1 = canvas.height - canvas.height * parseFloat(B) / height

        var endX2 = canvas.width - canvas.width * parseFloat(A) / length;
        var endY2 = (canvas.height*0.6)

        var endX3 = canvas.width - canvas.width * parseFloat(C) / length;
        var endY3 = 0

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
}
function macroSP(type, A, B, C, D, E, F, position, length, materialType){
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    var smallSectionHeight = canvas.height / 7; // Height for 하1 and 하2
    var largeSectionHeight = (canvas.height - 2 * smallSectionHeight) / 3; // Height for 우, 상, 좌


    // Calculate height from materialType
    const heightMatch = materialType.match(/\d+(\*\d+)+/);
    let height = 0;

    if (heightMatch) {
        const heightParts = heightMatch[0].split('*');
        if (heightParts.length >= 2) {
            height = parseFloat(heightParts[0]) + parseFloat(heightParts[1]);
         
        }
    }
    if (type === 'SP046') {
        console.log('CH005')
        var startX1 = 0;
        var startY1 = smallSectionHeight;

        var endX1 = canvas.width * parseFloat(B) / length;
        var endY1 = smallSectionHeight + largeSectionHeight

        var endX2 = canvas.width * parseFloat(C) / length;
        var endY2 = smallSectionHeight + 2*largeSectionHeight

        var endX3 = canvas.width * parseFloat(D) / length;
        var endY3 = smallSectionHeight + 3 *largeSectionHeight

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
        context.closePath();
    }
    if (type === 'SP056') {
        console.log('CH025')
        var startX1 = canvas.width;
        var startY1 = smallSectionHeight

        var endX1 = canvas.width - canvas.width * parseFloat(B) / length;
        var endY1 = smallSectionHeight + largeSectionHeight

        var endX2 = canvas.width - canvas.width * parseFloat(C) / length;
        var endY2 = smallSectionHeight + 2* largeSectionHeight

        var endX3 = canvas.width - canvas.width * parseFloat(D) / length;
        var endY3 = smallSectionHeight + 3*largeSectionHeight

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
        context.closePath();
    }
}
