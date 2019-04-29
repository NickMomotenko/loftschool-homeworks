// Реализуйте компонент Home
// Он должен показывать приветствие.
// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.


import React, { Component } from 'react';
import styles from './Home.module.css'

class Home extends Component{
    render(){
        return(
            <div className={styles.container}>
                <p className="t-greeting">Приветствуем в почтовом клиенте!</p>
            </div>
        );
    }
}

export default Home;