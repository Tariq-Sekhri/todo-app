import styles from './todoitem.module.css';
export default function TodoItem({ item,todos,setTodos}) {
    function handleDelete(item){
        console.log(item.name+" was deleted")

        setTodos( todos.filter((todo)=>todo.name!==item.name ));
    }

    function handleClick(name){

      setTodos(  todos.map((todo)=>
            todo.name === name ? {...todo, done:!todo.done} : todo
        ))

    }

    const completedthing = item.done ? styles.completed : ""
    return(
    <div className={styles.item}>
        <div  className={styles.itemName}>
           <span className={completedthing}   onClick={() => handleClick(item.name)}> {item.name}</span>
            <span>
            <button onClick={() => handleDelete(item)} className={styles.delteButton}>x</button>
        </span>
        </div>

        <hr className={styles.line}/>
    </div>
    );
}