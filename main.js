// fetch web api implementation

const loadFollowers = () => {
    const url = "https://api.github.com/users/Alidhuniya/followers";
    fetch(url)
    .then((res) => {
       return res.json();
    })
    .then((users) => {
        console.log(users);
        let output = '';

        for (var i in users) {
            output += `
            <div class="user">
            <img src= "${users[i].avatar_url}" width="100" height="100">
            <li>Name: ${users[i].login}</li>
            <li>ID: ${users[i].id}</li>
            <li>Profile: <a href="${users[i].html_url}">Go to Followers Github Profile</a></li>
            </div>
            `
        }

        document.getElementById("followers").innerHTML = output;
    })
    .catch((error) => {
        console.error(error);
    })
}


document.getElementById("btn").addEventListener("click", loadFollowers);


/*
const loadFollowers = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.github.com/users/Alidhuniya/followers", true);

    xhr.onload = () => {
        if (xhr.status === 200) {
            const users = JSON.parse(xhr.responseText);
            
            let output = '';

            for (var i in users) {
                output += `
                <div class="user">
                <img src= "${users[i].avatar_url}" width="100" height="100">
                <li>Name: ${users[i].login}</li>
                <li>ID: ${users[i].id}</li>
                <li>Profile: <a href="${users[i].html_url}">Go to Followers Github Profile</a></li>
                </div>
                `
            }

            
           
            

            document.getElementById("followers").innerHTML = output;

            
        }
        else if  (xhr.status === 403) {
            return document.getElementById("error").innerHTML = "https://api.github.com/users/Alidhuniya/followers 403 (rate limit exceeded)" ;
          }
    }

    xhr.send();
}


document.getElementById("btn").addEventListener("click", loadFollowers);
*/