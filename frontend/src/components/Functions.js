const { REST_API_URL } = process.env;

function createFile(dataJSON) {
    let a = document.createElement('a');
    let file = new Blob([dataJSON], {
        type: 'application/json',
    });
    a.href = URL.createObjectURL(file);
    a.download = 'my-figma.json';
    a.click();
}

function createConfig(figmaUserToken, figmaFileID) {
    let data = JSON.stringify({
        'figmaUserToken': figmaUserToken,
        'figmaFileID': figmaFileID,
    });

    let config = {
        method: 'post',
        url: REST_API_URL + '/json',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data,
    };
    return config;
}

export { createFile, createConfig };
