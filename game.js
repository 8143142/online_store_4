const puzzlePieces = document.querySelectorAll('.puzzle-piece');
const dropZones = document.querySelectorAll('.drop-zone');
const verificationMessage = document.getElementById('verification-message');
const resetButton = document.getElementById('reset-button');

let isVerified = false;

// Add drag and drop event listeners for puzzle pieces
puzzlePieces.forEach(piece => {
    piece.addEventListener('dragstart', dragStart);
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('dragenter', dragEnter);
    zone.addEventListener('dragleave', dragLeave);
    zone.addEventListener('drop', dragDrop);
});

// Drag and drop functions
function dragStart(e) {
    e.dataTransfer.setData('text', e.target.id);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
}

function dragLeave(e) {
    // You can add styles for visual feedback when dragging over a drop zone
}

function dragDrop(e) {
    e.preventDefault();
    const droppedItemId = e.dataTransfer.getData('text');
    const dropZoneType = e.target.getAttribute('data-type');

    if (droppedItemId && droppedItemId.includes('item') && dropZoneType) {
        const draggedItem = document.getElementById(droppedItemId);

        if (draggedItem.getAttribute('data-type') === dropZoneType) {
            e.target.appendChild(draggedItem);
        }
    }

    checkVerification();
}

function checkVerification() {
    const allPiecesPlaced = [...puzzlePieces].every(piece => piece.parentElement.className === 'drop-zone');

    if (allPiecesPlaced) {
        isVerified = true;
        verificationMessage.textContent = 'Verification successful! You are not a robot.';
    }
}

// Reset function
resetButton.addEventListener('click', () => {
    isVerified = false;
    verificationMessage.textContent = '';
    puzzlePieces.forEach(piece => piece.parentElement.removeChild(piece));
  });