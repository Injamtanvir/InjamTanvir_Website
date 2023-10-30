function showCode(language) {
    const cCode = document.getElementById('c-code');
    const pythonCode = document.getElementById('python-code');

    if (language === 'c') {
        cCode.classList.remove('hidden');
        pythonCode.classList.add('hidden');
    } else if (language === 'python') {
        pythonCode.classList.remove('hidden');
        cCode.classList.add('hidden');
    }
}
