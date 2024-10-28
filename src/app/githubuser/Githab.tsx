"use client"
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Github.module.css";


interface GitHubUser {
    avatar_url?: string;
    html_url: string;
    public_repos: number;
    name: string;
}


export function Github({ userg }: { userg: string }) { // Деструктуризация пропса
    const [user, setUser] = useState<GitHubUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // ... остальной код ...


    useEffect(() => {
        // Запрос к API GitHub для получения информации о пользователе
        fetch(`${userg}`)
            .then(response => {
                if (!response.ok) {
                    console.log(userg)
                    throw new Error(`Не удалось загрузить данные пользователя ${userg}`);
                }
                return response.json();
            })
            .then((json: GitHubUser) => {
                setUser(json);
                setIsLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return (
        <div className="github_card">
            {isLoading ? (
                <p>Загрузка...</p>
            ) : error ? (
                <p className="error">{error}</p>
            ) : (
                user && (
                    <div className={styles.user_card} >
                        <Image
                            src="https://avatars.githubusercontent.com/u/163737985?v=4"
                            alt="Аватарка пользователя"
                            width={180}
                            height={180}
                            priority
                        />
                        <h2>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                {user.name}
                            </a>
                        </h2>

                        <p>сделал 100% вклад в проект</p>

                        <button onClick={() => window.open(user.html_url, "_blank")}>
                            Перейти на GitHub
                        </button>
                    </div>
                )
            )}
        </div>
    );
}
