function print_time() {
  let d = new Date();
  let time = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  console.log(time);
}

setInterval(print_time, 1000);
