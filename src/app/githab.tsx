interface GitHubUser {
    avatar_url?: string;
    html_url: string;
    public_repos: number;
    name: string;
}

export function github() {
    fetch(`https://api.github.com/users/lalka147712712`)
    .then(response => response.json())
    .then((json: GitHubUser) => { // Изменили тип на GitHubUser
        // Создаем новый объект с нужными свойствами напрямую
        const user: GitHubUser = (({ avatar_url, html_url, public_repos, name }) => ({ avatar_url, html_url, public_repos, name }))(json);

        console.log(user);
    });
}