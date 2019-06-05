imageInput.addEventListener('change', e => {
    let formData = new FormData();
    formData.append('xxx',e.target.files[0]);
    $.ajax({
        url: 'yyy',
        data: formData,
        processData: false,
        contentType: false,
        type: 'POST'
    })
    e.target.value='';
})