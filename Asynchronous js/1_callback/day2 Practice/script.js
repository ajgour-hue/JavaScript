

// function iceCreamLekarAao( address , cb){
//     cb({ lat: 20  , lon: 40});
// }


// iceCreamLekarAao("indrapuri se" , function(dets){
//         console.log(dets.lon);
// })



// 1................................


// ## Exercise 1 — Very Easy (Warming up)

// **Task (Hindi):** Ek function banao `afterDelay`

// **Requirements:**
// - Ye function do cheezein lega:
//   1. `time` (milliseconds)
//   2. `callback` function
// - Given `time` ke baad `callback` call kare
// - Callback ke andar `"Callback executed"` print hona chahiye

// **Use case:**
// > “2 second baad ek kaam karna hai”

// **Goal:**
// - Samajhna ki callback delay ke baad kaise execute hota hai
// - Ye `setTimeout` + callback connection hai

// ---


// function afterDelay(time, cb) {
//     console.log("Doing Something . . . . . . . . .")
//     setTimeout(function () {
//         cb();
//     }, time);
// }

// afterDelay(2000, function () {
//     console.log("Callback executed");
// });







// ## Exercise 2 — Intermediate (Data flow)

// **Task (Hindi):** Ek function banao `getUser`

// **Requirements:**
// - `getUser` `username` lega
// - 1 second ke baad `callback` ko ek object de:
//   - `id`
//   - `username`

// **Then:**
// - Callback ke andar ek aur function call karo `getUserPosts`

// **`getUserPosts` requirements:**
// - `userId` lega
// - 1 second ke baad `callback` ko `posts` ka array de

// **Final output:**
// - User ka `username` print ho
// - Fir uske `posts` print ho

// **Goal:**
// - Samajhna ki ek async ka result next async ko kaise milta hai
// - Callback chaining practice

// ---
// function getUser(username, cb) {
//     setTimeout(function () {
//         cb({ id: 1212, username: username });
//     }, 1000);
// }

// function getUserPosts(userId, cb) {
//     setTimeout(function () {
//         cb(["post1", "post2"]);
//     }, 1000);
// }

// getUser("ajay", function (userData) {
//     console.log("Username:", userData.username);

//     getUserPosts(userData.id, function (posts) {
//         console.log("Posts:", posts);
//     });
// });


// ## Exercise 3 — Intermediate (Callback dependency — thoda painful)

// **Task (Hindi):** Teen functions banao:

// 1. `loginUser`
//    - 1 second baad callback ko `user` object de
// 2. `fetchPermissions`
//    - `userId` lega
//    - 1 second baad callback ko `permissions` array de
// 3. `loadDashboard`
//    - `permissions` lega
//    - 1 second baad callback ko `"Dashboard loaded"` bole

// **Flow:**
// - Pehle `loginUser`
// - Uske andar `fetchPermissions`
// - Uske andar `loadDashboard`
// - Final output console mein print ho

// **Goal:**
// - Callback nesting ko feel karna
// - Yehi structure baad mein callback hell banta hai

// ---


function loginUser(cb) {
    setTimeout(function () {
        cb({ id: 1212, name: "ajay" });
    }, 1000);
}

function fetchPermissions(userId, cb) {
    setTimeout(function () {
        cb(["read", "write", "admin"]);
    }, 1000);
}

function loadDashboard(permissions, cb) {
    setTimeout(function () {
        cb("Dashboard loaded");
    }, 1000);
}

loginUser(function (user) {
    fetchPermissions(user.id, function (permissions) {
        loadDashboard(permissions, function (message) {
            console.log("Permissions:", permissions);
            console.log(message);
        });
    });
});

