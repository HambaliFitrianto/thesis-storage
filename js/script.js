document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('fileList');
    const photoGallery = document.getElementById('photoGallery');

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
        name.style.fontSize = '14px'; // Atur ukuran teks di sini
        imgContainer.appendChild(name);

        photoGallery.appendChild(imgContainer);
    });
});
