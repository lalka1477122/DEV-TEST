"use client"; 
import { useState, useEffect } from "react";
import styles from ".//Modallocalwin.module.scss";


export function Modal_local_win() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasVisited = localStorage.getItem("hasVisited");
        if (!hasVisited) {
            setIsOpen(true);
            // localStorage.setItem("hasVisited", "true");
        }
    }, []);

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        // isOpen && 
        (
            <div className={styles.modal_overlay}>
                <div className={styles.modal_content}>
                    <h2 className={styles.modal_title}>Добро пожаловать!</h2> {/* Заголовок модального окна */}
                    <p className={styles.modal_message}>
                        Спасибо, что посетили наш сайт! Мы рады видеть вас здесь. 
                        Пожалуйста, ознакомьтесь с нашими последними предложениями и новостями.
                    </p> {/* Сообщение в модальном окне */}
                    <button className={styles.modal_close_button} onClick={closeModal}>Закрыть</button> {/* Кнопка закрытия */}
                </div>
            </div>
        )
    );
}