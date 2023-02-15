let styles = ["Джаз", "Блюз"];

styles.push("Рок-н-ролл");
styles.splice(1, 1, "Классика");
console.log(styles.shift());
styles.unshift("Рэп", "Регги");

console.log(styles);
