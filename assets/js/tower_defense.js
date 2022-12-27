var world = [
    [2,2,2,2,2,2,2,2,1,1,1,1,1],
    [2,2,2,2,2,2,2,2,1,0,0,0,1],
    [2,2,2,2,1,1,1,1,1,0,1,0,1],
    [2,2,2,2,1,0,0,0,1,0,1,0,1],
    [1,1,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,0,1,0,0,0,1,0,1],
    [1,0,1,0,1,0,1,1,1,1,1,0,0],
    [1,0,1,0,1,0,1,2,2,2,1,1,1],
    [0,0,1,0,1,0,1,2,2,2,2,2,2],
    [1,1,1,0,1,0,1,1,2,2,2,2,2],
    [2,2,1,0,0,0,1,1,2,2,2,2,2],
    [2,2,1,1,1,1,1,1,2,2,2,2,2]
];

var world2 = [
    [2,2,2,2,2,2,2,1,1,1,1,1,2],
    [1,1,1,1,2,2,2,1,0,0,0,1,2],
    [0,0,0,1,2,1,1,1,0,1,0,1,2],
    [1,1,0,1,2,1,0,0,0,1,0,1,2],
    [2,1,0,1,1,1,0,1,1,1,0,1,2],
    [2,1,0,0,0,1,0,1,1,0,0,1,2],
    [2,1,1,1,0,1,0,1,0,0,1,1,2],
    [2,2,2,1,0,1,0,1,0,1,1,2,2],
    [2,2,2,1,0,1,0,1,0,1,1,1,1],
    [2,2,2,1,0,1,0,1,0,0,0,0,1],
    [2,2,2,1,0,1,0,1,1,1,1,0,1],
    [2,2,2,1,0,0,0,1,2,2,1,0,0],
    [2,2,2,1,1,1,1,1,2,2,1,1,1]
];

var world3 = [
    [2,2,2,1,1,1,1,1,2,2,2,2,2],
    [2,2,2,1,0,0,0,1,2,1,1,1,1],
    [2,2,2,1,0,1,0,1,2,1,0,0,0],
    [2,2,2,1,0,1,0,1,1,1,0,1,1],
    [1,1,1,1,0,1,0,0,1,1,0,1,2],
    [0,0,0,1,0,1,1,0,1,1,0,1,2],
    [1,1,0,1,0,1,1,0,1,1,0,1,2],
    [2,1,0,1,0,1,1,0,1,0,0,1,2],
    [2,1,0,1,0,1,1,0,1,0,1,1,2],
    [2,1,0,1,0,1,1,0,1,0,1,2,2],
    [2,1,0,0,0,1,1,0,0,0,1,2,2],
    [2,1,1,1,1,1,1,1,1,1,1,2,2]
];

var world4 = [
    [2,2,2,2,1,1,1,1,1,2,2,2,2],
    [2,2,2,2,1,0,0,0,1,2,2,2,2],
    [1,1,1,2,1,0,1,0,1,2,2,2,2],
    [0,0,1,2,1,0,1,0,1,1,1,1,1],
    [1,0,1,2,1,0,1,0,1,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1],
    [1,0,1,0,0,0,1,0,1,0,1,0,1],
    [1,0,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,0,1,2,1,0,1,0,1,0,1],
    [1,0,1,0,1,2,1,0,1,0,1,0,0],
    [1,0,0,0,1,2,1,0,1,0,1,1,1],
    [1,1,1,1,1,2,1,0,0,0,1,2,2],
    [2,2,2,2,2,2,1,1,1,1,1,2,2]    
];

var world5 = [
    [2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,1,1,1,1,1,1,1,1,1,2],
    [2,2,2,1,0,0,0,1,0,0,0,1,2],
    [2,2,2,1,0,1,0,1,0,1,0,1,2],
    [2,2,2,1,0,1,0,1,0,1,0,1,2],
    [1,1,1,1,0,1,0,1,0,1,0,1,2],
    [0,0,0,1,0,1,0,1,0,1,0,1,2],
    [1,1,0,1,0,1,0,1,0,1,0,1,2],
    [2,1,0,1,0,1,0,0,0,1,0,1,2],
    [2,1,0,1,0,1,1,1,1,1,0,1,2],
    [2,1,0,1,0,1,2,2,2,1,0,1,1],
    [2,1,0,0,0,1,2,2,2,1,0,0,0],
    [2,1,1,1,1,1,2,2,2,1,1,1,1]
];

let STARTING_LIFE = 40;
let STARTING_RESOURCES = 8;

let basic_tower = () => {
    return {
        title: "tower",
        cost: 2,
        range: 4,
        damage: 1,
        price: 1
    };
}

let control_tower = () => {
    return {
        title: "control_tower",
        cost: 2,
        range: 4,
        damage: 1,
        price: 1
    };
}

let sea_tower = () => {
    return {
        title: "sea_tower",
        cost: 5,
        range: 1,
        damage: 1,
        price: 1
    };
}

let normal_bug = () => {
    return {
        title: "normal_bug",
        life: 5,
        damage: 1,
        bounty: 1
    };
}

spawnRandomWorld();

function spawnRandomWorld(){
    var randomWorld = Math.floor(Math.random() * 6);

    if(randomWorld == 2){
        world = world2;
    }
    else if(randomWorld == 3){
        world = world3;
    }
    else if(randomWorld == 4){
        world = world4;
    }
    else if(randomWorld == 5){
        world = world5;
    }

    document.getElementById("life_points").querySelector("span").textContent = STARTING_LIFE;
    document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;
}

function displayWorld(){
    var output = '';

    for (var i=0; i<world.length; i++){
        output += "\n<tr class='row'>";
        for(var j=0; j<world[i].length; j++){
            if(world[i][j] == 0)
                output += '<td class="soil" id="tile_'+i+'_'+j+'"></td>';
            else if(world[i][j] == 1)
                output += '<td class="water" id="tile_'+i+'_'+j+'"></td>';
            else if(world[i][j] == 2)
                output += '<td class="grass" id="tile_'+i+'_'+j+'"></td>';
        }
        output += "\n</tr>";
    }
    // console.log(output);
    document.getElementById('world').innerHTML = output;
}

function activeTower(){
    var tower_buttons = document.getElementById("tower_buttons").getElementsByClassName("tower");
    for (var i = 0; i < tower_buttons.length; i++){
        tower_buttons[i].addEventListener("click", function(){
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
}

function spawnEnemies(){
    const soil_tiles = document.querySelectorAll('.soil');

    soil_tiles.forEach(soil => {
        var rect = soil.getBoundingClientRect();
        if (rect.left === 0){
            let starting_point_id = soil.getAttribute("id");
            console.log(starting_point_id);
        }
    });
}

function gameloop(){
    displayWorld();
    activeTower();
    spawnEnemies();
}

setTimeout(gameloop, 5)

let world_field = document.getElementById("world");

world_field.addEventListener("click", event => {
    let active_tower_id = document.getElementById("tower_buttons").querySelector(".active").getAttribute("id");
    let tower_clone = document.getElementById(active_tower_id).querySelector("img").cloneNode(true);
    let selected_tile = event.target.getAttribute("class");
    
    // function getOffset(element) {
    //     const rect = element.getBoundingClientRect();
    //     return {
    //       left: rect.left + window.scrollX,
    //       top: rect.top + window.scrollY
    //     };
    // }
    
    // console.log(getOffset(event.target).left);
    
    

    // var rect = event.target.getBoundingClientRect();
    // console.log(rect.left);

    if(active_tower_id === "tower" && selected_tile === "grass"){
        let tower = basic_tower();

        if(STARTING_RESOURCES >= 2){
            event.target.append(tower_clone);
            STARTING_RESOURCES -= tower.cost;
            document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;
        }
    }

    else if(active_tower_id === "control_tower" && selected_tile === "grass"){
        let tower = control_tower();

        if(STARTING_RESOURCES >= 2){
            event.target.append(tower_clone);
            STARTING_RESOURCES -= tower.cost;
            document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;
        }
    }

    else if(active_tower_id === "sea_tower" && selected_tile === "water"){
        let tower = sea_tower();

        if(STARTING_RESOURCES >= 5){
            event.target.append(tower_clone);
            STARTING_RESOURCES -= tower.cost;
            document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;
        }
    }

    if(STARTING_RESOURCES < 5){
        document.getElementById("sea_tower").disabled = true;
        document.getElementById("sea_tower").classList.remove("active");
        document.getElementById("sea_tower").classList.add("disabled");
        document.getElementById("tower").classList.add("active");

        if(STARTING_RESOURCES < 2){
            const tower_buttons = document.querySelectorAll('.tower');

            tower_buttons.forEach(tower_button => {
                tower_button.disabled = true;
                tower_button.classList.remove("active");
                tower_button.classList.add("disabled");
            });
        }
    }
});