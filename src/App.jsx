import styles from "./App.module.css";
import Input from "./component/inputComponent/Input";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <label htmlFor="all_pages">All Pages</label>
        <Input id={"all_pages"} />
      </div>
      <div className={styles.border}></div>
      <div className={styles.content_flex}>
        <div className={styles.header}>
          <label htmlFor="page1">Page 1</label>
          <Input id={"page1"} />
        </div>
        <div className={styles.header}>
          <label htmlFor="page2">Page 2</label>
          <Input id={"page2"} />
        </div>
        <div className={styles.header}>
          <label htmlFor="page3">Page 3</label>
          <Input id={"page3"} />
        </div>
        <div className={styles.header}>
          <label htmlFor="page4">Page 4</label>
          <Input id={"page4"} />
        </div>
        <div className={styles.header}>
          <label htmlFor="page5">Page 5</label>
          <Input id={"page5"} />
        </div>
        <div className={styles.header}>
          <label htmlFor="page6">Page 6</label>
          <Input id={"page6"} />
        </div>
      </div>
      <div className={styles.border2}></div>
      <div className={styles.btn_container}>
        <button>Done</button>
      </div>
    </div>
  );
}

export default App;
