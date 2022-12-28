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
const TILE_SIZE = 40;
let basic_tower = () => {
    return {
        title: "basic_tower",
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
        bounty: 1,
        x: starting_point_x,
        y: starting_point_y,
        right: right_x,
        moveEnemy: function (){
            /** check next tile location */

            let mov_pattern = [2, 1, 1, 1, 1, 1];
            
            for(var mov_id = 0; mov_id < mov_pattern.length; mov_id++){
                console.log(mov_pattern[mov_id]);
                if(mov_pattern[mov_id] === 2){
                    this.x += ENEMIES_SPEED;
                }
                else if(mov_pattern[mov_id === 1]){
                    this.y -= ENEMIES_SPEED;
                }
            }
 
            const move_enemy = setTimeout(() => {
                this.moveEnemy();
            }, 1000);
        }
    };
}

let STARTING_LIFE = 20;
let STARTING_RESOURCES = 8;
let MAX_ENEMIES = 5;
let ENEMIES_SPEED = 1.05;
let enemies = [];
let starting_point_x = 0;
let starting_point_y = 0;
let right_x = 0;

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

    const life_points = document.getElementById("life_points").querySelector("span");
    life_points.textContent = STARTING_LIFE;
    document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;

    if(life_points.textContent <= 30 && life_points.textContent >= 21){
        life_points.classList.add("orange");
    }
    else if(life_points.textContent <= 20){
        life_points.classList.add("red");
    }
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
            starting_point_x = rect.left;
            starting_point_y = rect.top + 1;
            right_x = rect.right;
        }
    });
    // console.log(starting_point_x);
    // console.log(starting_point_y);
    /** use for loop to initialize enemies */
    if(enemies.length < MAX_ENEMIES){
        let enemy_spawn = normal_bug();
        
        enemy_spawn.y = (Math.floor(Math.random() * 700) + 1);
        enemies.push(enemy_spawn);
        // enemy_spawn.shootBullet();
        enemy_spawn.moveEnemy();
        setTimeout(spawnEnemies, 2000); 
    }
}

function drawEnemies(){
    let output = "";
    for(let enemy_id = 0; enemy_id < enemies.length; enemy_id++){
        output += `<div class='${ enemies[enemy_id].title } right_front_bug ' style='top: ${ starting_point_y }px; left: ${ enemies[enemy_id].x * TILE_SIZE }px;'></div>`; 
        // if(enemies[enemy_id].x < -65){
        //     enemies.shift();
        // }
    } 
    document.getElementById("enemies").innerHTML = output;
}

function gameloop(){
    /** All functions that will display something go here */
    displayWorld();
    activeTower();
    drawEnemies();

    setTimeout(gameloop, 16);
}

gameloop();
setTimeout(spawnEnemies, 1000);

let world_field = document.getElementById("world");

world_field.addEventListener("click", event => {
    let active_tower_id = document.getElementById("tower_buttons").querySelector(".active").getAttribute("id");
    let tower_clone = document.getElementById(active_tower_id).querySelector("img").cloneNode(true);
    let selected_tile = event.target.getAttribute("class");
    let element = event.target.childElementCount;
    
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

    if(element === 0){
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

function enemyMovement(){
    // if(world[this.y][this.x] == 0){
    // }
}