export function renderGameObjects(GameObjectArr, p5) {
  GameObjectArr.forEach((e) => {
    p5.ellipse(
      e.transform.position.x,
      e.transform.position.y,
      e.transform.size
    );
  });
}
export function rand(n) {
  return Math.floor(Math.random() * n);
}
