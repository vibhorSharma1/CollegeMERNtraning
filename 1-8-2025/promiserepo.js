import React from "react";

function getDeveloper(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dev = developer.find(d => d.id === id);
            if (dev) resolve({ dev: dev });
            else reject(`Developer with ID ${id} not found.`);
        }, 3000);
    });
}

function getRepository(repoId, callback) {
    const repoMap = {
        "sherr": ["repo1", "repo2"],
        "john": ["repo3", "repo4"],
        "doe": ["repo5", "repo6"]
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let repositories = repoMap[repoId];
            if (repositories === undefined) {
                reject("Invalid developer name provided");
            } else {
                resolve(repositories);
            }
        }, 3000);
    });
}
function getCommits(repo, callback) {
    const commits = {
        "repo1": ["commit1", "commit2"],
        "repo2": ["commit3", "commit4"],
        "repo3": ["commit5", "commit6"],
        "repo4": ["commit7", "commit8"],
        "repo5": ["commit9", "commit10"],
        "repo6": ["commit11", "commit12"]
    };
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let commitList = commits[repo];
            if (commitList === undefined) {
                reject("Invalid repository provided");
            } else {
                resolve(commitList);
            }
        }, 3000);
    });
}

let developer=[
    {id:1, name:"sherr", mobNo: 1234567890,repoId: 1},
    {id:2, name:"john", mobNo: 1234567890, repoId: 2},
    {id:3, name:"doe", mobNo: 1234567890, repoId: 3}
]

getDeveloper(1)
.then(dev => {
    console.log(dev);
    return getRepository(dev.dev.name);
})
.then(repositories => {
    console.log(repositories, "repositories");
    return Promise.all(repositories.map(repo => getCommits(repo)));
})
.then(commitsList => {  
    commitsList.forEach((commits, index) => {
        console.log(commits, "commits for repo:", repositories[index]);
    });
})
.catch(error => console.error(error));

