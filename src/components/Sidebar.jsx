 import styles from './Sidebar.module.css';
 
    function Sidebar (){
    return (
     <aside className={styles.sidebar}>
      <img src="https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=40" />
     
     <div className={styles.profile} >
       <strong>Diego Brasileiro</strong>
       <span>Web Developer</span>
     </div>

      <footer>
         <a href="#">Editar seu Perfil</a>
      </footer>
     </aside>
    );
 }
  export default Sidebar ;