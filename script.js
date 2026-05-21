const workoutInput =
document.getElementById("workout");

const durationInput =
document.getElementById("duration");

const caloriesInput =
document.getElementById("calories");

const addBtn =
document.getElementById("addBtn");

const workoutList =
document.getElementById("workoutList");

const totalWorkouts =
document.getElementById("totalWorkouts");

const totalCalories =
document.getElementById("totalCalories");

const fitnessImg =
document.getElementById("fitnessImg");

/* FITNESS IMAGES */

const images = [

"https://cdn-icons-png.flaticon.com/512/2964/2964514.png",

"https://cdn-icons-png.flaticon.com/512/1048/1048953.png",

"https://cdn-icons-png.flaticon.com/512/2784/2784445.png",

"https://cdn-icons-png.flaticon.com/512/857/857455.png"

];

/* LOCAL STORAGE */

let workouts =
JSON.parse(localStorage.getItem("workouts"))
|| [];

/* DISPLAY WORKOUTS */

function displayWorkouts(){

    workoutList.innerHTML = "";

    let caloriesTotal = 0;

    workouts.forEach((workout, index) => {

        caloriesTotal +=
        Number(workout.calories);

        const workoutItem =
        document.createElement("div");

        workoutItem.classList.add("workout-item");

        workoutItem.innerHTML = `

            <div class="workout-info">

                <h3>🏋️ ${workout.name}</h3>

                <p>
                    ⏱ Duration:
                    ${workout.duration} mins
                </p>

                <p>
                    🔥 Calories:
                    ${workout.calories}
                </p>

            </div>

            <button class="delete-btn"
                    onclick="deleteWorkout(${index})">

                Delete

            </button>
        `;

        workoutList.appendChild(workoutItem);
    });

    totalWorkouts.innerText =
    workouts.length;

    totalCalories.innerText =
    caloriesTotal;

    localStorage.setItem(
        "workouts",
        JSON.stringify(workouts)
    );
}

/* ADD WORKOUT */

addBtn.addEventListener("click", function(){

    if(
        workoutInput.value === "" ||
        durationInput.value === "" ||
        caloriesInput.value === ""
    ){

        alert("Please fill all fields");

        return;
    }

    const workout = {

        name: workoutInput.value,

        duration: durationInput.value,

        calories: caloriesInput.value
    };

    workouts.push(workout);

    /* RANDOM FITNESS IMAGE */

    const randomImage =
    Math.floor(Math.random() * images.length);

    fitnessImg.src = images[randomImage];

    workoutInput.value = "";

    durationInput.value = "";

    caloriesInput.value = "";

    displayWorkouts();
});

/* DELETE */

function deleteWorkout(index){

    workouts.splice(index, 1);

    displayWorkouts();
}

/* INITIAL LOAD */

displayWorkouts();
