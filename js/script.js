document.addEventListener('DOMContentLoaded', function() {
    myFunction();
});

function myFunction() {
    const fileList = document.getElementById('fileList');
    const photoGallery = document.getElementById('photoGallery');
    const historyDiv = document.getElementById('history');

    const files = [
        { name: 'Word, Thesis.docx', path: 'files/word-skripsi.docx' },
        { name: 'Pdf, Thesis.pdf', path: 'files/pdf-skripsi.pdf' },
        { name: 'PPT, Thesis Proposal.pptx', path: 'files/ppt-proposal-skripsi.pptx' },
        { name: 'PPT, Thesis.pptx', path: 'files/ppt-skripsi.pptx' },
        { name: 'Manual Calculation.xlsx', path: 'files/perhitungan-manual.xlsx' }
    ];

    const photos = [
        { name: 'Proposal Seminar', path: 'img/seminar-proposal.jpg' },
        { name: 'Thesis Guidance and Mbkm Research in the Lecturer Room', path: 'img/bimbingan-skripsi-dan-mbkm-riset-di-ruang-dosen.jpg' },
        { name: 'Thesis Guidance & Mbkm Research in the Classroom', path: 'img/bimbingan-skripsi-dan-mbkm-riset-di-ruang-kelas.jpg' },
        { name: 'Two Researcher Friends Mbkm', path: 'img/dua-teman-mbkm-riset.jpg' },
        { name: 'Completed The Thesis Trial', path: 'img/selesai-sidang-taman-kampus.jpg' }
    ];

    const icons = {
        pdf: 'fas fa-file-pdf',
        docx: 'fas fa-file-word',
        xlsx: 'fas fa-file-excel',
        jpg: 'fas fa-file-image',
        jpeg: 'fas fa-file-image',
        png: 'fas fa-file-image',
        ppt: 'fas fa-file-powerpoint',
        pptx: 'fas fa-file-powerpoint',
        default: 'fas fa-file'
    };

    files.forEach(file => {
        const listItem = document.createElement('div');
        listItem.className = 'file-item';
        
        const fileExtension = file.name.split('.').pop().toLowerCase();
        const iconClass = icons[fileExtension] || icons.default;

        const icon = document.createElement('i');
        icon.className = iconClass;
        listItem.appendChild(icon);

        const link = document.createElement('a');
        link.href = file.path;
        link.textContent = file.name;
        link.target = '_blank';
        listItem.appendChild(link);

        fileList.appendChild(listItem);
    });

    photos.forEach(photo => {
        const imgContainer = document.createElement('div');
        imgContainer.className = 'photo-item';

        const img = document.createElement('img');
        img.src = photo.path;
        img.alt = photo.name;
        imgContainer.appendChild(img);

        const name = document.createElement('p');
        name.textContent = photo.name;
        name.style.fontSize = '14px';
        imgContainer.appendChild(name);

        photoGallery.appendChild(imgContainer);
    });

    // Menampilkan formulir untuk mengumpulkan nama pengunjung dan timestamp
    const formHTML = `
        <form id="nameForm">
            <label for="name">Please enter your name if you want my website visitor history and your name will appear below.:</label><br><br>
            <input type="text" id="name" name="name" required><br><br>
            <input type="button" value="Submit" onclick="submitName()">
        </form>
    `;
    historyDiv.innerHTML = formHTML;
}

function submitName() {
    const name = document.getElementById('name').value;
    const timestamp = new Date().toISOString();

    // Kirim data ke Google Sheets menggunakan fetch
    fetch('https://script.google.com/macros/s/AKfycbwCLJQCdw4_o7xSTrdu_UFAzgr4fiLDPRRox5aIJ8UNJmte6bZyTf7jIkEx-wdK_pGH/exec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `name=${encodeURIComponent(name)}&timestamp=${encodeURIComponent(timestamp)}`
    })
    .then(response => {
        if (response.ok) {
            alert('Visitor name saved successfully!');
            document.getElementById('nameForm').reset(); // Reset formulir setelah berhasil dikirim
        } else {
            throw new Error('Failed to save visitor name');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while saving the visitor\'s name');
    });
}
