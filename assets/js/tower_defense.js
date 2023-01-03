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

let normal_bug = (spawn_point_x, spawn_point_y) => {
    return {
        title: "normal_bug",
        life: 5,
        damage: 1,
        bounty: 1,
        prev_x: 0,
        prev_y: 0,
        x: spawn_point_x,
        y: spawn_point_y,
        moveEnemy: function (){
            /** check next tile location */
            console.log("location", this.x, this.y);
            let location_x = this.x;
            let location_y = this.y;
            let top_y = location_y - 1;
            let bottom_y = location_y + 1;
            let right_x = location_x + 1;

            console.log(top_y,
                bottom_y,
                right_x);
            let next_top_tile = (world[location_y - 1].length && this.prev_x != top_y && world[location_y - 1][location_x] == 0) ? top_y : location_y;
            let next_right_tile = (world[location_y][location_x + 1] == 0) ? right_x : location_x;
            let next_bottom_tile = (world[location_y + 1].length && world[location_y + 1][location_x] == 0) ? bottom_y : location_y;
            
            console.log(world[location_y][location_x], next_top_tile, next_right_tile, next_bottom_tile);
            
            this.x = next_right_tile;
            this.y = (world[location_y - 1][location_x] == 0) ? next_top_tile : next_bottom_tile;
            this.prev_x = location_x;
            this.prev_y = location_y;

            // console.log(parseInt(this.x / ENEMIES_SPEED) / parseInt(ENEMIES_SPEED), parseInt(this.y / ENEMIES_SPEED) / parseInt(ENEMIES_SPEED), world[0].length, world[0].length * ENEMIES_SPEED);
            // let mov_pattern = [2, 1, 1, 1, 1, 1];
            
            // for(var mov_id = 0; mov_id < mov_pattern.length; mov_id++){
            //     // console.log(mov_pattern[mov_id]);
            //     if(mov_pattern[mov_id] === 2){
            //         this.x += ENEMIES_SPEED;
            //     }
            //     else if(mov_pattern[mov_id === 1]){
            //         this.y -= ENEMIES_SPEED;
            //     }
            // }
 
            const move_enemy = setTimeout(() => {
                this.moveEnemy();
            }, 1000);
        }
    };
}

let elite_bug = () => {
    return {
        title: "elite_bug",
        life: 8,
        damage: 5,
        bounty: 5,
        x: starting_point_x,
        y: starting_point_y,
        moveEnemy: function (){
            /** check next tile location */

            let mov_pattern = [2, 1, 1, 1, 1, 1];
            
            for(var mov_id = 0; mov_id < mov_pattern.length; mov_id++){
                // console.log(mov_pattern[mov_id]);
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
let tiles = [];
let towers = [];
let starting_point_x = 0;
let starting_point_y = 0;

var enemies_spawn_timer = 45000;

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

    console.log(`World ${randomWorld}`)

    for(let row_id = 0; row_id < world.length; row_id++){
        console.log("row", row_id, world[row_id][0])
        if(world[row_id][0] === 0){
            starting_point_y = row_id;
            break;
        }
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
    // soil_tiles.forEach(soil => {
    //     var rect = soil.getBoundingClientRect();
    //     if (rect.left === 0){
    //         starting_point_x = rect.left;
    //         starting_point_y = rect.top + 1;
    //         right_x = rect.right;
    //     }
    // });
    console.log("starting_point_y", starting_point_y);
    /** use for loop to initialize enemies */
    if(enemies.length < MAX_ENEMIES){
        let normal_enemy_spawn = normal_bug(starting_point_x, starting_point_y);
        // let elite_enemy_spawn = elite_bug(starting_point_x, starting_point_y);
        
        // normal_enemy_spawn.y = (Math.floor(Math.random() * 700) + 1);
        // elite_enemy_spawn.y = (Math.floor(Math.random() * 700) + 1);

        if(enemies.length < 4){
            enemies.push(normal_enemy_spawn);
            normal_enemy_spawn.moveEnemy();
        }
        else{
            // enemies.push(elite_enemy_spawn);
            // elite_enemy_spawn.moveEnemy();
        }
        console.log(enemies);
        document.getElementById("start_wave").disabled = true; 
        var spawn_enemies = setTimeout(spawnEnemies, 2000);

        if(STARTING_LIFE <= 0){
            clearTimeout(spawn_enemies);
        }
    }
}

function drawEnemies(){
    let output = "";
    let game_over_modal = document.getElementById("game_over_modal");
    for(let enemy_id = 0; enemy_id < enemies.length; enemy_id++){
        output += `<div class='${ enemies[enemy_id].title } right_front_bug ' style='top: ${ enemies[enemy_id].y * TILE_SIZE }px; left: ${ enemies[enemy_id].x * TILE_SIZE }px;'></div>`; 
        console.log("enemies[enemy_id].y", enemies[enemy_id].y)
        if(enemies[enemy_id].x >= 12){
            STARTING_LIFE -= enemies[enemy_id].damage;
            document.getElementById("life_points").querySelector("span").textContent = STARTING_LIFE;
            enemies.shift();

            if(enemies.length === 0){
                console.log("0");
                document.getElementById("start_wave").disabled = false;  
                setTimeout(spawnEnemies, 30000);
            }

            if(STARTING_LIFE <= 0){
                game_over_modal.classList.add("unhide");
            }
        }
    } 
    document.getElementById("enemies").innerHTML = output;
}

let start_wave_button = document.getElementById("start_wave");
let play_again_button = document.getElementById("play_again");

start_wave_button.addEventListener("click", startWave);
play_again_button.addEventListener("click", playAgain);


function displayWorld(){
    var output = '';
    let world_field = document.getElementById("world");
    world_field.innerHTML = "";

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
    world_field.innerHTML = output;

    // callback(world_field);
}

let worldClick = () => {
    let world_field = document.querySelector("#world_container");
    world_field.addEventListener("click", event => {
        // event.stopPropagation();
        let active_tower_id = document.getElementById("tower_buttons").querySelector(".active").getAttribute("id");
        let tower_clone = document.getElementById(active_tower_id).querySelector("img").cloneNode(true);
        let current_tile = event.target;
        let selected_tile = current_tile.classList;
        let element = event.target.childElementCount;

        if(selected_tile.contains("grass")){
            console.log("I am grass", current_tile);
            return;
        }
        
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
            // document.getElementById("sea_tower").classList.remove("active");
            document.getElementById("sea_tower").classList.add("disabled");
            // document.getElementById("tower").classList.add("active");
        }

        if(STARTING_RESOURCES < 2){
            const tower_buttons = document.querySelectorAll('.tower');

            tower_buttons.forEach(tower_button => {
                tower_button.disabled = true;
                tower_button.classList.remove("active");
                tower_button.classList.add("disabled");
            });
        }
    });
}

function startWave(){
    setTimeout(spawnEnemies, 1000);
    STARTING_RESOURCES += 5;
    document.getElementById("resources").querySelector("span").textContent = STARTING_RESOURCES;
}

function playAgain(){
    location.reload();
}

function gameloop(){
    drawEnemies();
    activeTower();
    
    setTimeout(() => {;
        gameloop(); 
    }, 33);
}

displayWorld();
worldClick();

gameloop();
setTimeout(spawnEnemies, 45000);

// if(STARTING_LIFE <= 0){
//     clearTimeout(gameloop);
// }
