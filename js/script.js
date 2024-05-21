document.addEventListener('DOMContentLoaded', function() {
    const fileList = document.getElementById('fileList');
    const files = [
        { name: 'Word Skripsi.docx', path: 'files/word-skripsi.docx' },
        { name: 'Pdf Skripsi.pdf', path: 'files/pdf-skripsi.pdf' },
        { name: 'PPT Proposal Skripsi.pptx', path: 'files/ppt-proposal-skripsi.pptx' },
        { name: 'PPT Skripsi.pptx', path: 'files/ppt-skripsi.pptx' },
        { name: 'Perhitungan Manual.xlsx', path: 'files/perhitungan-manual.xlsx' }
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
});
