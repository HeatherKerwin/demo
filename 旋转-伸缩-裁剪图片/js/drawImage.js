
function compressImg(imgUrl){
    var img2=new Image();
    img2.src = imgUrl;
    if (img2.complete == true) {

        var w = img2.width;
        var h = img2.height;
        //alert(w);
        if (w > 20000) {
            w = w / 21;
            h = h / 21;
        }
        else if (w > 19000) {
            w = w / 20;
            h = h / 20;
        }
        else if (w > 18000) {
            w = w / 19;
            h = h / 19;
        }
        else if (w > 17000) {
            w = w / 18;
            h = h / 18;
        }
        else  if (w > 16000) {
            w = w / 17;
            h = h / 17;
        }
        else if (w > 15000) {
            w = w / 16;
            h = h / 16;
        }
        else if (w > 14000) {
            w = w / 15;
            h = h / 15;
        }
        else if (w > 13000) {
            w = w / 14;
            h = h / 14;
        }
        else if (w > 12000) {
            w = w / 13;
            h = h / 13;
        }
        else if (w > 11000) {
            w = w / 12;
            h = h / 12;
        }
        else if (w > 10000) {
            w = w / 11;
            h = h / 11;
        }
        else if (w > 9000) {
            w = w / 10;
            h = h / 10;
        }
        else if (w > 8000) {
            w = w / 9;
            h = h / 9;
        }
        else if (w > 7000) {
            w = w / 9;
            h = h / 9;
        }
        else if (w > 6000) {
            w = w / 8;
            h = h / 8;
        }
        else if (w > 5000) {
            w = w / 7;
            h = h / 7;
        }
        else if (w > 4000) {
            w = w / 6;
            h = h / 6;
        }
        else if (w > 3000) {
            w = w / 5;
            h = h / 5;
        }
        else if (w > 2000) {
            w = w / 4;
            h = h / 4;
        }
        else if (w > 1000) {
            w = w / 3;
            h = h / 3;
        }
        var scale = w / h;
        h = w / scale;
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        $(canvas).attr({
            width: w,
            height: h
        });
        console.log("img2"+img2);
        ctx.drawImage(img2, 0, 0, w, h);
        var base64Code = canvas.toDataURL('image/jpeg', 0.8);
        console.log("base64Code"+base64Code);
        return base64Code;
    }else{
        console.log("?img2="+img2);
        return compressImg1(img2);
    }
}

function compressImg1(img2){
    if (img2.complete == true) {
        var w = img2.width;
        var h = img2.height;
        if (w > 20000) {
            w = w / 21;
            h = h / 21;
        }
        else if (w > 19000) {
            w = w / 20;
            h = h / 20;
        }
        else if (w > 18000) {
            w = w / 19;
            h = h / 19;
        }
        else if (w > 17000) {
            w = w / 18;
            h = h / 18;
        }
        else  if (w > 16000) {
            w = w / 17;
            h = h / 17;
        }
        else if (w > 15000) {
            w = w / 16;
            h = h / 16;
        }
        else if (w > 14000) {
            w = w / 15;
            h = h / 15;
        }
        else if (w > 13000) {
            w = w / 14;
            h = h / 14;
        }
        else if (w > 12000) {
            w = w / 13;
            h = h / 13;
        }
        else if (w > 11000) {
            w = w / 12;
            h = h / 12;
        }
        else if (w > 10000) {
            w = w / 11;
            h = h / 11;
        }
        else if (w > 9000) {
            w = w / 10;
            h = h / 10;
        }
        else if (w > 8000) {
            w = w / 9;
            h = h / 9;
        }
        else if (w > 7000) {
            w = w / 9;
            h = h / 9;
        }
        else if (w > 6000) {
            w = w / 8;
            h = h / 8;
        }
        else if (w > 5000) {
            w = w / 7;
            h = h / 7;
        }
        else if (w > 4000) {
            w = w / 6;
            h = h / 6;
        }
        else if (w > 3000) {
            w = w / 5;
            h = h / 5;
        }
        else if (w > 2000) {
            w = w / 4;
            h = h / 4;
        }
        else if (w > 1000) {
            w = w / 3;
            h = h / 3;
        }
        var scale = w / h;
        h = w / scale;
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        $(canvas).attr({
            width: w,
            height: h
        });
        ctx.drawImage(img2, 0, 0, w, h);
        var base64Code = canvas.toDataURL('image/jpeg', 0.7);
        return base64Code;
    }else{
        return compressImg1(img2);
    }
}