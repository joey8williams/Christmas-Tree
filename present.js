window.onload = buildPresents;

function buildPresents(){    
    var presentArea = document.getElementById('present-area');
    var remainingWidth = presentArea.offsetWidth;
    var totalWidth = presentArea.offsetWidth;
    var totalHeight = presentArea.offsetHeight;
    
    while(remainingWidth >= 0){
        var newPresent = document.createElement("div");
        var presentWidth = getPresentWidth(totalWidth);
        var presentHeight = getPresentHeight(totalHeight);
        var presentSpacing = getPresentSpacing();

        newPresent.style.width = presentWidth;
        newPresent.style.height = presentHeight;
        newPresent.style.marginLeft = presentSpacing / 2 + 'px';
        newPresent.style.marginRight = presentSpacing /2 + 'px';
        newPresent.style.backgroundColor = getRandomColor();

        remainingWidth = remainingWidth - presentWidth - presentSpacing;
        

        newPresent.classList.add("present");
        presentArea.appendChild(newPresent);
        buildRibbon(newPresent);
        buildTag(newPresent);    
    }
}

function buildTag(present){
    var names = ['Adam', 'Carl', 'Joey', 'John', 'Jon', 'Rohini', 'Ken', 'Burns', 'Venkata', 'Durga', 'Akash', 'Matt'];    
    var newTag = document.createElement("div");
    var randomAngle = Math.floor(Math.random() * 90);
    var bouding = present.getBoundingClientRect();
    var top = bouding.y + 20;

    newTag.classList.add("gift-tag");
    
    newTag.innerText = names[Math.floor(Math.random() * names.length)];
    
    newTag.style.top = Math.floor(top) + "px";
    newTag.style.transform = "rotate("+randomAngle+"deg)";

    present.appendChild(newTag);
}

function buildRibbon(present){
    var numberOfRibbons = Math.floor(Math.random() * 3);
    var randomAngle = Math.floor(Math.random() * 15) * (Math.random() < 0.5 ? -1 : 1);

    for(var i = 0; i < numberOfRibbons; i++){
        var newRibbon = document.createElement("div");

        newRibbon.style.left = Math.random() * 70 + "%";
        newRibbon.style.backgroundColor = getRandomColor();
        newRibbon.style.width = getRandomRibbonWidth();

        newRibbon.style.transform = "rotate("+randomAngle+"deg)";

        newRibbon.classList.add("ribbon");
        present.appendChild(newRibbon);
    }
}

function getRandomRibbonWidth(){
    var value = Math.random() * 20;
    if(value < 5){
        return 5;
    }
    return value;
}

function getRandomColor() {

    var colorsToUse = [0, 255];
    var r, g, b = 0;
    var sum = 0;

    //To prevent black and white. 
    while(sum === 0 || sum === (255 * 3)){
        r = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];
        g = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];
        b = colorsToUse[Math.floor(Math.random() * colorsToUse.length)];

        sum = r + g + b;
    }

    return rgbToHex(r, g, b);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



function getPresentSpacing(){
    return Math.random() * 20;
}

function getPresentWidth(totalWidth){
    var value = totalWidth * (getRandomInt(30) * 0.01);

    if(value < 20){
        return 20;
    }else{
        return value;
    }

}

function getPresentHeight(totalHeight){
    var value = Math.floor(Math.random() * totalHeight)

    if(value < 40){
        return 40;
    }

    return value;
}

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}