var sixfs = [
    {
        "icon": "sixfs-food.svg",
        "text": "eat food",
        "color": "#ee6a7c",
        "link": "food"
    },
    {
        "icon": "sixfs-filter.svg",
        "text": "breathe air",
        "color": "#195ba7",
        "link": "filter"
    },
    {
        "icon": "sixfs-filter.svg",
        "text": "drink water",
        "color": "#195ba7",
        "link": "filter"
    },
    {
        "icon": "sixfs-fiberfuel.svg",
        "text": "wear clothes",
        "color": "#fac718",
        "link": "fiber"
    },
    {
        "icon": "sixfs-foundation.svg",
        "text": "live in a shelter",
        "color": "#544d50",
        "link": "foundation"
    },
    {
        "icon": "sixfs-farmaceuticals.svg",
        "text": "use medicine",
        "color": "#fa6a33",
        "link": "farmaceuticals"
    },
    {
        "icon": "sixfs-fun.svg",
        "text": "enjoy the outdoors",
        "color": "#36ae99",
        "link": "fun"
    },
];

var index = 0;
var icon = document.getElementById('sixf-icon');
var text = document.getElementById('sixf-change-text');
var btn = document.getElementById('sixf-link');
setInterval(change, 2500);

function change() {
    icon.src = "/imgs/sixf/"+sixfs[index].icon;
    text.innerHTML = sixfs[index].text;
    text.style.color = sixfs[index].color;
    btn.style.backgroundColor = sixfs[index].color;
    btn.href = sixfs[index].link;
    index++;
    if (index >= sixfs.length) {
        index = 0;
    }
}