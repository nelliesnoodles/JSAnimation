// JavaScript source code
var x = 0;
var y = 0;

var my_interval;


// change speed
const speed_interval = 50;
var speed = 1000;
const min_speed = 50;
var max_speed = 4000;

//change direction
const motion_interval = 5;
var right_motion = 5;
var down_motion = 5;
const max_right_motion = 200;
const max_down_motion = 200;
const min_right = 0;
const min_down = 0;



function reset_all() {
    speed = 1000
    right_motion = 5
    down_motion = 10
    x = 0
    y = 0
}


/* -----unused 
function spawn_random() {   
    return Math.round(Math.random() * 100);
}
*/

function remove_all_children() {
    var parent = document.getElementById('stars')
    if (parent.hasChildNodes()) {
        let children = parent.childNodes;

        for (let i = 0; i < children.length; i++) {
            node = children[i]
            node.remove()
        };
    }
}
function draw_stars(left_x, top_y) {
    
    var parent = document.getElementById('stars')
    var child = document.createElement("div")
    remove_all_children()
    child.classList.add('dots')
    new_x = left_x.toString() + 'px'
    //console.log(new_x)
    new_y = top_y.toString() + 'px'
    child.style.top = new_y
    child.style.left = new_x
    //console.log(new_x)
    parent.appendChild(child)
    
};

function move_star() {
    max_y = window.innerHeight - 50
    max_x = window.innerWidth - 50
    //console.log(max_x)
    if (x > max_x) {
        x = 0
    }
    else {
        x += right_motion;
    }
    if (y > max_y) {
        y = 0
    }
    else {
        y += down_motion;
        
    }  
    draw_stars(x, y)
    
}
function stop_run() {
    clearInterval(my_interval)

}
function run() {
    my_interval = setInterval(move_star, speed);
}

function slow_speed() {
    stop_run()
    if (speed < max_speed) {
        speed += speed_interval
    }

    /* alerts cause violations here 
    else {
        alert("You are at the set slowest speed.")
    }
    */
    run()
}


function increase_speed() {
    stop_run()
    if (speed > min_speed) {
        speed -= speed_interval
    }
    
    run()
}

function drop_plus() {
    stop_run()
    if (down_motion < max_down_motion) {
        down_motion += motion_interval
    }
    run()
}

function change_fall_left() {
    stop_run()
    if (right_motion < max_right_motion) {
        right_motion += motion_interval;
    }
    run()
}

function change_fall_right() {
    stop_run()
    if (right_motion > min_right) {
        right_motion -= motion_interval
    }
    run()
}

function drop_minus() {
    stop_run()
    if (down_motion > min_down) {
        down_motion -= motion_interval
    }
    run()

}


function reset_all() {
    speed = 1000
    right_motion = 5
    down_motion = 10
    x = 0
    y = 0
    stop_run()
    remove_all_children()
}

function close_inst() {
    element = document.getElementById("instructions")
    element.style.display = 'none'
}

function show_inst() {
    if (my_interval) {
        clearInterval(my_interval);
    }

    element = document.getElementById('instructions')
    element.style.display = 'flex'
}

function set_EventListeners() {
    //test on each added eventlistener
    let start = document.getElementById('start')
    start.addEventListener('click', run)

    let speedUp = document.getElementById('speedPlus')
    speedUp.addEventListener('click', increase_speed)

    let slowdown = document.getElementById('speedMinus')
    slowdown.addEventListener('click', slow_speed)

    let moveMoreRight = document.getElementById('leftPlus')
    moveMoreRight.addEventListener('click', change_fall_left)

    let moveLessRight = document.getElementById('leftMinus')
    moveLessRight.addEventListener('click', change_fall_right)

    let dropMore = document.getElementById('downPlus')
    dropMore.addEventListener('click', drop_plus)

    let downLess = document.getElementById('downMinus')
    downLess.addEventListener('click', drop_minus)

    let stop = document.getElementById('stop')
    stop.addEventListener('click', stop_run)

    let reset = document.getElementById('reset')
    reset.addEventListener('click', reset_all)

    let show_about = document.getElementById("about")
    show_about.addEventListener('click', show_inst)

    let close_about = document.getElementById("close_instructions")
    close_about.addEventListener('click', close_inst)

    

}




window.addEventListener('load', (event) => {
   set_EventListeners()
});
