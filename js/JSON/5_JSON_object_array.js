var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        console.log(data);
    
    }
};
xmlhttp.open("GET", "1_Data.json", true);
xmlhttp.send();


