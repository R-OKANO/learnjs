const DOWNLOAD_TYPE_HTML = 1;
const DOWNLOAD_TYPE_MD = 2;

function saveHtml() {
    var doctype  = '<!DOCTYPE html>';
    var htmlTag = '<html lang="ja">';
    var header = '<head>\n<meta charset="UTF-8">\n<title>Title</title>\n</head>';
    var body = '<body>\n' + marked(document.getElementById('input').value) + '</body>';

    // ソースコードを Blob オブジェクトに変換してURLを取得
    var blob    = new Blob([doctype, '\n', htmlTag, '\n', header,'\n', body, '\n</html>\n'],{type:"text/plain"});
    // ダウンロード
    download(blob,DOWNLOAD_TYPE_HTML);
};

function saveMd() {
    // ソースコードを Blob オブジェクトに変換してURLを取得
    var blob    = new Blob([document.getElementById('input').value,'\n'],{type:"text/plain"});
    // ダウンロード
    download(blob,DOWNLOAD_TYPE_MD);
};

function download(blob,type) {
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.target = '_blank';
    if(type == DOWNLOAD_TYPE_HTML){
        a.download = 'download.html';
    }
    else if(type == DOWNLOAD_TYPE_MD){
        a.download = 'download.md';
    }
    else{
        a.download = 'download.txt';
    }
    a.click();
}