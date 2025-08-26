function getDeveloper(id, callback) {
    setTimeout(() => {
        let dev = [];
        for (let i = 0; i < developer.length; i++) {
            if (developer[i].id === id) {
                dev = developer[i];
                break;
            }
        }
        callback({ dev: dev });
    }, 3000);
}

function getRepository(repoId, callback) {
    const repoMap = {
        "sherr": ["repo1", "repo2"],
        "john": ["repo3", "repo4"],
        "doe": ["repo5", "repo6"]
    };
    setTimeout(() => {
        let repositories = repoMap[repoId];
        if (repositories === undefined) {
            console.error("Invalid developer name provided");
            return;
        }
        callback(repositories);
    }, 3000);
}
function getCommits(repo, callback) {
    setTimeout(() => {
        const commits = {
            "repo1": ["commit1", "commit2"],
            "repo2": ["commit3", "commit4"],
            "repo3": ["commit5", "commit6"],
            "repo4": ["commit7", "commit8"],
            "repo5": ["commit9", "commit10"],
            "repo6": ["commit11", "commit12"]
        };
        let commitList = commits[repo];
        if (commitList === undefined) {
            console.error("Invalid repository provided");
            return;
        }
        callback(commitList);
    }, 3000);
}

let developer=[
    {id:1, name:"sherr", mobNo: 1234567890,repoId: 1},
    {id:2, name:"john", mobNo: 1234567890, repoId: 2},
    {id:3, name:"doe", mobNo: 1234567890, repoId: 3}
]

getDeveloper(1, (dev) => {
    console.log(dev);
    getRepository(dev.dev.name, (repositories) => {
        console.log(repositories, "repositories");
        repositories.forEach(repo => {
            getCommits(repo, (commits) => {
                console.log(commits, "commits for repo:", repo);
            });
        });
    });
});

