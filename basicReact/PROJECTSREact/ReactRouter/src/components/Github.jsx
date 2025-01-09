import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([]);
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch("https://api.github.com/users/amit07d")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });

        fetch("https://api.github.com/users/amit07d/repos")
            .then((res) => res.json())
            .then((repos) => {
                console.log(repos);
                setRepos(repos);
            });
    }, []);
    return (
        <>
            <div className="font-bold text-2xl mt-4">Username: {data.login}</div>
            <div className="font-bold m-2 text-xl mb-2">
                Github Followers : {data.followers}
            </div>
            <img
                src={data.avatar_url}
                alt="Avatar"
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <div className="font-bold text-2xl mt-3 mb-3">Total Repositories : {repos.length}</div>
            <ul>
                {repos.map((repo) => (
                    <li key={repo.id} className="mb-3">
                        <a href={repo.html_url} className="text-blue-500" target="_blank" rel="noopener noreferrer" >
                        {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Github;
